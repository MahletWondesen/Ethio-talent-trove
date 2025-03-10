import React from "react";

import { Metadata } from "next";
import Feature from "@/components/Features";

export const metadata: Metadata = {
  title: "FAQs - Ethio TalentTrove",
  description:
    "Find answers to frequently asked questions about Ethio TalentTrove's recruitment services, career counseling, and professional development in Ethiopia.",
};

const servicePage = () => {
  return (
    <div className="pb-20 pt-40">
      <Feature />
    </div>
  );
};

export default servicePage;
