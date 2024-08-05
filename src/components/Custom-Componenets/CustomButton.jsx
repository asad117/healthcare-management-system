import React, { Fragment } from "react";
import "./CustomButtonStyle.css"; //
const CustomButton = ({
  disable,
  onClick,
  type,
  name,
  className,
  primary,
  block,
}) => {
  return (
    <Fragment>
      <Fragment>
        {primary ? (
          <button
            className={`commonStyle primarybutton ${className}`}
            disabled={disable}
            onClick={onClick}
            type={type}
          >
            {name}
          </button>
        ) : (
          <button
            className={`commonStyle secondarybutton ${className}`}
            disabled={disable}
            onClick={onClick}
            type={type}
          >
            {name}
          </button>
        )}
      </Fragment>
      <Fragment>
        {block && (
          <button
            className={`commonStyle ${className}`}
            disabled={disable}
            onClick={onClick}
            type={type}
          >
            {name}
          </button>
        )}
      </Fragment>
    </Fragment>
  );
};

export default CustomButton;
