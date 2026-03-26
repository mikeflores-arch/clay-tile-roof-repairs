import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-stone-950">
        <img src="/images/clay-tile-repair-montrose.jpg" alt="Clay tile roof repair in progress" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/85 to-stone-950/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-clay-400 tracking-[0.3em] uppercase text-sm font-medium mb-4">Contact Us</p>
          <h1 className="font-heading text-5xl sm:text-6xl text-warm-50 mb-6">Get Your Free Estimate</h1>
          <p className="text-lg text-warm-400 max-w-2xl leading-relaxed">
            Ready to protect your clay tile roof? Fill out the form below or give us a call. We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white rounded-2xl border border-warm-200 p-8 lg:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-clay-50 flex items-center justify-center mx-auto mb-6">
                        <Send className="w-8 h-8 text-clay-600" />
                      </div>
                      <h3 className="font-heading text-2xl text-stone-950 mb-3">Thank You!</h3>
                      <p className="text-warm-600">We've received your request and will contact you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-stone-950 mb-2">First Name</label>
                          <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-lg border border-warm-200 focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20 outline-none transition-all bg-warm-50" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-stone-950 mb-2">Last Name</label>
                          <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-lg border border-warm-200 focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20 outline-none transition-all bg-warm-50" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-stone-950 mb-2">Email</label>
                          <input type="email" id="email" required className="w-full px-4 py-3 rounded-lg border border-warm-200 focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20 outline-none transition-all bg-warm-50" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-stone-950 mb-2">Phone</label>
                          <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-warm-200 focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20 outline-none transition-all bg-warm-50" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="neighborhood" className="block text-sm font-medium text-stone-950 mb-2">Neighborhood / City</label>
                        <input type="text" id="neighborhood" placeholder="e.g., River Oaks, Memorial, West U" className="w-full px-4 py-3 rounded-lg border border-warm-200 focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20 outline-none transition-all bg-warm-50" />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-stone-950 mb-2">Service Needed</label>
                        <select id="service" className="w-full px-4 py-3 rounded-lg border border-warm-200 focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20 outline-none transition-all bg-warm-50">
                          <option value="">Select a service...</option>
                          <option>Clay Tile Repair</option>
                          <option>Full Roof Replacement</option>
                          <option>Storm Damage Restoration</option>
                          <option>Roof Inspection</option>
                          <option>Preventive Maintenance</option>
                          <option>New Construction</option>
                          <option>Other / Not Sure</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-stone-950 mb-2">Message</label>
                        <textarea id="message" rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg border border-warm-200 focus:border-clay-500 focus:ring-2 focus:ring-clay-500/20 outline-none transition-all bg-warm-50 resize-none" />
                      </div>
                      <button type="submit" className="w-full sm:w-auto px-8 py-4 bg-clay-600 hover:bg-clay-500 text-white rounded-lg font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" /> Send Request
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl border border-warm-200 p-8">
                  <h3 className="font-heading text-xl text-stone-950 mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <a href="tel:+17135551234" className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-clay-50 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-clay-600" />
                      </div>
                      <div>
                        <p className="font-medium text-stone-950 group-hover:text-clay-600 transition-colors">(713) 555-1234</p>
                        <p className="text-sm text-warm-500">Call or text anytime</p>
                      </div>
                    </a>
                    <a href="mailto:info@houstonclayroofing.com" className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-clay-50 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-clay-600" />
                      </div>
                      <div>
                        <p className="font-medium text-stone-950 group-hover:text-clay-600 transition-colors">info@houstonclayroofing.com</p>
                        <p className="text-sm text-warm-500">24-hour response</p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-clay-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-clay-600" />
                      </div>
                      <div>
                        <p className="font-medium text-stone-950">Houston, TX</p>
                        <p className="text-sm text-warm-500">Serving Greater Houston</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white rounded-2xl border border-warm-200 p-8">
                  <h3 className="font-heading text-xl text-stone-950 mb-4">
                    <Clock className="w-5 h-5 inline-block text-clay-600 mr-2 -mt-1" />
                    Business Hours
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex justify-between"><span className="text-warm-600">Monday - Friday</span><span className="font-medium text-stone-950">7:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between"><span className="text-warm-600">Saturday</span><span className="font-medium text-stone-950">8:00 AM - 2:00 PM</span></li>
                    <li className="flex justify-between"><span className="text-warm-600">Sunday</span><span className="font-medium text-stone-950">Closed</span></li>
                  </ul>
                  <p className="mt-4 text-sm text-clay-600 font-medium">24/7 Emergency Service Available</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="bg-stone-950 rounded-2xl p-8 text-center">
                  <h3 className="font-heading text-xl text-warm-50 mb-3">Emergency?</h3>
                  <p className="text-warm-400 text-sm mb-4">Storm damage? Active leak? Call our emergency line now.</p>
                  <a href="tel:+17135551234" className="inline-flex items-center gap-2 px-6 py-3 bg-clay-600 hover:bg-clay-500 text-white rounded-lg font-semibold transition-colors cursor-pointer">
                    <Phone className="w-5 h-5" /> Emergency Line
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
