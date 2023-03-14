import React from "react";
import ProductSectionCard from "./ProductSectionCard";

function ProductsSection() {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center lg:flex-row  gap-10">
          <ProductSectionCard
            imgSrc="https://via.placeholder.com/500x300"
            headline="Vernon Bach J3 83K"
            cta="View Details"
          />
          <ProductSectionCard
            imgSrc="https://via.placeholder.com/500x300"
            headline="BTMARK M825HI"
            cta="View Details"
          />
          <ProductSectionCard
            imgSrc="https://via.placeholder.com/500x300"
            headline="CODEPAD T2 TIJ"
            cta="View Details"
          />
          <div className="w-full flex justify-center pb-6">
            <button type="button" className="btn btn-lg btn-warning">
              See All products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
