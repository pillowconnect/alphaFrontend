'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FloatingCards } from '@/components/sections/floatingCards';
import { FloatingCardInterview } from '@/components/sections/FloatingCardInterview';
import { ScheduledCalls } from '@/components/sections/ScheduledCall';
import { FloatingCardJobs } from '@/components/sections/FloatingCardGigs';
import { ScheduledCallsLeft } from '@/components/sections/ScheduledCallsLeft';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from "@/hooks/use-toast";

export default function Hero() {
  const { toast } = useToast();
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      toast({
        title: "Success",
        description: "You're on the list! Check your inbox for updates.",
      });
      setEmail("");
      setShowEmailInput(false);
    } catch (error) {
      console.error("Failed to join waitlist", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-24 pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
      <div className="w-full h-[800px] sm:h-[800px] md:h-[912px] p-6 md:p-10 relative rounded-[35px] border border-[#E6E6E6] mt-5 overflow-hidden flex items-center justify-center" style={{ opacity: 1, transform: 'none' }}>
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#b0d5e6] via-[#c2e1f1] to-[#d4f0fc] opacity-100"></div>


        {/* Animated Grid */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(2,87,122,0.1) 1px, transparent 1px),
              radial-gradient(circle, rgba(2,87,122,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            //animation: 'moveGrid 10s linear infinite',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm rounded-full border border-[#02577a]/20 bg-[#d4f0fc]/20 text-[#02577a] backdrop-blur-sm">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#02577a] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#02577a]"></span>
            </span>
            New! AI-Powered Global Talent Matching
          </div>

          <h1
            className="text-4xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-[#02577a] via-[#0288bc] to-[#02577a] text-transparent bg-clip-text mb-6 leading-tight"
          >
            Hire Without Limits.
            <br />
            Work Without Borders.
          </h1>

          <p className="text-lg md:text-xl text-black mb-10 max-w-2xl mx-auto">
            Transform your hiring process with AI-driven talent matching. Connect with top professionals worldwide instantly.
          </p>

          <AnimatePresence mode="wait">
            {!showEmailInput ? (
              <motion.div
                key="join-waitlist-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Button
                  className="bg-gradient-to-r from-[#0061f2] to-[#02577a] hover:from-[#02577a] hover:to-[#003366] text-white text-lg py-4 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => setShowEmailInput(true)}
                >
                  Join Waitlist
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="email-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow rounded-full py-4 px-6 text-[#02577a] border-[#02577a]/20 focus:border-[#02577a] focus:ring-[#02577a]"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-[#0061f2] to-[#02577a] hover:from-[#02577a] hover:to-[#003366] text-white text-lg py-4 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? "Joining..." : "Join Waitlist"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        <div className='hidden sm:block'>
          <FloatingCards />
          <FloatingCardJobs />
          <ScheduledCallsLeft />
          <FloatingCardInterview />
          <ScheduledCalls />
        </div>

      </div>
    </section>
  );
}

