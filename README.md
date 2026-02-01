# SEO Manager 🚀

A simple SEO manager for **React** and **Next.js**. Manage all your meta tags with one config.

## 1. Setup

```bash
npm install @rironib/seo-manager
npx @rironib/seo-manager # Created /@config/seo.js or .ts
```

## 2. Usage

### Next.js (App Router)

Optimized for Server Components:

```tsx
// layout.tsx
import { resolveNextMetadata } from "@rironib/seo-manager";
import { seoConfig } from "/@config/seo";

export const metadata = resolveNextMetadata(seoConfig);
```

### React or Pages Router

Wrap your app:

```jsx
// _app.js or main.jsx
import { SeoProvider } from "@rironib/seo-manager";
import { seoConfig } from "/@config/seo";

export default function Root({ children }) {
  return <SeoProvider defaultSeo={seoConfig}>{children}</SeoProvider>;
}
```

Change metadata on any page:

```jsx
import { Seo } from "@rironib/seo-manager";

const Page = () => <Seo title="My Title" description="My description..." />;
```

## 3. Props

`Seo` and `seoConfig` support these essential fields:

| Prop          | Syncs To                                                    |
| :------------ | :---------------------------------------------------------- |
| `title`       | `<title>`, `og:title`, `twitter:title`                      |
| `description` | `meta description`, `og:description`, `twitter:description` |
| `url`         | `og:url`, `twitter:url`                                     |
| `canonical`   | `rel=canonical` (Falls back to `url`)                       |
| `image`       | `og:image`, `twitter:image`                                 |
| `siteName`    | `og:site_name`                                              |
| `keywords`    | `meta keywords`                                             |
| `themeColor`  | `meta theme-color`                                          |
| `noindex`     | Set `true` to hide from search engines                      |

## License

MIT
