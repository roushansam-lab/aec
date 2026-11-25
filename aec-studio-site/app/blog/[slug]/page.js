import { notFound } from "next/navigation";
import { POSTS } from "../../data";
import { Article } from "../../components/pages";
export function generateStaticParams() { return POSTS.map((x) => ({ slug: x.slug })); }
export function generateMetadata({ params }) { const x = POSTS.find((y) => y.slug === params.slug); return x ? { title: x.title, description: x.ex } : {}; }
export default function Page({ params }) {
  const x = POSTS.find((y) => y.slug === params.slug); if (!x) notFound();
  return <Article cat={x.cat} title={x.title} body={x.body} crumbs={[["Insights", "/blog"], [x.cat]]} />;
}
