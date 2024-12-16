'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Users, Pencil, Palette, Video, Briefcase, Monitor, Rocket, BookOpen, LineChart, Layers, Shield, Package, PenTool, GraduationCap, BarChart } from 'lucide-react';
import user1 from "@/assets/user1.jpg";
import user2 from "@/assets/user2.jpg";
import user3 from "@/assets/user3.jpg";
import user4 from "@/assets/user4.jpg";
import user5 from "@/assets/user5.jpg";
import framerLogo from "@/assets/Framer.svg";
import buildersLogo from "@/assets/BuildShipExpert.svg";
import splineLogo from "@/assets/Spline.svg";
import kittlLogo from "@/assets/Kittile.svg";
import riveLogo from "@/assets/Rive.svg";
import relumeLogo from "@/assets/Relume.svg";
import webstudioLogo from "@/assets/Webstudio.svg";

const niches = [
  { title: "FRAMER EXPERTS", text: "Interactive Designs", image: framerLogo, position: "top-[5%] left-[25%]" },
  { title: "BUILDERSHIP EXPERTS", text: "Project Management", image: buildersLogo, position: "top-[15%] right-[30%]" },
  { title: "SPLINE EXPERTS", text: "3D Modelling", image: splineLogo, position: "top-[40%] left-[10%]" },
  { title: "KITTL EXPERTS", text: "Custom Graphics", image: kittlLogo, position: "top-[30%] right-[30%]" },
  { title: "RIVE EXPERTS", text: "Animated Icons", image: riveLogo, position: "bottom-[25%] left-[25%]" },
  { title: "RELUME EXPERTS", text: "Webflow Libraries", image: relumeLogo, position: "bottom-[20%] right-[30%]" },
  { title: "WEBSTUDIO EXPERTS", text: "Website Creation", image: webstudioLogo, position: "bottom-[12%] left-[15%]" },
  { title: "FULL STACK DEVELOPER", text: "Web Development", icon: Code, position: "top-[10%] right-[5%]" },
  { title: "SEO SPECIALIST", text: "Search Optimization", icon: LineChart, position: "top-[30%] left-[15%]" },
  { title: "CONTENT WRITER", text: "Creative Writing", icon: Pencil, position: "top-[45%] right-[20%]" },
  { title: "GRAPHIC DESIGNER", text: "Visual Design", icon: Palette, position: "bottom-[5%] left-[25%]" },
  { title: "3D/MODELER/ANIMATOR", text: "3D Creation", icon: Layers, position: "bottom-[15%] right-[15%]" },
  { title: "SOCIAL MEDIA MANAGER", text: "Content Management", icon: Users, position: "top-[20%] left-[20%]" },
  { title: "SHORT FILM CREATOR", text: "Video Editing", icon: Video, position: "bottom-[35%] left-[20%]" },
  { title: "EDUCATION CREATOR", text: "Learning Content", icon: BookOpen, position: "bottom-[10%] right-[5%]" },
  { title: "BRAND STRATEGIST", text: "Brand Growth", icon: Rocket, position: "top-[5%] left-[10%]" },
  { title: "CUSTOMER SUCCESS", text: "Client Support", icon: Briefcase, position: "bottom-[20%] left-[40%]" },
  { title: "DATA ANALYST", text: "Insights & Analysis", icon: BarChart, position: "top-[25%] right-[20%]" },
  { title: "MVP DEVELOPER", text: "Product Launches", icon: Package, position: "top-[45%] right-[40%]" },
  { title: "GROWTH HACKER", text: "Rapid Growth", icon: Rocket, position: "bottom-[5%] left-[10%]" },
  { title: "PRODUCT MANAGER", text: "Team Leadership", icon: Shield, position: "bottom-[40%] right-[20%]" },
  { title: "CREATIVE DIRECTOR", text: "Creative Strategy", icon: PenTool, position: "top-[45%] left-[30%]" },
  { title: "LEAD GENERATION EXPERT", text: "Business Outreach", icon: Monitor, position: "bottom-[10%] right-[40%]" },
  { title: "BUSINESS LEGAL ADVISOR", text: "Legal Consulting", icon: GraduationCap, position: "top-[40%] right-[5%]" },
];

const images = [
  {
    src: user1,
    alt: 'Talent matching session',
    className: 'absolute top-[15%] left-[5%] w-20 sm:w-28 md:w-36 lg:w-40 h-20 sm:h-28 md:h-36 lg:h-40 rounded-2xl',
  },
  {
    src: user2,
    alt: 'AI assessment',
    className: 'absolute top-[15%] right-[5%] w-20 sm:w-28 md:w-36 lg:w-40 h-24 sm:h-32 md:h-40 lg:h-44 rounded-2xl',
  },
  {
    src: user3,
    alt: 'Remote collaboration',
    className: 'absolute bottom-[20%] left-[8%] w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 rounded-2xl',
  },
  {
    src: user4,
    alt: 'Team meeting',
    className: 'absolute bottom-[20%] right-[8%] w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 rounded-2xl',
  },
  {
    src: user5,
    alt: 'Data analysis',
    className: 'absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-36 lg:w-44 h-20 sm:h-28 md:h-36 lg:h-44 rounded-2xl',
  },
];

export function TalentLabSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-24"
    >
      <div className="w-full h-[800px] md:h-[912px] p-4 relative rounded-[25px] sm:rounded-[30px] lg:rounded-[35px] border border-[#E6E6E6] mt-5 overflow-hidden flex items-center justify-center">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#b0d5e6] via-[#c2e1f1] to-[#d4f0fc] opacity-100"></div>

        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(2,87,122,0.1) 1px, transparent 1px),
              radial-gradient(circle, rgba(2,87,122,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            // animation: 'moveGrid 10s linear infinite',
          }}
        ></div>


        <div className="absolute z-10 text-center max-w-3xl mx-auto">
          <motion.div
            className="mb-6 sm:mb-8 md:mb-24  "
            style={{ y, opacity }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Browse Talent by{' '}
              <span className="bg-gradient-to-r from-[#02577a] via-[#0288bc] to-[#02577a] text-transparent bg-clip-text">
                Category.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Niche Rectangles */}
        <div className='hidden sm:block'>
          {niches.map((niche, index) => (
            <motion.div
              key={index}
              className={`absolute ${niche.position} bg-white flex items-center space-x-4 px-4 py-2 rounded-lg shadow-lg text-sm font-semibold text-[#02577a]`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {niche.image ? (
                <Image src={niche.image} alt={niche.title} width={24} height={24} className="object-contain" />
              ) : niche.icon ? (
                <niche.icon className="w-6 h-6 text-[#02577a]" />
              ) : null}
              <div>
                <span>{niche.title}</span>
                <span className="block text-xs text-[#02577a]/80">{niche.text}</span>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Image Grid */}
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <motion.div key={index} className={`${image.className} overflow-hidden`}>
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
