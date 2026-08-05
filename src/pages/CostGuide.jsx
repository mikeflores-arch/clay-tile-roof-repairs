import { Link } from 'react-router-dom';
import { ArrowRight, Phone, DollarSign, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { breadcrumbSchema, faqSchema, articleSchema } from '../data/schemas';

const costRows = [
  ['Individual tile replacement (1–10 tiles)', '$350 – $800', 'Cracked or slipped tiles, minor storm damage'],
  ['Localized repair with underlayment patch', '$800 – $2,500', 'Leak at one valley, flashing, or penetration'],
  ['Hip & ridge rebuild (mechanical fastening)', '$1,500 – $4,500', 'Wind-loosened ridges, failing mortar bedding'],
  ['Major section repair', '$2,500 – $8,000', 'Storm damage, decking repair, larger underlayment work'],
  ['Lift-and-relay (salvage tile, new underlayment)', '$12,000 – $30,000', 'Sound tile over failed underlayment — resets roof 40+ yrs'],
  ['Full clay tile replacement', '$25,000 – $75,000+', 'End-of-life tile, major redesign, or new tile selection'],
];

const factors = [
  { title: 'Roof size & pitch', text: 'Tile work is priced per square (100 sq ft). Steeper pitches and multi-level rooflines add staging, safety, and time.' },
  { title: 'Tile profile & availability', text: 'Common S-tile is the least expensive to match. Discontinued vintage profiles and imported barrel tile can require salvage-yard sourcing or custom production.' },
  { title: 'Underlayment condition', text: 'The hidden variable. If the membrane beneath your tile has failed, tile-only repairs are temporary — the honest fix is a relay of the affected sections.' },
  { title: 'Accessibility', text: 'Tight lots, landscaping to protect, and limited staging area (common in West U and Bellaire) affect labor hours.' },
  { title: 'Repair vs. salvage math', text: 'Reusing your existing tile dramatically lowers cost. We salvage first and buy new only for the shortfall.' },
];

const costFaqs = [
  {
    question: 'How much does clay tile roof repair cost in Houston?',
    answer: 'Minor clay tile repairs in Houston typically run $350 to $1,500. Repairs involving underlayment, flashing, or hip and ridge work generally range from $1,500 to $8,000 depending on scope. A lift-and-relay — salvaging your tile and replacing the underlayment beneath it — typically costs $12,000 to $30,000, and full tile replacement runs $25,000 to $75,000+ for most Houston luxury homes. Every project starts with a free inspection and a written, itemized estimate.',
  },
  {
    question: 'Why is a lift-and-relay so much cheaper than a new tile roof?',
    answer: 'Because the tile itself is usually 40–60% of a new tile roof\'s cost. When your existing tile is sound and only the underlayment has failed — the most common situation on 25–35 year old Houston tile roofs — salvaging and relaying your original tile buys another 40+ years for roughly a third to half the price of full replacement.',
  },
  {
    question: 'Does insurance ever cover these costs?',
    answer: 'Storm-related damage — hail impacts, wind-displaced tiles, fallen limbs — is generally covered by Texas homeowner policies, and we document damage in adjuster-grade detail to support your claim. Age-related underlayment wear is maintenance and not covered, which is why catching storm damage promptly and documenting it properly matters.',
  },
  {
    question: 'Are cheap tile repair quotes a red flag?',
    answer: 'Often, yes. The classic shortcut is swapping visible broken tiles while ignoring the failed underlayment or flashing that actually caused the leak — the symptom is fixed, the problem returns next storm. A trustworthy tile estimate tells you what is wrong underneath the tile, not just on top of it.',
  },
];

const costGuidePost = {
  title: 'Clay Tile Roof Repair Cost in Houston (2026 Guide)',
  excerpt: 'Real 2026 price ranges for clay tile roof repair, lift-and-relay, and replacement in Houston — and the factors that move the number.',
  date: '2026-08-05',
  slug: null, // page lives at /clay-tile-roof-cost, not under /blog
};

export default function CostGuide() {
  return (
    <>
      <SEO
        title="Clay Tile Roof Repair Cost in Houston (2026 Guide)"
        description="What clay tile roof repair costs in Houston in 2026: $350–$1,500 for minor repairs, $12K–$30K for lift-and-relay, $25K+ for replacement. Real price table, cost factors, and honest advice."
        path="/clay-tile-roof-cost"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Cost Guide', path: '/clay-tile-roof-cost' },
          ]),
          {
            ...articleSchema(costGuidePost),
            mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://claytileroofrepairs.com/clay-tile-roof-cost/' },
          },
          faqSchema(costFaqs),
        ]}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-stone-950">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-clay-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-clay-400 tracking-[0.3em] uppercase text-sm font-medium mb-4">
            <DollarSign className="w-4 h-4 inline-block mr-1 -mt-0.5" /> 2026 Cost Guide
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-50 mb-6 max-w-3xl">
            What Clay Tile Roof Repair Costs in Houston
          </h1>
          <p className="text-lg text-warm-400 max-w-2xl leading-relaxed">
            Honest 2026 price ranges from a tile-only specialist — what moves the number,
            and when the cheap quote is the expensive one.
          </p>
        </div>
      </section>

      {/* Price table */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-stone-950 mb-3">2026 Houston Price Ranges</h2>
            <p className="text-warm-600 leading-relaxed mb-8 max-w-3xl">
              Every roof is different — these are the real ranges we see across{' '}
              <Link to="/service-area/river-oaks" className="text-clay-600 hover:text-clay-500 font-medium">River Oaks</Link>,{' '}
              <Link to="/service-area/sugar-land" className="text-clay-600 hover:text-clay-500 font-medium">Sugar Land</Link>,{' '}
              <Link to="/service-area/katy" className="text-clay-600 hover:text-clay-500 font-medium">Katy</Link>, and the rest of
              greater Houston. Your written estimate itemizes exactly where your project lands and why.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-warm-200 bg-white">
              <table className="w-full text-left">
                <thead className="bg-stone-950">
                  <tr>
                    <th className="px-6 py-4 font-heading text-warm-50">Project Type</th>
                    <th className="px-6 py-4 font-heading text-warm-50 whitespace-nowrap">Typical Range</th>
                    <th className="px-6 py-4 font-heading text-warm-50">When It Applies</th>
                  </tr>
                </thead>
                <tbody>
                  {costRows.map(([type, range, when], i) => (
                    <tr key={type} className={i % 2 ? 'bg-warm-50/60' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-stone-950">{type}</td>
                      <td className="px-6 py-4 text-clay-700 font-semibold whitespace-nowrap">{range}</td>
                      <td className="px-6 py-4 text-warm-600 text-sm">{when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-warm-500 text-sm mt-4">
              Ranges reflect typical single-family projects in greater Houston as of 2026. Historic estate work,
              custom tile sourcing, and structural repairs are quoted individually.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Factors */}
      <section className="py-24 bg-white border-y border-warm-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-stone-950 mb-12">What Moves the Price</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {factors.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.04}>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-clay-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-stone-950 mb-1">{f.title}</h3>
                    <p className="text-warm-600 leading-relaxed">{f.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-14 bg-warm-50 rounded-2xl border border-warm-200 p-8">
              <h3 className="font-heading text-2xl text-stone-950 mb-3">The Repair-or-Replace Decision</h3>
              <p className="text-warm-600 leading-relaxed mb-4">
                The most expensive mistake in tile roofing is paying repeatedly for tile-level repairs when the
                underlayment beneath has failed — or replacing an entire roof whose tile had decades of life left.
                The right answer comes from what's <em>under</em> the tile: if the membrane is sound, targeted repair
                is money well spent; if it's at end-of-life, a lift-and-relay saves you $15,000–$40,000 versus
                full replacement by reusing your existing tile.
              </p>
              <p className="text-warm-600 leading-relaxed">
                That assessment is exactly what our{' '}
                <Link to="/services" className="text-clay-600 hover:text-clay-500 font-medium">free inspection</Link>{' '}
                answers — and if cash flow is the constraint,{' '}
                <Link to="/financing" className="text-clay-600 hover:text-clay-500 font-medium">financing options</Link>{' '}
                from 12 to 120 months keep urgent repairs from waiting on the budget.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl text-stone-950 mb-10">Cost Questions, Answered</h2>
            <div className="space-y-8">
              {costFaqs.map((faq) => (
                <div key={faq.question} className="border-b border-warm-200 pb-8 last:border-0">
                  <h3 className="font-heading text-xl text-stone-950 mb-3">{faq.question}</h3>
                  <p className="text-warm-600 leading-relaxed">{faq.answer}</p>
                </div>
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
              Get Your Exact Number
            </h2>
            <p className="text-clay-100 text-lg mb-10 max-w-2xl mx-auto">
              A free inspection and a written, itemized estimate — no pressure, no games, and an honest
              answer if a repair is all you need.
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
