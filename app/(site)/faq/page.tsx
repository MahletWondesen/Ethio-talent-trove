import React from "react";

import { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQs - Ethio TalentTrove",
  description:
    "Find answers to frequently asked questions about Ethio TalentTrove's recruitment services, career counseling, and professional development in Ethiopia.",
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <FAQ />
    </div>
  );
};

export default SupportPage;
