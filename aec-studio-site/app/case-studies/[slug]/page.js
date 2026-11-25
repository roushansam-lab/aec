import { notFound } from "next/navigation";
import { CASES, CASE_SLUGS, CASE_BODY } from "../../data";
import { Article } from "../../components/pages";
export function generateStaticParams() { return CASE_SLUGS.map((slug) => ({ slug })); }
export function generateMetadata({ params }) { const i = CASE_SLUGS.indexOf(params.slug); return i < 0 ? {} : { title: CASES[i][1], description: CASES[i][2] }; }
export default function Page({ params }) {
  const i = CASE_SLUGS.indexOf(params.slug); if (i < 0) notFound();
  const c = CASES[i];
  return <Article cat={c[0]} title={c[1]} body={[c[2], ...CASE_BODY[i]]} tags={c[3]} crumbs={[["Case studies", "/case-studies"], [c[0]]]} />;
}
