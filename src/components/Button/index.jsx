import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-[3px]" };
const variants = {
  fill: {
    indigo_50: "bg-indigo-50",
    gray_100: "bg-gray-100 text-gray-900",
    gray_900: "bg-gray-900 text-white-A700",
  },
  outline: {
    gray_400: "border border-gray-400 border-solid text-black-900",
    gray_500_01: "border border-gray-500_01 border-solid text-gray-900_01",
  },
};
const sizes = { xs: "p-1", sm: "p-[7px]", md: "p-2.5", lg: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_50",
    "gray_100",
    "gray_900",
    "gray_400",
    "gray_500_01",
  ]),
};

export { Button };
