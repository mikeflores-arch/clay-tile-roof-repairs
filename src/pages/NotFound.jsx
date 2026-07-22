import { Link } from 'react-router-dom';
import { ArrowRight, Home as HomeIcon } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
        noindex
      />
      <section className="py-32 bg-warm-50 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-clay-600 tracking-[0.2em] uppercase text-sm font-medium mb-3">404</p>
          <h1 className="font-heading text-4xl sm:text-5xl text-stone-950 mb-4">Page Not Found</h1>
          <p className="text-warm-600 mb-10">That page doesn't exist or has moved. Try one of these instead:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-clay-600 hover:bg-clay-500 text-white rounded-lg font-semibold transition-colors">
              <HomeIcon className="w-5 h-5" /> Home
            </Link>
            <Link to="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-warm-300 hover:border-clay-500 text-stone-950 rounded-lg font-semibold transition-colors">
              Our Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
