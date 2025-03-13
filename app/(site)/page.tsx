import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Ethio TalentTrove - Bridging Talent with Opportunity in Ethiopia",
  description:
    "Ethio TalentTrove connects exceptional talent with outstanding opportunities. Discover our recruitment, career counseling, and professional development services designed to empower Ethiopian businesses and professionals.",
};

export default function Home() {
  return (
    <main>
      <Hero />

      <Feature />
      <About />
      <FeaturesTab />
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
