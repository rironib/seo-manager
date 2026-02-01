export interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  twitterCard?: string;
  keywords?: string[];
  themeColor?: string;
  noindex?: boolean;
  siteName?: string;
  canonical?: string;
}

export const seo = (c: SeoProps) => {
  const common = { title: c.title, description: c.description };
  return {
    ...common,
    keywords: c.keywords,
    themeColor: c.themeColor,
    alternates: { canonical: c.canonical || c.url },
    openGraph: {
      ...common,
      url: c.url,
      siteName: c.siteName,
      type: c.type || "website",
      images: c.image ? [{ url: c.image }] : undefined,
    },
    twitter: {
      ...common,
      card: c.twitterCard || "summary_large_image",
      images: c.image ? [c.image] : undefined,
    },
    robots: c.noindex ? "noindex, nofollow" : undefined,
  };
};
