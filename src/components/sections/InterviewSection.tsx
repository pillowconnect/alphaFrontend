'use client'

import { Button } from "@/components/ui/button"
import { motion , AnimatePresence } from "framer-motion"
import pillowLogo from "@/assets/pillow.svg"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useToast } from "@/hooks/use-toast";
import { Input } from '@/components/ui/input';
// Motion Variants for Individual Chat Messages
const messageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
}

export function InterviewSection() {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
    const messages = [
        "Let's start with introductions of ourselves",
        "Does that sound good to you?",
        "Great:) I'd love to know about your previous projects.",
        "How do you figure out if you stuck in a problem.",
        "That's great! Anything you would like to ask?",
        "Let's discuss some technical aspects.",
        "What's your preferred work environment?",
        "Great, your experience matches with our goals.",
        "We'll be in touch soon.",
        "Thank you! See you soon.",
    ]

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
        }, 3000) // Change message every 3 seconds

        return () => clearInterval(interval)
    }, [messages.length])

    return (
        <section className="py-8 md:py-24 px-4 md:px-8 w-full md:w-3/4 mx-auto overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-xl"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6">
                        Apply and work from{' '}
                        <span className="bg-gradient-to-r from-[#02577a] to-[#0288bc] text-transparent bg-clip-text">
                            anywhere
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black mb-6 md:mb-8">
                        We believe Freedom is the Future of Employment and that what we&apos;re building is the future of talent.
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
                                    className="bg-gradient-to-r from-[#0061f2] to-[#02577a] hover:from-[#02577a] hover:to-[#003366] text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                                    onClick={() => setShowEmailInput(true)}
                                >
                                    Try AI Interview - (Join Waitlist)
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
                                    className="flex-grow rounded-full py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base text-black border-[#02577a]/20 focus:border-[#02577a] focus:ring-[#02577a]"
                                />
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-gradient-to-r from-[#0061f2] to-[#02577a] hover:from-[#02577a] hover:to-[#003366] text-white text-sm sm:text-base md:text-lg py-3 sm:py-4 px-4 sm:px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                                >
                                    {isLoading ? "Joining..." : "Join Waitlist"}
                                </Button>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full max-w-sm sm:max-w-md mx-auto mt-8 md:mt-0"
                >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#d4f0fc] via-[#eaf9ff] to-[#ffffff]">
                        {/* Chat Header */}
                        <div className="absolute top-4 left-4 text-sm font-medium text-[#02577a]">
                            PillowConnect AI
                        </div>

                        {/* Logo with Wavy Animation */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="flex justify-center mb-4 mt-12"
                        >
                            <Image src={pillowLogo} alt="PillowConnect" width={60} height={60} />
                        </motion.div>

                        {/* Chat Messages with Sequential Animation */}
                        <div className="absolute inset-x-0 bottom-8 flex flex-col items-center justify-end h-1/2">
                            <motion.div
                                key={currentMessageIndex}
                                variants={messageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-lg p-2 sm:p-3 max-w-[80%] text-center shadow-md text-xs sm:text-sm md:text-base"
                            >
                                {messages[currentMessageIndex]}
                            </motion.div>
                        </div>

                        {/* Decorative Dots */}
                        <div className="absolute left-4 top-20 space-y-2">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="h-2 bg-gray-200 rounded-full"
                                    style={{
                                        width: `${Math.random() * 60 + 40}%`,
                                        opacity: 1 - i * 0.15,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Background Gradient */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-gradient-to-t from-[#02577a]/10 to-transparent pointer-events-none" /> */}
        </section>
    )
}

