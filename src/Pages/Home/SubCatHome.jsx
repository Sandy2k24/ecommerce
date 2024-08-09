import React from 'react';

export const SubCatHome = ({ heading, subCategories }) => {
  return (
    <>
      <h1
        className="text-center font-mont font-semibold mb-4 p-2 uppercase text-sm md:text-lg lg:text-xl"
        style={{ backgroundColor: "#f3f3f3" }}
      >
        {heading}
      </h1>
      <div className="flex justify-center flex-col h-auto md:h-auto">
      <div className="flex flex-wrap gap-5 p-1 sm:gap-0 md:gap-2 lg:gap-6">
          {subCategories.map((subCategory) => (
            <div
              key={subCategory.id}
              className="flex flex-col items-center w-40 sm:w-48 p-1"
            >
              <img
                src={subCategory.imageUrl}
                alt={subCategory.title}
                className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover mb-4"
              />
              <h2 className="text-xs font-mont font-custom-700 text-center">
                {subCategory.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

