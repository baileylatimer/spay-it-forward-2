import type { MetaFunction } from "@remix-run/node";
import OurStory from "~/components/OurStory";

export const meta: MetaFunction = () => {
  return [
    { title: "Spay It Forward" },
    { name: "description", content: "Supporting local rescue groups and individuals in their mission to help community cats." },
  ];
};

export default function Index() {
  return (
    <main>
      <OurStory />
    </main>
  );
}
