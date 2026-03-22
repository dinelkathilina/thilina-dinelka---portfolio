'use client';

import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    role: 'Freelance Short-Form Video Editor',
    company: 'Self-Employed / Fiverr',
    date: 'Jan 2023 – Present',
    location: 'Remote',
    description: [
      'Edit 10–30 short-form videos per month for clients across lifestyle, fitness, fashion, and tech niches on TikTok, Reels, and YouTube Shorts.',
      'Design and animate lower-thirds, title cards, and branded intros using Adobe After Effects and Premiere Pro.',
      'Add dynamic captions, animated subtitles, and sound effects to boost viewer retention and accessibility.',
      'Create scroll-stopping hooks and edit to trending audio using CapCut\'s auto-sync and beat detection tools.',
      'Collaborate with 20+ repeat clients and maintain a 5-star average rating through clear communication and on-time delivery.',
      'Design social media thumbnails, story templates, and post graphics using Canva for brand consistency.',
      'Deliver projects in platform-optimised formats (9:16, 1:1, 4:5) with correct bitrate and aspect ratio settings.',
      'Podcast reels editing.',
    ],
  },
  {
    role: 'Junior Video Editor',
    company: 'Digital Content Studio (Freelance Collaboration)',
    date: 'Jun 2023 – Dec 2024',
    location: 'Remote',
    description: [
      'Produced short promotional videos and product highlight reels for e-commerce and lifestyle brands.',
      'Edited raw footage into polished 15–60 second clips with seamless jump cuts, transitions, and background music.',
      'Developed reusable motion graphics templates in After Effects to speed up recurring project delivery by 40%.',
      'Managed video deliverables for multiple ongoing social media accounts, meeting weekly content schedules.',
      'Incorporated client feedback efficiently with revision turnaround under 24 hours.',
    ],
  },
];

const education = {
  degree: 'Bachelor of Computer Science (BCS)',
  school: 'University of Ruhuna, Matara, Sri Lanka',
  date: '2021 – 2025',
};

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4">
            Professional <span className="text-primary">Experience</span>.
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-balance">
            A track record of delivering high-quality video content and motion graphics for brands and creators worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <Briefcase className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-white">Work History</h3>
            </div>

            <div className="relative border-l border-white/10 pl-8 ml-4 space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-surface border-4 border-primary" />

                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div>
                      <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-sm font-bold text-gray-300 uppercase tracking-widest">{exp.date}</p>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-gray-400 list-disc list-inside">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Soft Skills */}
          <div className="space-y-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="text-primary" size={28} />
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="bg-black border border-white/10 rounded-2xl p-8">
                <h4 className="text-lg font-bold text-white mb-2">{education.degree}</h4>
                <p className="text-gray-400 mb-4">{education.school}</p>
                <p className="text-sm font-bold text-primary uppercase tracking-widest">{education.date}</p>
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Soft Skills</h3>
              <ul className="space-y-4">
                {[
                  'Creative Storytelling & Visual Thinking',
                  'Attention to Detail & Consistency',
                  'Fast Turnaround & Time Management',
                  'Clear Client Communication',
                  'Quick Learner — always up to date with platform trends',
                  'Adaptable to brand styles and feedback',
                ].map((skill, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
