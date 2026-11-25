import { notFound } from "next/navigation";
import { SERVICES } from "../../data";
import { ServiceDetail } from "../../components/pages";
export function generateStaticParams() { return SERVICES.map((x) => ({ slug: x.slug })); }
export function generateMetadata({ params }) { const x = SERVICES.find((y) => y.slug === params.slug); return x ? { title: x.name, description: x.lead } : {}; }
export default function Page({ params }) {
  const x = SERVICES.find((y) => y.slug === params.slug); if (!x) notFound();
  return <ServiceDetail s={x} />;
}
