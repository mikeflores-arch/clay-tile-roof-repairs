import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, MapPin, Home, Shield } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { serviceAreas } from '../data/serviceAreas';

export default function ServiceArea() {
  const { slug } = useParams();
  const area = serviceAreas.find((a) => a.slug === slug);

  if (!area) return <Navigate to="/" replace />;

  const otherAreas = serviceAreas.filter((a) => a.slug !== slug);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://claytileroofrepairs.com/' },
      { '@type': 'ListItem', position: 2, name: 'Service Areas', item: 'https://claytileroofrepairs.com/' },
      { '@type': 'ListItem', position: 3, name: area.name, item: `https://claytileroofrepairs.com/service-area/${area.slug}` },
    ],
  };

  return (
    <>
      <SEO
        title={`Clay Tile Roof Repair ${area.name} TX | Houston's #1 Tile Roofer`}
        description={`Expert clay tile roof repair in ${area.name}, Houston. ${area.features[0]}, ${area.features[1].toLowerCase()}, and more. Free inspections. Homes from ${area.median_home}. Call (713) 555-1234.`}
        path={`/service-area/${area.slug}`}
        image={`https://claytileroofrepairs.com${area.image}`}
        schema={breadcrumbSchema}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-stone-950">
        <img src={area.image} alt={`Clay tile roof repair in ${area.name} Houston TX`} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/85 to-stone-950/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-warm-500 text-sm mb-4">
            <Link to="/" className="hover:text-warm-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-clay-400">{area.name}</span>
          </div>
          <p className="text-clay-400 tracking-[0.3em] uppercase text-sm font-medium mb-4">
            <MapPin className="w-4 h-4 inline-block mr-1 -mt-0.5" /> Service Area
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-warm-50 mb-6">{area.headline}</h1>
          <p className="text-lg text-warm-400 max-w-2xl leading-relaxed">{area.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-clay-600 hover:bg-clay-500 text-white rounded-lg font-semibold transition-colors cursor-pointer">
              Get a Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+17135551234" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-warm-700 hover:border-warm-500 text-warm-200 rounded-lg font-semibold transition-colors cursor-pointer">
              <Phone className="w-5 h-5" /> (713) 555-1234
            </a>
          </div>
        </div>
      </section>

      {/* Area Details */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="font-heading text-3xl text-stone-950 mb-6">
                  Clay Tile Roofing in {area.name}
                </h2>
                <p className="text-warm-600 leading-relaxed text-lg mb-8">{area.areaInfo}</p>

                <h3 className="font-heading text-2xl text-stone-950 mb-4">Our {area.name} Services Include</h3>
                <ul className="space-y-4 mb-10">
                  {area.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-clay-500 flex-shrink-0 mt-0.5" />
                      <span className="text-warm-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-warm-200 p-8">
                  <h3 className="font-heading text-2xl text-stone-950 mb-4">Why {area.name} Homeowners Choose Us</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { icon: Shield, title: 'Licensed & Insured', desc: 'Full coverage for your protection' },
                      { icon: Home, title: 'Local Expertise', desc: `Deep knowledge of ${area.name} homes` },
                      { icon: MapPin, title: 'Fast Response', desc: 'Quick service to your neighborhood' },
                      { icon: CheckCircle, title: 'Guaranteed Work', desc: 'Warranty on all repairs' },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-clay-50 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-clay-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-stone-950">{item.title}</p>
                          <p className="text-sm text-warm-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl border border-warm-200 p-8">
                  <h3 className="font-heading text-xl text-stone-950 mb-4">Area Details</h3>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-warm-500">Median Home Value</dt>
                      <dd className="font-semibold text-stone-950 text-lg">{area.median_home}</dd>
                    </div>
                    <div>
                      <dt className="text-warm-500">ZIP Codes Served</dt>
                      <dd className="font-semibold text-stone-950">{area.zip}</dd>
                    </div>
                  </dl>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-stone-950 rounded-2xl p-8">
                  <h3 className="font-heading text-xl text-warm-50 mb-3">Free Roof Inspection</h3>
                  <p className="text-warm-400 text-sm mb-6">
                    Get a no-obligation assessment of your clay tile roof from a certified specialist.
                  </p>
                  <Link to="/contact" className="block w-full px-6 py-3 bg-clay-600 hover:bg-clay-500 text-white text-center rounded-lg font-semibold transition-colors cursor-pointer">
                    Request Inspection
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-white rounded-2xl border border-warm-200 p-8">
                  <h3 className="font-heading text-lg text-stone-950 mb-4">Other Service Areas</h3>
                  <ul className="space-y-2">
                    {otherAreas.map((a) => (
                      <li key={a.slug}>
                        <Link to={`/service-area/${a.slug}`} className="flex items-center gap-2 text-sm text-warm-600 hover:text-clay-600 transition-colors cursor-pointer py-1">
                          <ArrowRight className="w-4 h-4" /> {a.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-clay-700 via-clay-600 to-clay-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mb-6">
              Protect Your {area.name} Home
            </h2>
            <p className="text-clay-100 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a free clay tile roof inspection for your {area.name} property. Expert assessment, honest recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-clay-700 hover:bg-warm-100 rounded-lg font-semibold transition-colors cursor-pointer">
                Get Free Estimate <ArrowRight className="w-5 h-5" />
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
