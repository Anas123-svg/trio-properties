import { AnnouncementBar } from '../components/AnnouncementBar';
import { Navbar } from '../components/Navbar';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';

const teamMembers = [
{
  name: 'Jacques Mellinger Bsc',
  role: 'Founding Partner - Head of Finance',
  image: 'https://res.cloudinary.com/dbywwhzot/image/upload/v1775715006/item_532_35_Jacques__c-max_w-259_h-367_q-90_aemj5b.jpg',
  paragraphs: [
    'Jacques Mellinger – Co-Founder of Homesolve Ltd, established in 2010, has played a pivotal role in the company’s growth and continued success. A meticulous professional with a deep passion for architecture, he brings extensive expertise and strategic insight to the business.',
    
    'He oversees Homesolve’s budgeting, planning, and finance divisions while ensuring rigorous on-site Health and Safety compliance. His early career in finance equipped him with strong financial management and strategic marketing skills, essential to the company’s continued expansion.',
    
    'Before establishing Homesolve Ltd, Jacques managed various construction projects in the rental and high-end domestic sectors, honing his ability to execute complex developments with precision. His academic background in project management at University College London (UCL) further strengthened his analytical approach to technical detail. As a multilingual professional, he brings added value when working with a diverse client base.',
    
    'Beyond his professional duties, Jacques is dedicated to fostering a family-oriented business culture. Homesolve Ltd actively supports mentoring initiatives that provide training and guidance to individuals, equipping them with the skills and confidence to secure employment or start their own businesses. He also volunteers for local charities, reflecting his strong commitment to community development.',
    
    'Outside of work, Jacques enjoys a rich personal life. Happily married and a proud father of seven, he finds inspiration through his love of studying and travel, reflecting his deep appreciation for history and exploration.'
  ],
},
{
  name: 'Barry Korman',
  role: 'Founding Partner - Head of Operations',
  image: 'https://res.cloudinary.com/dbywwhzot/image/upload/v1775715002/item_532_35_the-team-2__c-max_w-259_h-367_q-90_vedbqu.png',
  paragraphs: [
    'Barry Korman, Co-Founder of Homesolve Ltd, established the company alongside Jacques Mellinger in 2010, playing a key role in shaping its vision and strategic direction. He oversees all aspects of planning, execution, and operational control, ensuring the highest standards of quality, efficiency, and performance across every project.',
    
    'His leadership extends to the monitoring and evaluation of tradespeople, fostering a culture of excellence that underpins Homesolve’s reputation. With decades of experience in the construction industry, Barry brings deep practical knowledge and strong operational expertise to the business.',
    
    'Beginning his career as an apprentice to a site manager, Barry progressed through key roles including acquisition manager and project manager in high-end residential development. His extensive experience in project oversight, procurement, and quality control, combined with full CITB qualifications in site management and health and safety, ensures best-in-class delivery and site coordination.',
    
    'Barry’s ability to communicate effectively with diverse teams and clients enhances Homesolve’s adaptability and reach. Alongside Jacques Mellinger, he is committed to mentoring initiatives that empower underprivileged individuals through training, guidance, and charitable engagement.',
    
    'Outside of his professional life, Barry enjoys a fulfilling personal life. Happily married and a proud father of five.'
  ],
}

];

export function TeamPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EB] overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />

      <section className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-14 border-b border-[#E8E4DC] bg-[#F5F1EB] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#F5F1EB]/88" />
        </div>

        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <p
            className="text-[11px] uppercase tracking-[0.18em] text-[#2E9CCA] mb-3"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            The Team
          </p>
          <h1
            className="text-[34px] sm:text-[42px] md:text-[58px] text-[#1A1A1A] leading-none"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '1px' }}
          >
            Our Senior Team
          </h1>
          <p
            className="text-[14px] sm:text-[15px] text-[#555550] max-w-[850px] mx-auto mt-3 sm:mt-4"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Expert project management, delivering professionalism, reliability, and results from conception to completion.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#F5F1EB]">
        <div className="max-w-[1400px] mx-auto space-y-6">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 md:gap-8 rounded-[10px] border border-[#E0DAD0] bg-white p-5 md:p-7"
            >
              <div className="relative overflow-hidden rounded-[8px] border border-[#E8E4DC]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] md:h-full min-h-[260px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>

              <div>
                <h2
                  className="text-[24px] sm:text-[28px] text-[#1A1A1A] leading-none mb-2"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.5px' }}
                >
                  {member.name}
                </h2>
                <p
                  className="text-[12px] uppercase tracking-[0.12em] text-[#2E9CCA] mb-4"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {member.role}
                </p>

                <div className="space-y-3">
                  {member.paragraphs.map((paragraph, pIndex) => (
                    <p
                      key={`${member.name}-${pIndex}`}
                      className="text-[14px] sm:text-[15px] leading-relaxed text-[#555550]"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
