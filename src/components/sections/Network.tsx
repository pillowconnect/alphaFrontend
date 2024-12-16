'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search } from 'lucide-react';
import Video from 'next-video';
import getStarted from '../../../videos/preLaunch.mp4';

export function NetworkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="py-20 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Search className="w-5 h-5 text-[#02577a]" />
              <span className="inline-block text-sm font-medium text-[#02577a]">
                DISCOVER
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#02577a] via-[#0288bc] to-[#02577a] text-transparent bg-clip-text">
                Global talent network
              </span>{' '}
              that helps companies{' '}
              <span className="bg-gradient-to-r from-[#02577a] via-[#0288bc] to-[#02577a] text-transparent bg-clip-text">
                scale globally
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black mb-8">
              Pillow-Connect&apos;s AI-powered platform has connected top talent with leading companies worldwide, 
              revolutionizing how businesses build their teams.
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="lg:w-1/2 w-full"
            style={{ y, opacity }}
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Video
                src={getStarted}
                autoPlay
                muted
                loop
                // controls
                className="absolute inset-0 w-full h-full object-cover hover:color-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02577a]/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <h3 className="text-2xl font-bold mb-2">Connecting Global Talent</h3>
                <p className="text-sm">Watch how Pillow-Connect is transforming the hiring landscape</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
