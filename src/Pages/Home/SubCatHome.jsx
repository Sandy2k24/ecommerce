import React from "react";
import SITE_CONFIG from "../../controller";

export const SubCatHome = ({ heading, subCategories }) => {
  console.log(subCategories)
  return (
    <>
      {subCategories.length===0?"":<h1
        className="text-center font-mont md:text-xl font-semibold mb-4 p-2 bg-gray-400 uppercase text-sm"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        {heading}
      </h1>}
      <div className="flex justify-center flex-col h-auto md:h-auto">
        <div className="flex flex-wrap gap-4 p-1">
          {subCategories.map((subCategory, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-40 sm:w-48 p-1"
            >
              <img
                src={`${SITE_CONFIG.apiIP}/images/${subCategory.cover}`}
                alt="Subcategory"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h2 className="text-sm font-mont font-custom-700 text-center">
                {subCategory.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
