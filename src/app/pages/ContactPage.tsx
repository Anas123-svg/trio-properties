import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

import { useState } from 'react';
export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    project_details: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    // Basic validation
    if (!form.name.trim()) {
      setError('Name is required.');
      setLoading(false);
      return;
    }
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('A valid email is required.');
      setLoading(false);
      return;
    }
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/contact-us`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          project_details: form.project_details,
        }),
      });
      if (!res.ok) throw new Error('Failed to send message.');
      setSuccess('Your message has been sent!');
      setForm({ name: '', email: '', phone: '', project_details: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1EB] overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />

      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-b border-[#E8E4DC] bg-[#F5F1EB]">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1800&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#F5F1EB]/88" />
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10 text-center">
          <p
            className="text-[11px] uppercase tracking-[0.18em] text-[#2E9CCA] mb-3"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Contact
          </p>
          <h1
            className="text-[34px] sm:text-[44px] md:text-[62px] text-[#1A1A1A] leading-none"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '1px' }}
          >
            Get In Touch
          </h1>
          <p
            className="text-[14px] sm:text-[15px] text-[#666660] max-w-[760px] mx-auto mt-3 sm:mt-4 leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Tell us about your project and our team will get back to you with guidance on the next steps.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#F5F1EB]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <aside className="lg:col-span-4 space-y-4">
            <div className="rounded-[10px] border border-[#E0DAD0] bg-white p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#2E9CCA] mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[#99938B]">Phone</p>
                  <a href="tel:02084556961" className="text-[15px] sm:text-[16px] text-[#1A1A1A]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    0208 455 6961
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] border border-[#E0DAD0] bg-white p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#2E9CCA] mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[#99938B]">Email</p>
                  <p className="text-[15px] sm:text-[16px] text-[#1A1A1A] break-all" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    office@homesolve.co.uk
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[10px] border border-[#E0DAD0] bg-white p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2E9CCA] mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-[#99938B]">Office</p>
                  <p className="text-[15px] leading-relaxed text-[#555550]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    1st Floor, Unit 7 Hawthorn Business Park, 165 Granville Rd, London NW2 2AZ
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/442084556961"
              target="_blank"
              rel="noreferrer"
              className="block rounded-[10px] border border-[#25D366]/35 bg-[#25D366] p-4 sm:p-5"
            >
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-white mt-0.5" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-white/85">WhatsApp</p>
                  <p className="text-[15px] sm:text-[16px] text-white" style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>
                    Chat With Us
                  </p>
                  <p className="text-[13px] text-white/90 mt-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                    Fast replies from our team
                  </p>
                </div>
              </div>
            </a>
          </aside>

          <div className="lg:col-span-8 rounded-[10px] border border-[#E0DAD0] bg-white p-4 sm:p-6 md:p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[12px] text-[#777] mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  className="w-full h-[44px] rounded-[6px] border border-[#DDD6CC] px-3 text-[14px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
              </div>

              <div>
                <label className="block text-[12px] text-[#777] mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={20}
                  className="w-full h-[44px] rounded-[6px] border border-[#DDD6CC] px-3 text-[14px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-[12px] text-[#777] mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full h-[44px] rounded-[6px] border border-[#DDD6CC] px-3 text-[14px]"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-[12px] text-[#777] mb-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  Project Details
                </label>
                <textarea
                  rows={6}
                  name="project_details"
                  value={form.project_details}
                  onChange={handleChange}
                  className="w-full rounded-[6px] border border-[#DDD6CC] px-3 py-2 text-[14px] resize-y"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="bg-[#2E9CCA] text-white text-[13px] px-6 py-3 rounded-[4px] disabled:opacity-60"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                {error && <p className="text-red-600 text-[13px]">{error}</p>}
                {success && <p className="text-green-600 text-[13px]">{success}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
