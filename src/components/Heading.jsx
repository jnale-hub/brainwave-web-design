import React from "react";
import Tagline from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} mx-auto mb-12 max-w-[50rem] lg:mb-20 md:text-center`}>
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{title}</p>}
    </div>
  );
};

export default Heading;
