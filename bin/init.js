#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const isTypeScript = fs.existsSync(path.join(process.cwd(), "tsconfig.json"));
const extension = isTypeScript ? "ts" : "js";
const configDir = path.join(process.cwd(), "@config");
const configFile = path.join(configDir, `seo.${extension}`);

const defaultConfig = `${isTypeScript ? 'import { SeoProps } from "@rironib/seo-manager";\n\nexport const seoConfig: SeoProps = {' : "export const seoConfig = {"}
  title: "SEO Manager | Smart Metadata",
  description: "A smart SEO manager for React and Next.js.",
  url: "https://your-site.com",
  canonical: "https://your-site.com",
  image: "https://your-site.com/og-cover.jpg",
  siteName: "SEO Manager",
  keywords: ["react", "seo", "metadata"],
  themeColor: "#6366f1",
  noindex: false,
};
`;

if (!fs.existsSync(configDir)) {
  fs.mkdirSync(configDir, { recursive: true });
}

if (fs.existsSync(configFile)) {
  console.log(
    `✅ Configuration file already exists at /@config/seo.${extension}`,
  );
} else {
  fs.writeFileSync(configFile, defaultConfig);
  console.log(
    `🚀 Created SEO Manager configuration file at /@config/seo.${extension}`,
  );
  console.log(
    `You can now import seoConfig from "/@config/seo" in your project.`,
  );
}
