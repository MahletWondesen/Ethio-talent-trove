import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Support & About - Ethio TalentTrove",
  description:
    "Discover how Ethio TalentTrove connects exceptional talent with outstanding opportunities in Ethiopia. Learn more about our mission, values, and get in touch for support.",
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <About />
    </div>
  );
};

export default SupportPage;
