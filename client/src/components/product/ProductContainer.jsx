import React from "react";

function ProductContainer({ children, className }) {
  return (
    <div
      className={`${className} grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3`}
    >
      {children}
    </div>
  );
}

export default ProductContainer;
