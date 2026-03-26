import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts } from '../data/blog';

export default function Blog() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-stone-950">
        <img src="/images/clay-tile-repair-sugarland.jpg" alt="Clay tile roofing blog" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/85 to-stone-950/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-clay-400 tracking-[0.3em] uppercase text-sm font-medium mb-4">Resources</p>
          <h1 className="font-heading text-5xl sm:text-6xl text-warm-50 mb-6">Roofing Insights</h1>
          <p className="text-lg text-warm-400 max-w-2xl leading-relaxed">
            Expert advice on clay tile roof care, maintenance, and repair from Houston's specialists.
          </p>
        </div>
      </section>

      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-warm-200 hover:border-clay-300 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer h-full"
                >
                  <div className="p-8 flex flex-col h-full">
                    <span className="inline-block px-3 py-1 bg-clay-50 text-clay-700 text-xs font-semibold rounded-full mb-4 w-fit">{post.category}</span>
                    <h2 className="font-heading text-xl text-stone-950 group-hover:text-clay-600 transition-colors mb-3">{post.title}</h2>
                    <p className="text-warm-600 leading-relaxed text-sm flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-warm-100">
                      <div className="flex items-center gap-4 text-xs text-warm-500">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-clay-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
