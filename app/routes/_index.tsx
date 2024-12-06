import type { MetaFunction } from "@remix-run/node";
import Hero from "~/components/Hero";
import OurImpact from "~/components/OurImpact";
import OurStory from "~/components/OurStory";
import HowWeHelp from "~/components/HowWeHelp";
import ImageGrid from "~/components/ImageGrid";

export const meta: MetaFunction = () => {
  return [
    { title: "Spay It Forward" },
    { name: "description", content: "Supporting local rescue groups and individuals in their mission to help community cats." },
  ];
};

export default function Index() {
  return (
    <main>
      <Hero />

      <OurStory />
      <OurImpact />
      <HowWeHelp />
      <ImageGrid />
    </main>
  );
}
