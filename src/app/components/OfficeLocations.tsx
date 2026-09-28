import { Mail, MapPin, Phone } from 'lucide-react';

const offices = [
  {
    title: 'Corporate Headquarters',
    company: 'TRIO Properties, LLC | Corporate Headquarters',
    phone: '860.430.1966',
    address: '624 Hebron Avenue Building 3 Suite 1 · Glastonbury, CT 06033',
  },
  {
    title: 'Southeast Office',
    company: 'TRIO Properties East, LLC | Southeast Office',
    phone: '561.424.6500',
    address: '2054 Vista Parkway, Suite 400 · West Palm Beach, FL 33411',
  },
];

export function OfficeLocations() {
  return (
    <section id="contact" className="bg-white px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
        {offices.map((office) => (
          <article key={office.title} className="bg-[#073F58] text-white border border-[#0E637F] p-6 sm:p-7 lg:p-8 shadow-[0_10px_28px_rgba(7,63,88,0.10)]">
            <p className="text-[9px] uppercase tracking-[0.16em] text-[#D2C76F] font-bold">{office.title}</p>
            <p className="mt-4 text-[13px] font-semibold">{office.company}</p>
            <div className="mt-5 space-y-3 text-[11px] sm:text-[12px] text-white/72">
              <p className="flex gap-2"><Phone className="w-3.5 h-3.5 text-[#D2C76F] shrink-0" /> {office.phone}</p>
              <p className="flex gap-2"><Mail className="w-3.5 h-3.5 text-[#D2C76F] shrink-0" /> info@trioproperties.com</p>
              <p className="flex gap-2 leading-[1.55]"><MapPin className="w-3.5 h-3.5 text-[#D2C76F] shrink-0 mt-[2px]" /> {office.address}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
