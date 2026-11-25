import { PageHero } from "../components/pages";
import { Contact } from "../components/sections";
export const metadata = { title: "Contact", description: "Request a free sample drawing or a quote." };
export default function Page() {
  return (
    <>
      <PageHero e="Contact" t="Let us talk about your project." s="Every inquiry goes to a senior technician." crumbs={[["Contact"]]} />
      <Contact />
    </>
  );
}
