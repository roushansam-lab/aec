import { SITE, SERVICES, POSTS, CASE_SLUGS } from "./data";
export default function sitemap() {
  const p = ["", "/services", "/industries", "/process", "/portfolio", "/case-studies", "/blog", "/about", "/faq", "/contact"];
  return [...p.map((x) => SITE + x), ...SERVICES.map((s) => `${SITE}/services/${s.slug}`), ...POSTS.map((x) => `${SITE}/blog/${x.slug}`), ...CASE_SLUGS.map((x) => `${SITE}/case-studies/${x}`)].map((url) => ({ url, lastModified: new Date() }));
}
