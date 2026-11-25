import { PageHero, CtaBand, About } from "../components/pages";
export const metadata = { title: "About us", description: "Who we are, our values and our global presence." };
export default function Page() {
  return (
    <>
      <PageHero e="About us" t="Built for AEC deadlines." s="A drafting and engineering partner for architects, builders and manufacturers." crumbs={[["About us"]]} />
      <About />
      <CtaBand />
    </>
  );
}
