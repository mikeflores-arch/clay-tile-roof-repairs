import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME } from '../data/schemas';

const DEFAULT_IMAGE = `${SITE_URL}/images/clay-tile-repair.jpg`;

export default function SEO({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  schema = null,
  noindex = false,
}) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  // Netlify serves prerendered directory pages at trailing-slash URLs — canonicals must match
  const url = path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Geo */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Houston" />

      {/* Schema */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
