import { PageHero, CtaBand } from "../components/pages";
import { Process, Compare, Workflow } from "../components/sections";
export const metadata = { title: "Process", description: "Our delivery process, QA and engagement models." };
export default function Page() {
  return (
    <>
      <PageHero e="How we work" t="A process built to protect your deadlines." s="Clear scope, a pilot drawing, three-step QA and on-time delivery." crumbs={[["Process"]]} />
      <Process />
      <Compare />
      <Workflow />
      <CtaBand />
    </>
  );
}
