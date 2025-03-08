import React from "react";

import { Metadata } from "next";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "FAQs Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Support page for Solid Pro",
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <FAQ />
    </div>
  );
};

export default SupportPage;
