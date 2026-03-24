"use client";

import { motion } from "motion/react";
import { PlayCircle } from "lucide-react";

const projects = [
  {
    id: "1_Jv3snysyQ",
    title: "New YouTube Short",
    category: "YouTube Shorts",
  },
  {
    id: "JcKf6Lzsb9I",
    title: "Fitness Motivation Reel",
    category: "Instagram Reels",
  },
  {
    id: "Eu4GTNpJTVU",
    title: "Tech Review Short",
    category: "YouTube Shorts",
  },
  {
    id: "XYdZs8Es9lA",
    title: "Lifestyle Vlog Edit",
    category: "TikTok",
  },
];

export function Portfolio() {
  return (
    <section
      id="work"
      className="py-24 md:py-32 bg-surface border-t border-white/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4"
            >
              Selected <span className="text-primary">Works</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400 text-balance"
            >
              A collection of high-impact short-form videos crafted to engage
              audiences and drive growth across social platforms.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative flex flex-col gap-4"
            >
              {/* Video Container */}
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl shadow-black/50">
                <iframe
                  src={`https://www.youtube.com/embed/${project.id}?autoplay=0&loop=1&playlist=${project.id}&controls=1&rel=0&modestbranding=1`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Meta */}
              <div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">
                  {project.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            *This is a self-created sample using publicly available content to
            showcase my editing skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
