# SEO Manager 🚀

A simple SEO manager for **React** and **Next.js**. Manage all your meta tags with one config.

## 1. Setup

```bash
npm install @rironib/seo-manager
npx @rironib/seo-manager
```

## 2. Usage

### Next.js (App Router)

Use `seo()` for static metadata (Server Side) or `<Seo />` for dynamic updates.

```tsx
// layout.tsx or page.tsx
import { seo, Seo } from "@rironib/seo-manager";
import { seoConfig } from "./config/seo";

// 1. Static SEO (Server Side - Recommended)
export const metadata = seo(seoConfig);

// 2. Dynamic SEO (Inside Component)
export default function Page() {
  return (
    <>
      <Seo title="Dynamic Title" />
      <h1>Hello World</h1>
    </>
  );
}
```

### React / Pages Router

Wrap your app with `SeoProvider`:

```jsx
// _app.js or main.jsx
import { SeoProvider } from "@rironib/seo-manager";
import { seoConfig } from "./config/seo";

export default function App({ children }) {
  return <SeoProvider defaultSeo={seoConfig}>{children}</SeoProvider>;
}
```

## 3. Props

Both `seo()` and `<Seo />` support these fields:

| Prop          | Description                          |
| :------------ | :----------------------------------- |
| `title`       | Page, OG, and Twitter title          |
| `description` | Meta, OG, and Twitter description    |
| `url`         | OG and Twitter URL                   |
| `canonical`   | Canonical link (falls back to `url`) |
| `image`       | Social share image                   |
| `siteName`    | Website name                         |
| `keywords`    | Array of strings                     |
| `noindex`     | If `true`, adds `noindex, nofollow`  |

## License

MIT
