import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, Phone, CheckCircle, ArrowRight, Star, ChevronDown, Search, FileText, Wrench, BadgeCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { serviceAreas } from '../data/serviceAreas';
import { faqs } from '../data/faq';

const services = [
  { title: 'Clay Tile Repair', desc: 'Expert repair of cracked, broken, or displaced clay tiles. We match existing tiles perfectly for seamless results.', icon: '01' },
  { title: 'Full Roof Replacement', desc: 'Complete clay tile roof replacement with premium materials and manufacturer-backed warranties.', icon: '02' },
  { title: 'Storm Damage Restoration', desc: 'Rapid response after Houston storms. Insurance claim assistance and emergency tarping available.', icon: '03' },
  { title: 'Preventive Maintenance', desc: 'Annual inspection and maintenance programs that extend your roof\'s life by decades.', icon: '04' },
];

const stats = [
  { number: '15+', label: 'Years Experience' },
  { number: '2,500+', label: 'Roofs Repaired' },
  { number: '100%', label: 'Licensed & Insured' },
  { number: '4.9', label: 'Star Rating' },
];

const testimonials = [
  { name: 'Margaret S.', area: 'River Oaks', text: 'They restored our 1940s clay tile roof to its original beauty. Absolute professionals from start to finish.' },
  { name: 'David & Karen L.', area: 'Memorial Villages', text: 'After the last hurricane, they were the only crew we trusted with our tile roof. Outstanding work and fair pricing.' },
  { name: 'Robert P.', area: 'Tanglewood', text: 'Their attention to detail is remarkable. They matched 70-year-old tiles perfectly. You can\'t tell where the repair was done.' },
];

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-warm-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-warm-50 transition-colors">
        <span className="font-semibold text-stone-950 pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-clay-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 text-warm-600 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-stone-950 overflow-hidden">
        <img src="/images/clay-tile-repair.jpg" alt="Clay tile roof repair in Houston" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/80 to-stone-950/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-clay-400 tracking-[0.3em] uppercase text-sm font-medium mb-6">Houston's Trusted Roofing Specialists</p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-warm-50 leading-[1.1] mb-6">
              Expert Clay Tile<br />
              <span className="text-clay-400">Roof Repair</span>
            </h1>
            <p className="text-lg text-warm-400 max-w-xl mb-10 leading-relaxed">
              Protecting Houston's finest homes for over 15 years. Specialized in clay tile repair, restoration, and replacement for luxury residences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-clay-600 hover:bg-clay-500 text-white rounded-lg font-semibold transition-colors cursor-pointer">
                Get a Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+17135551234" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-warm-700 hover:border-warm-500 text-warm-200 rounded-lg font-semibold transition-colors cursor-pointer">
                <Phone className="w-5 h-5" /> (713) 555-1234
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-clay-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-3xl lg:text-4xl font-heading font-bold text-white">{stat.number}</p>
                <p className="text-clay-100 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-clay-600 tracking-[0.2em] uppercase text-sm font-medium mb-3">Why Choose Us</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-stone-950 mb-4">Houston's Clay Tile Experts</h2>
              <p className="text-warm-600 max-w-2xl mx-auto text-lg">Not all roofers understand clay tile. It requires specialized knowledge, tools, and decades of experience to do it right.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Specialized Expertise', desc: 'We exclusively work with clay tile roofing. This focus means deeper knowledge, better results, and fewer mistakes.' },
              { icon: Award, title: 'Premium Materials', desc: 'We source tiles from the world\'s best manufacturers and maintain an extensive inventory of rare and discontinued tiles.' },
              { icon: Clock, title: 'Rapid Response', desc: 'Houston weather doesn\'t wait. Neither do we. Emergency tarping within 4 hours, full repairs scheduled within 48.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 border border-warm-200 hover:border-clay-300 hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <div className="w-12 h-12 rounded-xl bg-clay-50 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-clay-600" />
                  </div>
                  <h3 className="font-heading text-xl text-stone-950 mb-3">{item.title}</h3>
                  <p className="text-warm-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-warm-100 border-y border-warm-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 opacity-70">
            {[
              'Licensed & Insured',
              'BBB A+ Rated',
              'GAF Certified',
              'Texas TRCC Licensed',
              '5-Star Google Rating',
              'Angi Certified',
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-warm-600">
                <BadgeCheck className="w-5 h-5 text-clay-600" />
                <span className="text-sm font-semibold tracking-wide">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-clay-600 tracking-[0.2em] uppercase text-sm font-medium mb-3">How It Works</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-stone-950 mb-4">Simple 4-Step Process</h2>
              <p className="text-warm-600 max-w-2xl mx-auto text-lg">From first call to finished roof, we make the process easy and transparent.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Phone, step: '01', title: 'Free Consultation', desc: 'Call us or fill out our form. We\'ll discuss your situation and schedule an inspection at your convenience.' },
              { icon: Search, step: '02', title: 'Roof Inspection', desc: 'Our certified inspector examines your roof, documents all issues, and provides a detailed assessment with photos.' },
              { icon: FileText, step: '03', title: 'Detailed Estimate', desc: 'You receive a transparent, itemized estimate. No hidden fees, no surprises. We also assist with insurance claims.' },
              { icon: Wrench, step: '04', title: 'Expert Repair', desc: 'Our specialized crew completes the work on schedule, cleans up thoroughly, and walks you through the finished project.' },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 0.15}>
                <div className="text-center relative">
                  {i < 3 && <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-clay-200" />}
                  <div className="w-20 h-20 rounded-2xl bg-clay-50 flex items-center justify-center mx-auto mb-5 relative">
                    <item.icon className="w-8 h-8 text-clay-600" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-clay-600 text-white text-xs font-bold rounded-full flex items-center justify-center">{item.step}</span>
                  </div>
                  <h3 className="font-heading text-lg text-stone-950 mb-2">{item.title}</h3>
                  <p className="text-warm-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-clay-400 tracking-[0.2em] uppercase text-sm font-medium mb-3">Our Services</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-warm-50 mb-4">What We Do</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="group flex gap-6 p-8 rounded-2xl border border-warm-800/30 hover:border-clay-700/50 hover:bg-clay-900/10 transition-all duration-300 cursor-pointer">
                  <span className="text-4xl font-heading font-bold text-clay-700/40 group-hover:text-clay-500/60 transition-colors">{service.icon}</span>
                  <div>
                    <h3 className="font-heading text-xl text-warm-100 mb-2">{service.title}</h3>
                    <p className="text-warm-500 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-clay-400 hover:text-clay-300 font-semibold transition-colors cursor-pointer">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-clay-600 tracking-[0.2em] uppercase text-sm font-medium mb-3">Testimonials</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-stone-950 mb-4">What Our Clients Say</h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 border border-warm-200 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-clay-500 fill-clay-500" />
                    ))}
                  </div>
                  <p className="text-warm-700 leading-relaxed italic flex-1">"{t.text}"</p>
                  <div className="mt-6 pt-4 border-t border-warm-100">
                    <p className="font-semibold text-stone-950">{t.name}</p>
                    <p className="text-sm text-warm-500">{t.area}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-clay-600 tracking-[0.2em] uppercase text-sm font-medium mb-3">Our Work</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-stone-950 mb-4">Recent Projects</h2>
              <p className="text-warm-600 max-w-2xl mx-auto text-lg">Real repairs on real Houston homes. Every project handled with precision and care.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { src: '/images/clay-tile-roof-repair.jpg', alt: 'Clay tile ridge repair in Houston', label: 'Ridge Cap Repair' },
              { src: '/images/clay-tile-repair-houston.jpg', alt: 'Clay tile roof repair Houston home', label: 'Tile Replacement' },
              { src: '/images/clay-tile-repair-sugarland.jpg', alt: 'Completed clay tile roof Sugar Land', label: 'Full Restoration' },
              { src: '/images/clay-tile-roof-repairs.jpg', alt: 'Clay tile roof repair Montrose area', label: 'Urban Roofing' },
              { src: '/images/clay-tile-repair-montrose.jpg', alt: 'Underlayment and tile repair in progress', label: 'Underlayment Repair' },
              { src: '/images/clay-tile-roof-repair-services.jpg', alt: 'Ridge cap detail work on clay tile roof', label: 'Detail Work' },
            ].map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 0.08}>
                <div className="group relative rounded-xl overflow-hidden aspect-[4/3] cursor-pointer">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-4 left-4 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-clay-600 tracking-[0.2em] uppercase text-sm font-medium mb-3">Service Areas</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-stone-950 mb-4">Serving Houston's Finest Neighborhoods</h2>
              <p className="text-warm-600 max-w-2xl mx-auto text-lg">We specialize in communities where clay tile roofing is the standard, not the exception.</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, i) => (
              <ScrollReveal key={area.slug} delay={i * 0.08}>
                <Link
                  to={`/service-area/${area.slug}`}
                  className="group block bg-white rounded-xl border border-warm-200 hover:border-clay-400 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={area.image} alt={`Clay tile roofing in ${area.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-stone-950 group-hover:text-clay-600 transition-colors">{area.name}</h3>
                    <p className="text-sm text-warm-500 mt-1">Homes from {area.median_home}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-clay-600 mt-3 font-medium group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-clay-600 tracking-[0.2em] uppercase text-sm font-medium mb-3">FAQ</p>
              <h2 className="font-heading text-4xl sm:text-5xl text-stone-950 mb-4">Common Questions</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-3">
            {faqs.slice(0, 6).map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-clay-700 via-clay-600 to-clay-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6">Ready to Protect Your Investment?</h2>
            <p className="text-clay-100 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a free inspection and get an honest assessment of your clay tile roof. No pressure, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-clay-700 hover:bg-warm-100 rounded-lg font-semibold transition-colors cursor-pointer">
                Schedule Free Inspection <ArrowRight className="w-5 h-5" />
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
