import React from "react";

function ProductSectionCard({ imgSrc, headline, cta }) {
  return (
    <div>
      <div className="p-4 text-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            src={imgSrc}
            alt={headline}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{headline}</h3>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {cta}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSectionCard;
