import React from "react";

function FooterHeadding({headding, className}) {
  return (
    <h2 className={` ${className} capitalize font-semibold text-start text-2xl mb-2 `}>
      {headding}
    </h2>
  );
}

export default FooterHeadding;
