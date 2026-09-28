import { MapPin } from 'lucide-react';

export function AnnouncementBar() {
  return (
    <div className="h-[30px] bg-[#073F58] text-white flex items-center justify-center px-4 overflow-hidden">
      <div className="w-full max-w-[1400px] flex items-center justify-center sm:justify-between gap-4 text-[9px] sm:text-[10px] tracking-[0.1em] uppercase" style={{ fontFamily: 'DM Sans, sans-serif' }}>
        <span className="hidden sm:inline text-white/70">Institutional experience. Personal-scale management.</span>
        <span className="inline-flex items-center gap-1.5 text-white/90">
          <MapPin className="w-3 h-3 text-[#D2C76F]" /> Connecticut · Florida · East Coast
        </span>
      </div>
    </div>
  );
}
