import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';

const services = [
  {
    title: 'Clay Tile Repair',
    desc: 'Cracked, broken, or displaced tiles compromise your roof\'s integrity and your home\'s value. Our repair process ensures a perfect match with your existing tiles — both in color and profile.',
    details: ['Individual tile replacement', 'Crack sealing and waterproofing', 'Ridge cap repair', 'Mortar joint restoration', 'Color matching for seamless blending'],
  },
  {
    title: 'Full Roof Replacement',
    desc: 'When repair is no longer cost-effective, we provide complete clay tile roof replacement using premium materials. Every replacement includes modern underlayment and ventilation upgrades.',
    details: ['Complete tear-off and disposal', 'Deck inspection and repair', 'Premium synthetic underlayment', 'New tile installation with warranty', 'Custom flashing and trim work'],
  },
  {
    title: 'Storm Damage Restoration',
    desc: 'Houston storms can devastate clay tile roofs. We provide rapid emergency response, work directly with your insurance company, and restore your roof to pre-storm condition.',
    details: ['4-hour emergency tarping', 'Full damage documentation', 'Insurance claim assistance', 'Temporary waterproofing', 'Complete storm restoration'],
  },
  {
    title: 'Roof Inspections',
    desc: 'Regular inspections catch small problems before they become expensive repairs. Our certified inspectors use drone technology and hands-on evaluation for thorough assessments.',
    details: ['Visual and drone inspection', 'Moisture detection scanning', 'Detailed written report with photos', 'Repair priority recommendations', 'Maintenance schedule creation'],
  },
  {
    title: 'Preventive Maintenance',
    desc: 'A well-maintained clay tile roof can last 75-100 years. Our maintenance programs protect your investment and prevent the most common causes of premature failure.',
    details: ['Annual inspection and cleaning', 'Debris removal and gutter clearing', 'Sealant and mortar touch-ups', 'Flashing and vent boot checks', 'Written condition reports'],
  },
  {
    title: 'New Construction Installation',
    desc: 'Building a new luxury home? We work with Houston\'s top builders and architects to install clay tile roofing systems that combine beauty, durability, and performance.',
    details: ['Architectural consultation', 'Tile selection and sampling', 'Precision installation', 'Manufacturer warranty registration', 'Builder coordination'],
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Clay Tile Roofing Services Houston | Repair, Replacement & Inspection"
        description="Full-service clay tile roofing in Houston. Tile repair, replacement, storm damage restoration, inspections & maintenance. Licensed, insured, 15+ years experience."
        path="/services"
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-stone-950">
        <img src="/images/clay-tile-repair-houston.jpg" alt="Clay tile roofing services Houston" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/85 to-stone-950/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-clay-400 tracking-[0.3em] uppercase text-sm font-medium mb-4">Our Services</p>
          <h1 className="font-heading text-5xl sm:text-6xl text-warm-50 mb-6">
            Comprehensive Clay Tile<br />Roofing Services
          </h1>
          <p className="text-lg text-warm-400 max-w-2xl leading-relaxed">
            From minor repairs to complete replacements, we provide the full spectrum of clay tile roofing services for Houston's finest homes.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, i) => (
              <ScrollReveal key={service.title}>
                <div className={`flex flex-col lg:flex-row gap-8 p-8 lg:p-12 rounded-2xl border border-warm-200 bg-white ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1">
                    <span className="text-clay-300 font-heading text-6xl font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="font-heading text-3xl text-stone-950 mt-2 mb-4">{service.title}</h2>
                    <p className="text-warm-600 leading-relaxed mb-6">{service.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-clay-600 hover:text-clay-500 font-semibold transition-colors cursor-pointer">
                      Request a Quote <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className="flex-1 lg:max-w-sm">
                    <div className="bg-warm-50 rounded-xl p-6">
                      <h4 className="font-semibold text-stone-950 mb-4">What's Included</h4>
                      <ul className="space-y-3">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3 text-warm-700">
                            <CheckCircle className="w-5 h-5 text-clay-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-clay-700 via-clay-600 to-clay-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6">Not Sure What You Need?</h2>
            <p className="text-clay-100 text-lg mb-10 max-w-2xl mx-auto">
              Start with a free inspection. We'll assess your roof's condition and recommend only what's necessary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-clay-700 hover:bg-warm-100 rounded-lg font-semibold transition-colors cursor-pointer">
                Get Free Inspection <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+17135551234" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-white text-white rounded-lg font-semibold transition-colors cursor-pointer">
                <Phone className="w-5 h-5" /> (713) 555-1234
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
