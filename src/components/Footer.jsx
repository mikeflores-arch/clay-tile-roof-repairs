import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { serviceAreas } from '../data/serviceAreas';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-warm-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl text-warm-50 mb-4">Clay Tile Roof Repairs</h3>
            <p className="text-sm leading-relaxed mb-6">
              Houston's premier clay tile roof repair specialists. Over 15 years of experience protecting the area's finest homes.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+17135551234" className="flex items-center gap-2 hover:text-clay-400 transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-clay-500" /> (713) 555-1234
              </a>
              <a href="mailto:info@houstonclayroofing.com" className="flex items-center gap-2 hover:text-clay-400 transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-clay-500" /> info@houstonclayroofing.com
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-clay-500" /> Houston, TX
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg text-warm-50 mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-clay-400 transition-colors">Clay Tile Repair</Link></li>
              <li><Link to="/services" className="hover:text-clay-400 transition-colors">Tile Replacement</Link></li>
              <li><Link to="/services" className="hover:text-clay-400 transition-colors">Roof Inspections</Link></li>
              <li><Link to="/services" className="hover:text-clay-400 transition-colors">Storm Damage Repair</Link></li>
              <li><Link to="/services" className="hover:text-clay-400 transition-colors">Preventive Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-clay-400 transition-colors">New Installations</Link></li>
              <li><Link to="/financing" className="hover:text-clay-400 transition-colors">Financing Options</Link></li>
              <li><Link to="/blog" className="hover:text-clay-400 transition-colors">Roofing Blog</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-heading text-lg text-warm-50 mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link to={`/service-area/${area.slug}`} className="hover:text-clay-400 transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg text-warm-50 mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Monday - Friday</span><span className="text-warm-200">7am - 6pm</span></li>
              <li className="flex justify-between"><span>Saturday</span><span className="text-warm-200">8am - 2pm</span></li>
              <li className="flex justify-between"><span>Sunday</span><span className="text-warm-200">Closed</span></li>
            </ul>
            <p className="mt-4 text-xs text-clay-500 font-medium">24/7 Emergency Service Available</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-warm-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-600">
          <p>&copy; {new Date().getFullYear()} Clay Tile Roof Repairs. All rights reserved.</p>
          <p>Licensed &amp; Insured | TRCC #12345</p>
        </div>
      </div>
    </footer>
  );
}
