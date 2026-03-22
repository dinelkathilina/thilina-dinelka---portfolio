'use client';

import { motion } from 'motion/react';
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold tracking-tight mb-6">
              Let&apos;s Create <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Something Great.</span>
            </h2>
            <p className="text-lg text-gray-400 mb-12 max-w-md text-balance">
              Available for freelance opportunities. Reach out to discuss your next video project, motion graphics needs, or content strategy.
            </p>

            <div className="space-y-8">
              <a href="mailto:dinelkathilina3@gmail.com" className="group flex items-center gap-6 p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-white group-hover:text-primary transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-bold text-white">dinelkathilina3@gmail.com</p>
                </div>
              </a>

              <a href="tel:+94771871862" className="group flex items-center gap-6 p-6 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-white group-hover:text-primary transition-colors" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg font-bold text-white">+94 77 187 1862</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-surface border border-white/5">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-bold text-white">Sri Lanka</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Quick Links & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-surface border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-sm font-bold text-white uppercase tracking-widest">Available Immediately</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">Connect Online</h3>
              <div className="space-y-4 mb-12">
                <a
                  href="https://linkedin.com/in/thilina-dinelka-778855258"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 rounded-xl bg-black border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Linkedin className="text-gray-400 group-hover:text-white transition-colors" size={20} />
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors">LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="text-gray-500 group-hover:text-primary transition-colors" size={20} />
                </a>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Service Guarantees</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-400">
                    <span className="text-primary">✓</span> Fast Delivery
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <span className="text-primary">✓</span> Revisions Included
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <span className="text-primary">✓</span> Platform-Optimised Formats
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
