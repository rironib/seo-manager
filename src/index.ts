import { SeoProps } from "./Seo";

export const resolveNextMetadata = (config: SeoProps) => {
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    themeColor: config.themeColor,
    alternates: {
      canonical: config.canonical || config.url,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url: config.url,
      siteName: config.siteName,
      images: config.image ? [{ url: config.image }] : undefined,
      type: config.type || "website",
    },
    twitter: {
      card: config.twitterCard || "summary_large_image",
      title: config.title,
      description: config.description,
      images: config.image ? [config.image] : undefined,
    },
    robots: config.noindex ? "noindex, nofollow" : undefined,
  };
};

export * from "./Seo";
export * from "./SeoProvider";
