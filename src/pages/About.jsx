import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Shield, Award, Users, Wrench, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { breadcrumbSchema, localBusinessSchema } from '../data/schemas';

const values = [
  {
    icon: Wrench,
    title: 'Tile-Only Specialization',
    text: 'We don\'t do composition shingles, metal, or flat commercial roofs. Clay and concrete tile is the entire practice — the profiles, the underlayments, the flashing details, and the mistakes other trades make walking on it.',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    text: 'Full liability and workers\' compensation coverage on every project, with documentation available before work begins. On estates and HOA communities, we provide certificates without being asked.',
  },
  {
    icon: Award,
    title: 'GAF Certified',
    text: 'Our certification reflects manufacturer-trained installation standards — underlayment systems, ventilation, and flashing details installed to spec so material warranties actually hold.',
  },
  {
    icon: Users,
    title: 'Respectful Crews',
    text: 'Tight hours, protected landscaping, clean sites, and magnet sweeps at the end of every day. We work in neighborhoods where how a crew behaves matters as much as what it builds.',
  },
];

const process = [
  { step: '01', title: 'Inspection', text: 'A full assessment of the tile field, underlayment condition, flashings, and hips and ridges — with photos you keep.' },
  { step: '02', title: 'Written Scope', text: 'A detailed, itemized estimate with honest recommendations, including when a repair beats a replacement.' },
  { step: '03', title: 'Craftsman Work', text: 'Tile-trained crews, salvage-first repairs, and materials matched to your roof — not whatever\'s on the truck.' },
  { step: '04', title: 'Documentation', text: 'Completion photos, warranty paperwork, and a condition record valuable at insurance renewal or resale.' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us | Houston's Clay Tile Roof Specialists"
        description="Clay Tile Roof Repairs is Houston's tile-only roofing specialist — 15+ years preserving and repairing clay and concrete tile roofs in River Oaks, Memorial, West U, and beyond. Licensed, insured, GAF certified."
        path="/about"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
          localBusinessSchema(),
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-stone-950">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-clay-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-clay-400 tracking-[0.3em] uppercase text-sm font-medium mb-4">About Us</p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-50 mb-6 max-w-3xl">
            The Only Thing We Do Is Tile Roofs
          </h1>
          <p className="text-lg text-warm-400 max-w-2xl leading-relaxed">
            For over 15 years, Clay Tile Roof Repairs has done one thing in one place: clay and concrete
            tile roofing in greater Houston. That focus is the whole company.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-stone-950 mb-6">Why a Tile-Only Roofer Exists</h2>
            <div className="space-y-5 text-warm-600 leading-relaxed text-lg">
              <p>
                Most Houston roofing companies are composition-shingle companies that will also take a tile job.
                The results are visible across the city's finest neighborhoods: cracked tiles from crews who
                don't know where a tile carries weight, bright mismatched patches on ninety-year-old rooflines,
                mortar-only ridges that let go in the first serious storm, and "repairs" that treated a failed
                underlayment problem by swapping tiles that were never the issue.
              </p>
              <p>
                We built this company to be the opposite: a specialist practice for the roofs that deserve one.
                Clay tile is a different trade — it has its own profiles (barrel, mission, S-tile, flat shingle
                tile), its own failure modes, its own manufacturers and salvage markets, and its own repair
                philosophy where preserving original material comes first. Our crews are trained on tile and
                only tile, from walking a fragile field without breakage to sourcing a discontinued 1930s
                profile for a River Oaks estate.
              </p>
              <p>
                That specialization is why architects, estate managers, and HOA boards across{' '}
                <Link to="/service-area/river-oaks" className="text-clay-600 hover:text-clay-500 font-medium">River Oaks</Link>,{' '}
                <Link to="/service-area/memorial-villages" className="text-clay-600 hover:text-clay-500 font-medium">Memorial Villages</Link>,{' '}
                <Link to="/service-area/west-university-place" className="text-clay-600 hover:text-clay-500 font-medium">West University</Link>, and{' '}
                <Link to="/service-area/tanglewood" className="text-clay-600 hover:text-clay-500 font-medium">Tanglewood</Link>{' '}
                call us for the roofs other contractors are afraid to touch — and why homeowners in{' '}
                <Link to="/service-area/sugar-land" className="text-clay-600 hover:text-clay-500 font-medium">Sugar Land</Link>,{' '}
                <Link to="/service-area/katy" className="text-clay-600 hover:text-clay-500 font-medium">Katy</Link>, and{' '}
                <Link to="/service-area/the-woodlands" className="text-clay-600 hover:text-clay-500 font-medium">The Woodlands</Link>{' '}
                trust us with tile systems their builders installed but never really understood.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white border-y border-warm-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-stone-950 mb-12 text-center">What We Stand Behind</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.05}>
                <div className="flex items-start gap-4 bg-warm-50 rounded-2xl border border-warm-200 p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-clay-50 flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-6 h-6 text-clay-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-stone-950 mb-2">{v.title}</h3>
                    <p className="text-warm-600 leading-relaxed">{v.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-stone-950 mb-12 text-center">How Every Project Runs</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-warm-200 p-8 h-full">
                  <p className="font-heading text-4xl text-clay-200 mb-4">{p.step}</p>
                  <h3 className="font-heading text-xl text-stone-950 mb-2">{p.title}</h3>
                  <p className="text-warm-600 text-sm leading-relaxed">{p.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-warm-600">
              {['Licensed & Insured', 'GAF Certified', 'Free Inspections', 'Financing Available'].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle className="w-4 h-4 text-clay-500" /> {badge}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-clay-700 via-clay-600 to-clay-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6">
              Put a Specialist on Your Roof
            </h2>
            <p className="text-clay-100 text-lg mb-10 max-w-2xl mx-auto">
              Start with a free inspection from Houston's tile-only roofing company — and see our{' '}
              <Link to="/services" className="underline decoration-clay-300 hover:text-white">full range of services</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-clay-700 hover:bg-warm-100 rounded-lg font-semibold transition-colors cursor-pointer">
                Get Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:+12819369337" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 hover:border-white text-white rounded-lg font-semibold transition-colors cursor-pointer">
                <Phone className="w-5 h-5" /> (281) 936-9337
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
