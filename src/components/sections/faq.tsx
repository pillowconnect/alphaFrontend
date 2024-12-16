"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="w-11/12 sm:w-4/5 mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Heading Section */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-[#02577a] leading-tight">
            Frequently <span className="text-black">Asked</span> Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#02577a]/80 mb-6">
            Have another question? Contact us on{" "}
            <Link
              href="https://twitter.com"
              className="underline hover:text-[#02577a]/80 text-black"
            >
              Twitter
            </Link>{" "}
            or by{" "}
            <Link
              href="mailto:contact@example.com"
              className="underline hover:text-[#02577a]/80 text-black"
            >
              email
            </Link>.
          </p>
        </div>

        {/* FAQ Accordion Section */}
        <div>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border-b border-[#02577a]/20"
            >
              <AccordionTrigger className="text-base sm:text-lg text-[#02577a] hover:text-[#02577a]/80">
                What is Pillow Connect exactly?
              </AccordionTrigger>
              <AccordionContent className="text-[#02577a]/90 text-sm sm:text-base">
                Pillow Connect is an AI-driven networking and collaboration
                platform that revolutionizes how recruiters and contract
                workers connect. It offers automated candidate shortlisting,
                integrated project management tools, and video-based
                testimonials for enhanced credibility.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border-b border-[#02577a]/20"
            >
              <AccordionTrigger className="text-base sm:text-lg text-[#02577a] hover:text-[#02577a]/80">
                How does the commission structure work?
              </AccordionTrigger>
              <AccordionContent className="text-[#02577a]/90 text-sm sm:text-base">
                We implement a 5% fee from both recruiters and hirees. However,
                we offer a premium subscription option that allows you to remove
                these commission fees entirely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border-b border-[#02577a]/20"
            >
              <AccordionTrigger className="text-base sm:text-lg text-[#02577a] hover:text-[#02577a]/80">
                What features are included in the platform?
              </AccordionTrigger>
              <AccordionContent className="text-[#02577a]/90 text-sm sm:text-base">
                Key features include AI-powered shortlisting and interviews,
                talent pool selection, global visibility, portfolio showcase
                platform, video testimonials, and integrated project management
                tools with milestone tracking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border-b border-[#02577a]/20"
            >
              <AccordionTrigger className="text-base sm:text-lg text-[#02577a] hover:text-[#02577a]/80">
                How does the barter system work?
              </AccordionTrigger>
              <AccordionContent className="text-[#02577a]/90 text-sm sm:text-base">
                Our barter collaboration system allows early-stage talent to
                build their portfolios by exchanging services without monetary
                compensation. This feature helps newcomers gain valuable
                experience and build their professional portfolios.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border-b border-[#02577a]/20"
            >
              <AccordionTrigger className="text-base sm:text-lg text-[#02577a] hover:text-[#02577a]/80">
                What makes Pillow Connect different from other platforms?
              </AccordionTrigger>
              <AccordionContent className="text-[#02577a]/90 text-sm sm:text-base">
                Pillow Connect stands out through its AI automation for
                recruitment, holistic platform combining recruitment and project
                management, video testimonials for authenticity, unique barter
                opportunities, and true global accessibility.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border-b border-[#02577a]/20"
            >
              <AccordionTrigger className="text-base sm:text-lg text-[#02577a] hover:text-[#02577a]/80">
                Can I customize my profile?
              </AccordionTrigger>
              <AccordionContent className="text-[#02577a]/90 text-sm sm:text-base">
                Yes, you can create and maintain your portfolio directly on
                Pillow Connect. You can also include introductory audio/video
                notes and answer personal questions to enhance your authenticity
                and personal branding.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
