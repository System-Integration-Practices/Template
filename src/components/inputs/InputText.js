import React, { Fragment } from "react";

const InputText = ({ className, ...props }) => {
  return (
    <Fragment>
      <input type="text" className={`input-text ${className}`} {...props} />
    </Fragment>
  );
};

export default InputText;
