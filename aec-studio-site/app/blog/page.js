import { PageHero, CtaBand, BlogIndex } from "../components/pages";
export const metadata = { title: "Insights", description: "Articles on BIM, millwork, drafting and rendering." };
export default function Page() {
  return (
    <>
      <PageHero e="Insights" t="Ideas for AEC teams." s="Practical articles from our engineers and visualization artists." crumbs={[["Insights"]]} />
      <BlogIndex />
      <CtaBand />
    </>
  );
}
