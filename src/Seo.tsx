"use client";
import React, { useEffect } from "react";
import { SeoProps } from "./server";

const updateOrCreateMeta = (
  name: string,
  content: string,
  isProperty = false,
) => {
  if (typeof document === "undefined") return;
  const attr = isProperty ? "property" : "name";
  let el = document.head.querySelector(
    `meta[${attr}="${name}"]`,
  ) as HTMLMetaElement;
  if (el) {
    el.content = content;
  } else {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    el.content = content;
    document.head.appendChild(el);
  }
};

export const Seo: React.FC<SeoProps> = ({
  title,
  description,
  url,
  image,
  type = "website",
  twitterCard = "summary_large_image",
  keywords,
  themeColor,
  noindex,
  siteName,
  canonical,
}) => {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // Primary Meta Tags
    if (title) {
      document.title = title;
      updateOrCreateMeta("title", title);
      updateOrCreateMeta("og:title", title, true);
      updateOrCreateMeta("twitter:title", title);
    }

    if (description) {
      updateOrCreateMeta("description", description);
      updateOrCreateMeta("og:description", description, true);
      updateOrCreateMeta("twitter:description", description);
    }

    // Open Graph / Facebook
    updateOrCreateMeta("og:type", type, true);
    if (url) {
      updateOrCreateMeta("og:url", url, true);
      updateOrCreateMeta("twitter:url", url);
    }

    // Canonical
    const canonicalUrl = canonical || url;
    if (canonicalUrl) {
      let link = document.head.querySelector(
        'link[rel="canonical"]',
      ) as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonicalUrl;
    }

    if (image) {
      updateOrCreateMeta("og:image", image, true);
      updateOrCreateMeta("twitter:image", image);
    }

    if (siteName) {
      updateOrCreateMeta("og:site_name", siteName, true);
    }

    // X / Twitter
    updateOrCreateMeta("twitter:card", twitterCard);

    // Extra Tags
    if (keywords) updateOrCreateMeta("keywords", keywords.join(", "));
    if (themeColor) updateOrCreateMeta("theme-color", themeColor);
    if (noindex) updateOrCreateMeta("robots", "noindex, nofollow");
  }, [
    title,
    description,
    url,
    image,
    type,
    twitterCard,
    keywords,
    themeColor,
    noindex,
    siteName,
    canonical,
  ]);

  return null;
};
