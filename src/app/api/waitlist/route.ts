import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/db";
import { sendWelcomeEmail } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    try {
      // Add to database
      await addToWaitlist(email);
      
      // Send welcome email
      await sendWelcomeEmail(email);
      

      return NextResponse.json(
        { message: "Successfully joined waitlist" },
        { status: 200 }
      );
    } catch (error) {
      if (error instanceof Error && error.message === 'Email already exists in waitlist') {
        return NextResponse.json(
          { error: "Email already registered" },
          { status: 409 }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error("Waitlist error:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}