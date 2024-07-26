import React from "react";

const Heading = ({ className, title, text }) => {
  return (
    <div className={`${className} mx-auto mb-12 max-w-[50rem] lg:mb-20`}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{title}</p>}
    </div>
  );
};

export default Heading;
