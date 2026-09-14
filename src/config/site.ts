import { env } from "@/env";

export const siteConfig = {
  name: "Fulcronix",
  description:
    "AI, engineering, cloud, design and growth, delivered by one practice.",
  url: env.NEXT_PUBLIC_SITE_URL,
  links: {
    github: "https://github.com",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ],
  /** Primary marketing-site navigation, shown on the home page. */
  marketingNav: [
    {
      label: "What We Do",
      items: [
        { label: "Intelligence", href: "/#capabilities" },
        { label: "Build & Transform", href: "/#capabilities" },
        { label: "Design Studio", href: "/#capabilities" },
        { label: "Growth", href: "/#capabilities" },
      ],
    },
    {
      label: "Artificial Intelligence",
      items: [
        { label: "AI Strategy", href: "/#capabilities" },
        { label: "AI Engineering", href: "/#capabilities" },
      ],
    },
    {
      label: "How We Work",
      items: [
        { label: "The Pivot Process", href: "/#process" },
        { label: "Engagement Models", href: "/#engagement-types" },
      ],
    },
    {
      label: "Resources",
      items: [
        { label: "Case Studies", href: "/#engagements" },
        { label: "Insights", href: "/#" },
      ],
    },
    { label: "Why we work with", href: "/#why-fulcronix" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
