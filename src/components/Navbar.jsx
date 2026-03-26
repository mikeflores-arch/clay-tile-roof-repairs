import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { serviceAreas } from '../data/serviceAreas';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-clay-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-clay-500 to-clay-700 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18M3 21V9l9-7 9 7v12M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-semibold text-warm-50 font-heading tracking-wide">Clay Tile Roof Repairs</span>
              <span className="block text-xs text-clay-400 tracking-widest uppercase">Houston's Roofing Specialists</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/') ? 'text-clay-400 bg-clay-900/30' : 'text-warm-300 hover:text-warm-50 hover:bg-white/5'}`}>
              Home
            </Link>
            <Link to="/services" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/services') ? 'text-clay-400 bg-clay-900/30' : 'text-warm-300 hover:text-warm-50 hover:bg-white/5'}`}>
              Services
            </Link>

            {/* Service Areas Dropdown */}
            <div className="relative" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
              <button className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname.startsWith('/service-area') ? 'text-clay-400 bg-clay-900/30' : 'text-warm-300 hover:text-warm-50 hover:bg-white/5'}`}>
                Service Areas <ChevronDown className={`w-4 h-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-stone-950/98 backdrop-blur-xl border border-clay-900/40 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/service-area/${area.slug}`}
                      className="block px-4 py-2.5 text-sm text-warm-300 hover:text-clay-400 hover:bg-clay-900/20 transition-colors"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname.startsWith('/blog') ? 'text-clay-400 bg-clay-900/30' : 'text-warm-300 hover:text-warm-50 hover:bg-white/5'}`}>
              Blog
            </Link>
            <Link to="/financing" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/financing') ? 'text-clay-400 bg-clay-900/30' : 'text-warm-300 hover:text-warm-50 hover:bg-white/5'}`}>
              Financing
            </Link>
            <Link to="/contact" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isActive('/contact') ? 'text-clay-400 bg-clay-900/30' : 'text-warm-300 hover:text-warm-50 hover:bg-white/5'}`}>
              Contact
            </Link>
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a href="tel:+17135551234" className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-clay-600 hover:bg-clay-500 text-white rounded-lg text-sm font-semibold transition-colors cursor-pointer">
              <Phone className="w-4 h-4" />
              (713) 555-1234
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-warm-300 hover:text-warm-50 cursor-pointer">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-stone-950/98 backdrop-blur-xl border-t border-clay-900/30">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-warm-200 hover:bg-clay-900/20 transition-colors">Home</Link>
            <Link to="/services" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-warm-200 hover:bg-clay-900/20 transition-colors">Services</Link>
            <div className="px-4 py-2 text-xs text-warm-500 uppercase tracking-widest">Service Areas</div>
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-area/${area.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block px-8 py-2.5 text-sm text-warm-300 hover:text-clay-400 transition-colors"
              >
                {area.name}
              </Link>
            ))}
            <Link to="/blog" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-warm-200 hover:bg-clay-900/20 transition-colors">Blog</Link>
            <Link to="/financing" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-warm-200 hover:bg-clay-900/20 transition-colors">Financing</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 rounded-lg text-warm-200 hover:bg-clay-900/20 transition-colors">Contact</Link>
            <a href="tel:+17135551234" className="block px-4 py-3 mt-2 bg-clay-600 text-white text-center rounded-lg font-semibold">
              Call (713) 555-1234
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
