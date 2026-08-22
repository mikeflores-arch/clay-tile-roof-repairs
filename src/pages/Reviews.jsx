import { useEffect, useState } from 'react';
import { Star, ExternalLink, Phone, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';

/**
 * Live Google reviews, pulled from our independent Review Archive service.
 * The archive polls Google daily and never deletes a review, so this page keeps
 * every review ever left — even if Google Business Profile loses them.
 */
export const REVIEW_ARCHIVE_URL = 'https://review-archive-mf.netlify.app/api/reviews/clay-tile-roof-repairs';

function Stars({ rating, className = '' }) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} className={`w-4 h-4 ${n <= Math.round(rating) ? 'fill-amber-400 text-amber-400' : 'text-warm-300'}`} />
      ))}
    </span>
  );
}

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function Reviews() {
  const [data, setData] = useState(null);
  const [state, setState] = useState('loading'); // loading | ready | empty | error

  useEffect(() => {
    let cancelled = false;
    fetch(REVIEW_ARCHIVE_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then((d) => {
        if (cancelled) return;
        setData(d);
        setState(d.reviews?.length ? 'ready' : 'empty');
      })
      .catch(() => !cancelled && setState('error'));
    return () => { cancelled = true; };
  }, []);

  const reviews = data?.reviews ?? [];
  const avg = data?.archivedAverage ?? data?.rating;
  const writeUrl = data?.writeReviewUrl ?? 'https://www.google.com/maps/search/?api=1&query=Clay+Tile+Roof+Repairs+3717+Revere+St+Houston+TX+77098';

  return (
    <>
      <SEO
        title="Customer Reviews | Clay Tile Roof Repairs Houston"
        description="Read verified Google reviews from Houston homeowners about Clay Tile Roof Repairs. Every review is archived automatically the day it is posted."
        path="/reviews"
      />

      <section className="relative pt-32 pb-20 bg-stone-950">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-clay-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-clay-400 tracking-[0.3em] uppercase text-sm font-medium mb-4">Reviews</p>
          <h1 className="font-heading text-5xl sm:text-6xl text-warm-50 mb-6">What Houston Homeowners Say</h1>
          <p className="text-lg text-warm-400 max-w-2xl leading-relaxed">
            Real Google reviews from real customers. New reviews appear here automatically, and we keep every one on record.
          </p>
          {state === 'ready' && (
            <div className="mt-8 inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
              <span className="font-heading text-5xl text-warm-50">{avg?.toFixed ? avg.toFixed(1) : avg}</span>
              <div>
                <Stars rating={avg ?? 5} />
                <p className="text-sm text-warm-400 mt-1">
                  {data.archivedReviews} review{data.archivedReviews === 1 ? '' : 's'} on Google
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {state === 'loading' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true">
              {[0, 1, 2].map((i) => (
                <div key={i} className="bg-white rounded-2xl border border-warm-200 p-8 h-56 animate-pulse" />
              ))}
            </div>
          )}

          {state === 'error' && (
            <div className="bg-white rounded-2xl border border-warm-200 p-10 text-center">
              <p className="text-warm-600">Reviews are temporarily unavailable. You can read them directly on Google.</p>
              <a href={writeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-clay-600 font-semibold">
                Open Google reviews <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {state === 'empty' && (
            <div className="bg-white rounded-2xl border border-warm-200 p-10 text-center">
              <p className="text-warm-600">Our Google reviews are being collected. Check back soon — or be the first to leave one.</p>
            </div>
          )}

          {state === 'ready' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <ScrollReveal key={r.id} delay={Math.min(i, 5) * 0.08}>
                  <article className="bg-white rounded-2xl border border-warm-200 p-8 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      {r.photo ? (
                        <img src={r.photo} alt="" referrerPolicy="no-referrer" loading="lazy" className="w-11 h-11 rounded-full object-cover bg-warm-100" />
                      ) : (
                        <div className="w-11 h-11 rounded-full bg-clay-100 text-clay-700 flex items-center justify-center font-semibold">
                          {r.author?.[0]?.toUpperCase() ?? 'G'}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-semibold text-stone-950 truncate">
                          {r.authorUrl ? (
                            <a href={r.authorUrl} target="_blank" rel="noopener noreferrer nofollow" className="hover:text-clay-600 transition-colors">{r.author}</a>
                          ) : r.author}
                        </p>
                        <p className="text-xs text-warm-500">{formatDate(r.publishedAt)}</p>
                      </div>
                    </div>
                    <Stars rating={r.rating} className="mb-3" />
                    <p className="text-warm-700 leading-relaxed flex-1 whitespace-pre-line">
                      {r.text || <span className="text-warm-400 italic">Rating only</span>}
                    </p>
                    <p className="mt-5 pt-4 border-t border-warm-100 text-xs text-warm-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-clay-600" /> Verified Google review
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          )}

          <ScrollReveal delay={0.2}>
            <div className="mt-16 bg-stone-950 rounded-2xl p-8 lg:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl text-warm-50 mb-3">Worked with us? Leave a review.</h2>
                <p className="text-warm-400">It takes a minute and helps Houston neighbors find a tile roofer they can trust.</p>
              </div>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a href={writeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 bg-clay-600 hover:bg-clay-500 text-white rounded-lg font-semibold transition-colors">
                  Review us on Google <ExternalLink className="w-4 h-4" />
                </a>
                <a href="tel:+12819369337" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-warm-100 hover:bg-white/5 rounded-lg font-semibold transition-colors">
                  <Phone className="w-4 h-4" /> (281) 936-9337
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
