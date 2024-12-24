import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string) {
  try {
    await resend.emails.send({
      from: 'Stuti <welcome@pillow-connect.com>',
      to: email,
      subject: '🎉 Welcome To Pillow-Connect waitlist | Early Access Just for You!',
      html: `
     <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6; color: #333;">
  <p>Hey There,</p>
  <p>Big news! Pillow Connect is finally here, and as one of our waitlist VIPs, you get first dibs on everything cool we're building.</p>

  <p>We’re creating <strong>THE AI-powered talent marketplace</strong> where talent seekers and hiring individuals vibe, connect, and make magic happen. Don’t miss out – <strong>join our community on WhatsApp</strong> to stay in the loop, hear from us early, and unlock all the premium features first.</p>

  <p style="font-size: 1.1em; margin: 20px 0;">
    <strong>👉 <a href="https://discord.gg/Q9cYFvM55f" style="color: #02577a; text-decoration: none;">Join Our Discord Community</a></strong>
  </p>

  <h3 style="color: #02577a;">🛠 For Talent Seekers:</h3>
  <ul>
    <li>Work from anywhere, anytime with flexible remote contracts.</li>
    <li>Barter collaborations if you’re just starting out and want experience.</li>
    <li>Get verified for authentic and trustworthy relationships.</li>
    <li>Manage your portfolio effortlessly – showcase it to anyone, anytime.</li>
    <li>Track and manage your projects like a pro.</li>
    <li>Tap into a global talent community full of creators, freelancers, brands, and more.</li>
  </ul>

  <h3 style="color: #02577a;">💼 For Hiring Individuals:</h3>
  <ul>
    <li>Save time with our AI-powered smart interviews – super effective, super quick.</li>
    <li>Get matched with top-notch talent perfectly tailored to your needs.</li>
    <li>Find a diverse talent pool in one place – agencies, freelancers, creators, and even startup founders.</li>
    <li>No hiring fees (for now!) – forget LinkedIn and overpriced staffing agencies.</li>
  </ul>

  <p style="font-size: 1.1em; margin: 20px 0;">Ready to see the future of talent hiring and collaboration? Let’s make it happen. 🚀</p>

  <p style="font-size: 1.1em;">
    <strong>👉 <a href="https://discord.gg/Q9cYFvM55f" style="color: #02577a; text-decoration: none;">Join Our Discord Community</a></strong>
  </p>

  <p style="margin-top: 40px;">Catch you inside,</p>
  <p style="font-weight: bold;">The Pillow-Connect Team</p>

  <!-- Social Icons Section -->
  <div style="margin-top: 30px; text-align: center;">
    <a href="https://www.instagram.com/pillow.connect/" target="_blank" style="margin: 0 10px; text-decoration: none;">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="#E1306C">
        <path d="M12 2.16c3.22 0 3.6.01 4.87.07 1.17.05 1.96.23 2.4.39.6.23 1.03.5 1.49.96.46.46.73.89.96 1.49.16.44.34 1.23.39 2.4.06 1.27.07 1.65.07 4.87s-.01 3.6-.07 4.87c-.05 1.17-.23 1.96-.39 2.4a3.55 3.55 0 0 1-.96 1.49 3.55 3.55 0 0 1-1.49.96c-.44.16-1.23.34-2.4.39-1.27.06-1.65.07-4.87.07s-3.6-.01-4.87-.07c-1.17-.05-1.96-.23-2.4-.39a3.55 3.55 0 0 1-1.49-.96 3.55 3.55 0 0 1-.96-1.49c-.16-.44-.34-1.23-.39-2.4C2.17 15.6 2.16 15.22 2.16 12s.01-3.6.07-4.87c.05-1.17.23-1.96.39-2.4a3.55 3.55 0 0 1 .96-1.49A3.55 3.55 0 0 1 5.07 2.16c.44-.16 1.23-.34 2.4-.39 1.27-.06 1.65-.07 4.87-.07zm0 1.78c-3.18 0-3.55.01-4.8.06-1.02.05-1.57.22-1.93.36-.47.19-.81.41-1.16.75-.34.35-.56.69-.75 1.16-.14.36-.31.91-.36 1.93-.05 1.25-.06 1.62-.06 4.8s.01 3.55.06 4.8c.05 1.02.22 1.57.36 1.93.19.47.41.81.75 1.16.35.34.69.56 1.16.75.36.14.91.31 1.93.36 1.25.05 1.62.06 4.8.06s3.55-.01 4.8-.06c1.02-.05 1.57-.22 1.93-.36.47-.19.81-.41 1.16-.75.34-.35.56-.69.75-1.16.14-.36.31-.91.36-1.93.05-1.25.06-1.62.06-4.8s-.01-3.55-.06-4.8c-.05-1.02-.22-1.57-.36-1.93a3.88 3.88 0 0 0-.75-1.16 3.88 3.88 0 0 0-1.16-.75c-.36-.14-.91-.31-1.93-.36-1.25-.05-1.62-.06-4.8-.06zm0 4.33a5.51 5.51 0 1 1 0 11.03 5.51 5.51 0 0 1 0-11.03zm0 1.74a3.77 3.77 0 1 0 0 7.54 3.77 3.77 0 0 0 0-7.54zm4.23-2.2a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z"/>
      </svg>
    </a>
    <a href="https://x.com/PillowConnect" target="_blank" style="margin: 0 10px; text-decoration: none;">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="#1DA1F2">
        <path d="M23.643 4.937c-.835.371-1.732.623-2.675.735.963-.576 1.7-1.49 2.048-2.577-.9.532-1.896.92-2.958 1.127a5.515 5.515 0 0 0-9.532 3.767c0 .432.05.855.144 1.26A15.59 15.59 0 0 1 1.671 3.15a5.507 5.507 0 0 0-.748 2.773c0 1.915.975 3.606 2.457 4.598-.904-.03-1.753-.277-2.492-.691v.07a5.52 5.52 0 0 0 4.418 5.412 5.54 5.54 0 0 1-2.484.094 5.528 5.528 0 0 0 5.157 3.83 11.068 11.068 0 0 1-8.185 2.285A15.632 15.632 0 0 0 8.448 21c10.06 0 15.56-8.34 15.56-15.57l-.018-.709c1.066-.772 1.991-1.738 2.732-2.835z"/>
      </svg>
    </a>
    <a href="https://www.linkedin.com/company/pillow-connect/?viewAsMember=true" target="_blank" style="margin: 0 10px; text-decoration: none;">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" fill="#0077B5">
        <path d="M19.5 3H4.5C3.67 3 3 3.67 3 4.5v15c0 .83.67 1.5 1.5 1.5h15c.83 0 1.5-.67 1.5-1.5v-15C21 3.67 20.33 3 19.5 3zM8.27 17.72H5.5v-7h2.77v7zm-1.39-8.01h-.03C6.27 9.71 5.5 8.91 5.5 7.86c0-1.05.8-1.86 2.05-1.86 1.25 0 2.02.8 2.05 1.86 0 1.05-.77 1.85-2.02 1.85zm11.62 8.01h-2.77v-3.6c0-.87-.31-1.46-1.1-1.46-.6 0-.96.41-1.11.81-.06.15-.08.35-.08.56v3.7h-2.77s.04-6.02 0-7h2.77v.99c.37-.56 1.03-1.36 2.5-1.36 1.82 0 3.19 1.19 3.19 3.74v3.63z"/>
      </svg>
    </a>
  </div>
</div>

      `,
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
}