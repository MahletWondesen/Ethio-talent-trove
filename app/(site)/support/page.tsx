import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support & Contact - Ethio TalentTrove",
  description:
    "Get in touch with Ethio TalentTrove for expert recruitment support, career counseling, and talent management services tailored for Ethiopian businesses.",
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
