'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Download } from 'lucide-react';
import Image from 'next/image';

const skills = [
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'CapCut',
  'Canva',
  'Motion Graphics',
  'Colour Grading',
  'Sound Design',
  'Subtitles & Captions',
  'TikTok Editing',
  'Instagram Reels',
  'YouTube Shorts',
  'Transitions',
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              {/* Replace with actual image */}
              <Image
                src="https://picsum.photos/seed/thilina/800/1000?grayscale"
                alt="Thilina Dinelka"
                fill
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-display font-bold text-white mb-1">2+ Years</p>
                <p className="text-sm text-gray-300 font-medium uppercase tracking-wider">Experience</p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-12 -right-6 md:-right-12 bg-surface border border-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="text-primary" size={24} />
                </div>
                <div>
                  {/* <p className="text-2xl font-bold text-white">20+</p> */}
                  {/* <p className="text-xs text-gray-400 uppercase tracking-widest">Repeat Clients</p> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
              The Editor Behind the <span className="text-primary">Views</span>.
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              I am a creative and detail-oriented Short-Form Video Editor with hands-on experience producing scroll-stopping content for TikTok, Instagram Reels, and YouTube Shorts.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              With a strong eye for pacing, colour grading, motion graphics, and storytelling, I help content creators, brands, and marketing teams deliver engaging videos that drive views and audience growth.
            </p>

            {/* Skills Grid */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Core Skills & Tools</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-surface border border-white/10 text-sm font-medium text-gray-300 hover:border-primary/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Resume Download (Optional) */}
            <div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
