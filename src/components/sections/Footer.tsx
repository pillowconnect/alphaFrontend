'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { motion , AnimatePresence } from "framer-motion"
import { Twitter, Linkedin, Instagram, Github , } from 'lucide-react'
import Image from 'next/image'
import pillowLogo from '@/assets/pillow.svg';
import { useToast } from "@/hooks/use-toast";
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import discord from '@/assets/discord-outline-svgrepo-com.svg'
export function Footer() {
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
        <footer className="relative mt-20 text-[#02577a]">
            {/* Gradient Background */}
            {/* <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#d4f0fc] via-[#eaf9ff] to-[#ffffff] opacity-90"></div> */}

            {/* Main content */}
            <div className="relative w-full px-4 sm:px-6 md:px-8 pt-20 pb-12 bg-[#02577a]/5 rounded-t-[50px] overflow-hidden z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        className="ext-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#02577a] via-[#0288bc] to-[#02577a] text-transparent bg-clip-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to Transform Your Hiring Process?
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl text-black mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Join thousands of companies already using PillowConnect to find their perfect match.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
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
                                    className="flex-grow rounded-full py-4 px-6 text-black border-[#02577a]/20 focus:border-[#02577a] focus:ring-[#02577a]"
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
                    </motion.div>
                </div>

                {/* Navigation and Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div>
                        {/* Logo and Pillow-Connect */}
                        <div className="flex items-center space-x-1 sm:space-x-1.5">
                            <Image
                                src={pillowLogo}
                                alt="PillowConnect"
                                width={50}
                                height={50}
                                className="sm:w-12 sm:h-12 w-10 h-10"
                            />
                            <span className="text-lg sm:text-xl font-bold text-[#02577a]">
                                Pillow-Connect
                            </span>
                        </div>
                        {/* Text Content */}
                        <p className="text-sm sm:text-base text-black mt-1 sm:mt-1.5">
                            Empowering global talent through AI-driven connections.
                        </p>
                    </div>



                    <div>
                        <h4 className="text-lg font-semibold mb-4">Platform</h4>
                        <ul className="space-y-3">
                            <li><Link href="/features" className="text-black hover:text-[#02577a] transition-colors">Features</Link></li>
                            <li><Link href="/integrations" className="text-black hover:text-[#02577a] transition-colors">Integrations</Link></li>
                            <li><Link href="/enterprise" className="text-black hover:text-[#02577a] transition-colors">Enterprise</Link></li>
                            <li><Link href="/security" className="text-black hover:text-[#02577a] transition-colors">Security</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-black hover:text-[#02577a] transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="text-black hover:text-[#02577a] transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="text-black hover:text-[#02577a] transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="text-black hover:text-[#02577a] transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li><Link href="/privacy" className="text-black hover:text-[#02577a] transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-black hover:text-[#02577a] transition-colors">Terms of Service</Link></li>
                            <li><Link href="/cookies" className="text-black hover:text-[#02577a] transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#02577a]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#02577a]/60 text-sm">
                        © {new Date().getFullYear()} PillowConnect, Inc. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6">
                        <Link href="https://x.com/PillowConnect" className="text-[#02577a]/60 hover:text-[#02577a] transition-colors">
                            <Twitter className="w-5 h-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href=" https://www.linkedin.com/company/pillow-connect/?viewAsMember=true" className="text-[#02577a]/60 hover:text-[#02577a] transition-colors">
                            <Linkedin className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="https://www.instagram.com/pillow.connect/" className="text-[#02577a]/60 hover:text-[#02577a] transition-colors">
                            <Instagram className="w-5 h-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="https://github.com" className="text-[#02577a]/60 hover:text-[#02577a] transition-colors">
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                        <Link href="https://discord.gg/Q9cYFvM55f" className="text-[#02577a]/60 hover:text-[#02577a] transition-colors">
                            <Image src={discord} alt="Discord" width={20} height={30} />
                            <span className="sr-only">Discord</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
