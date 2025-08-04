"use client";

import React from "react";
import { motion } from "framer-motion";
import CommissionHero from "@/components/CommissionHero";
import WhatWeDo from "@/components/WhatWeDo";
import WorkSamples from "@/components/WorkSamples";
import HowItWorks from "@/components/HowItWorks";
import CommissionForm from "@/components/CommissionForm";
import CommissionFooter from "@/components/CommissionFooter";

export default function CommissionsPage() {
  return (
    <div className="bg-black text-white">
      <CommissionHero />
      <WhatWeDo />
      <WorkSamples />
      <HowItWorks />
      <CommissionForm />
      <CommissionFooter />
    </div>
  );
}


