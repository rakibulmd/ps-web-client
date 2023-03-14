import React from "react";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import PsBenefits from "./PsBenefits";
import PsInfo from "./PsInfo";

function Home() {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <PsInfo />
      <PsBenefits />
    </div>
  );
}

export default Home;
