import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle, CreditCard, Calendar, Shield } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Financing() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-stone-950">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-clay-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-clay-400 tracking-[0.3em] uppercase text-sm font-medium mb-4">Financing</p>
          <h1 className="font-heading text-5xl sm:text-6xl text-warm-50 mb-6">Flexible Payment Options</h1>
          <p className="text-lg text-warm-400 max-w-2xl leading-relaxed">
            Quality clay tile roofing is an investment. We offer financing options to make it easier to protect your home without compromise.
          </p>
        </div>
      </section>

      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: CreditCard, title: '0% Interest Options', desc: 'Qualified homeowners can access 0% interest financing for 12-18 months on roof repairs and replacements.' },
              { icon: Calendar, title: 'Flexible Terms', desc: 'Payment plans from 12 to 120 months. Monthly payments that fit your budget without sacrificing quality.' },
              { icon: Shield, title: 'Quick Approval', desc: 'Simple application process with decisions in minutes. No impact to your credit score for pre-qualification.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="bg-white rounded-2xl p-8 border border-warm-200 text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-clay-50 flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-clay-600" />
                  </div>
                  <h3 className="font-heading text-xl text-stone-950 mb-3">{item.title}</h3>
                  <p className="text-warm-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-warm-200 p-8 lg:p-12">
              <h2 className="font-heading text-3xl text-stone-950 mb-6">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: '01', title: 'Get Your Estimate', desc: 'We provide a detailed, no-obligation estimate for your project.' },
                  { step: '02', title: 'Apply Online', desc: 'Quick application through our financing partner. Decisions in minutes.' },
                  { step: '03', title: 'Choose Your Plan', desc: 'Select the payment terms that work best for your budget.' },
                  { step: '04', title: 'We Get to Work', desc: 'Your roof repair or replacement begins with no money down.' },
                ].map((item) => (
                  <div key={item.step}>
                    <span className="text-3xl font-heading font-bold text-clay-200">{item.step}</span>
                    <h4 className="font-semibold text-stone-950 mt-2 mb-2">{item.title}</h4>
                    <p className="text-sm text-warm-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 bg-stone-950 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="font-heading text-3xl text-warm-50 mb-4">Ready to Discuss Financing?</h2>
              <p className="text-warm-400 max-w-xl mx-auto mb-8">
                Call us or request an estimate. We'll walk you through all available payment options during your free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-clay-600 hover:bg-clay-500 text-white rounded-lg font-semibold transition-colors cursor-pointer">
                  Get Free Estimate <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:+17135551234" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-warm-700 hover:border-warm-500 text-warm-200 rounded-lg font-semibold transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" /> (713) 555-1234
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
