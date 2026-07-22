import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blog';
import { breadcrumbSchema, articleSchema } from '../data/schemas';

// Group raw markdown-ish lines into blocks so tables render as real tables
function parseBlocks(content) {
  const lines = content.split('\n').map((l) => l.trim()).filter(Boolean);
  const blocks = [];
  for (const line of lines) {
    const last = blocks[blocks.length - 1];
    if (line.startsWith('| ')) {
      if (last && last.type === 'table') last.rows.push(line);
      else blocks.push({ type: 'table', rows: [line] });
    } else {
      blocks.push({ type: 'line', text: line });
    }
  }
  return blocks;
}

function TableBlock({ rows }) {
  const cells = (row) => row.split('|').map((c) => c.trim()).filter(Boolean);
  const header = cells(rows[0]);
  const body = rows.slice(1).filter((r) => !/^\|[\s|:-]+\|?$/.test(r.replace(/ /g, ''))).map(cells);
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full text-left border border-warm-200 rounded-lg overflow-hidden">
        <thead className="bg-warm-100">
          <tr>
            {header.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold text-stone-950 text-sm">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, i) => (
            <tr key={i} className="border-t border-warm-100">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-warm-700 text-sm">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <SEO
        title={`${post.title} | Clay Tile Roof Repairs`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
          articleSchema(post),
        ]}
      />
      <section className="relative pt-32 pb-16 bg-stone-950">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-clay-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-warm-400 hover:text-clay-400 transition-colors text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-clay-900/40 text-clay-400 text-xs font-semibold rounded-full mb-4">{post.category}</span>
          <h1 className="font-heading text-4xl sm:text-5xl text-warm-50 mb-6 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-warm-400">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-warm-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <article className="bg-white rounded-2xl border border-warm-200 p-8 lg:p-12 prose-custom">
              {parseBlocks(post.content).map((block, i) => {
                if (block.type === 'table') return <TableBlock key={i} rows={block.rows} />;
                const trimmed = block.text;
                if (trimmed.startsWith('## '))
                  return <h2 key={i} className="font-heading text-2xl text-stone-950 mt-10 mb-4">{trimmed.slice(3)}</h2>;
                if (trimmed.startsWith('### '))
                  return <h3 key={i} className="font-heading text-xl text-stone-950 mt-8 mb-3">{trimmed.slice(4)}</h3>;
                if (trimmed.startsWith('- [ ] '))
                  return <div key={i} className="flex items-start gap-2 ml-4 mb-1"><span className="w-4 h-4 border border-warm-300 rounded mt-1 flex-shrink-0" /><span className="text-warm-700">{trimmed.slice(6)}</span></div>;
                if (trimmed.startsWith('- **'))
                  return <p key={i} className="text-warm-700 leading-relaxed ml-4 mb-1">{trimmed.slice(2).split('**').map((part, j) => j % 2 === 1 ? <strong key={j} className="text-stone-950">{part}</strong> : part)}</p>;
                if (trimmed.startsWith('- '))
                  return <p key={i} className="text-warm-700 leading-relaxed ml-4 mb-1">&#8226; {trimmed.slice(2)}</p>;
                if (trimmed.match(/^\d+\. /))
                  return <p key={i} className="text-warm-700 leading-relaxed ml-4 mb-2">{trimmed}</p>;
                return <p key={i} className="text-warm-700 leading-relaxed mb-4">{trimmed.split('**').map((part, j) => j % 2 === 1 ? <strong key={j} className="text-stone-950">{part}</strong> : part)}</p>;
              })}
            </article>
          </ScrollReveal>

          <div className="mt-12 text-center">
            <p className="text-warm-600 mb-4">Need help with your clay tile roof?</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-clay-600 hover:bg-clay-500 text-white rounded-lg font-semibold transition-colors cursor-pointer">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
