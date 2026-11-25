import { PageHero, CtaBand, ServicesIndex } from "../components/pages";
import { Workflow, Tools } from "../components/sections";
export const metadata = { title: "Services", description: "BIM, millwork, construction drawings, 3D rendering, shop drawings and CAD conversion." };
export default function Page() {
  return (
    <>
      <PageHero e="What we do" t="Six services. One coordinated team." s="Everything your project needs on paper and on screen, from schematic CAD to LOD 500 BIM." crumbs={[["Services"]]} />
      <ServicesIndex />
      <Workflow />
      <Tools />
      <CtaBand />
    </>
  );
}
