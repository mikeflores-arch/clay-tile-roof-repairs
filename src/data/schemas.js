// Centralized Schema.org builders. Every page injects only the schema that
// matches its rendered content (baked into static HTML at prerender time).

export const SITE_URL = 'https://claytileroofrepairs.com';
export const SITE_NAME = 'Clay Tile Roof Repairs';
export const PHONE = '+1-281-936-9337'; // call tracking number
export const EMAIL = 'info@claytileroofrepairs.com';

const url = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`);

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': `${SITE_URL}/#business`,
    name: SITE_NAME,
    image: `${SITE_URL}/images/clay-tile-repair.jpg`,
    url: `${SITE_URL}/`,
    telephone: PHONE,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77019',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 29.7604, longitude: -95.3698 },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '18:00',
      },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '14:00' },
    ],
    areaServed: [
      { '@type': 'City', name: 'Houston' },
      { '@type': 'Place', name: 'River Oaks' },
      { '@type': 'Place', name: 'Memorial Villages' },
      { '@type': 'City', name: 'West University Place' },
      { '@type': 'City', name: 'Bellaire' },
      { '@type': 'Place', name: 'The Woodlands' },
      { '@type': 'City', name: 'Sugar Land' },
      { '@type': 'City', name: 'Katy' },
      { '@type': 'Place', name: 'Tanglewood' },
    ],
    priceRange: '$$',
    // TODO(Mike): add sameAs once GBP / Facebook profiles exist —
    // sameAs: ['<GBP maps link>', '<Facebook page>'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'GAF Certified Contractor',
    },
    knowsAbout: [
      'Clay tile roofing',
      'Concrete tile roofing',
      'Barrel tile',
      'Mission tile',
      'S-tile',
      'Tile roof underlayment replacement',
      'Lift-and-relay tile restoration',
      'Historic tile matching',
      'Storm damage insurance claims',
    ],
    description:
      "Houston's premier clay tile roof repair and restoration specialists. Over 15 years of experience serving River Oaks, Memorial Villages, West University, Bellaire, The Woodlands, Sugar Land, Katy, and Tanglewood.",
  };
}

export function blogIndexSchema(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog/#blog`,
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}/blog/`,
    publisher: { '@id': `${SITE_URL}/#business` },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: url(`/blog/${p.slug}`),
      datePublished: p.date,
    })),
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    publisher: { '@id': `${SITE_URL}/#business` },
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: url(item.path),
    })),
  };
}

export function serviceSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    url: url(path),
    provider: { '@id': `${SITE_URL}/#business` },
    areaServed: { '@type': 'City', name: 'Houston' },
  };
}

export function articleSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}/images/clay-tile-roof-repair.jpg`,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url(`/blog/${post.slug}`) },
    author: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
    },
  };
}
