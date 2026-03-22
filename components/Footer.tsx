'use client';

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-xl font-display font-bold tracking-tighter">
            THILINA<span className="text-primary">.</span>
          </a>
          <p className="text-sm text-gray-500">Short-Form Video Editor & Motion Graphics</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#work" className="text-sm text-gray-400 hover:text-white transition-colors">Work</a>
          <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
          <a href="#experience" className="text-sm text-gray-400 hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Thilina Dinelka. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
