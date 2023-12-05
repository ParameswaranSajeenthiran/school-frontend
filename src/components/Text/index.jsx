import React from "react";

const sizeClasses = {
  txtIBMPlexSansMedium14: "font-ibmplexsans font-medium",
  txtIBMPlexSansMedium16Gray90001: "font-ibmplexsans font-medium",
  txtIBMPlexSansRegular16Bluegray100b2: "font-ibmplexsans font-normal",
  txtIBMPlexSansSemiBold16: "font-ibmplexsans font-semibold",
  txtInterSemiBold14: "font-inter font-semibold",
  txtIBMPlexSansRegular14Gray900: "font-ibmplexsans font-normal",
  txtIBMPlexSansRegular14Gray800: "font-ibmplexsans font-normal",
  txtIBMPlexSansSemiBold14: "font-ibmplexsans font-semibold",
  txtInterSemiBold14Gray800: "font-inter font-semibold",
  txtIBMPlexSansRegular16: "font-ibmplexsans font-normal",
  txtIBMPlexSansRegular14: "font-ibmplexsans font-normal",
  txtIBMPlexSansRegular36: "font-ibmplexsans font-normal",
  txtIBMPlexSansRegular16Black900: "font-ibmplexsans font-normal",
  txtIBMPlexSansRegular14Bluegray600: "font-ibmplexsans font-normal",
  txtInterSemiBold20: "font-inter font-semibold",
  txtIBMPlexSansBold20: "font-bold font-ibmplexsans",
  txtInterRegular14Gray800: "font-inter font-normal",
  txtAlfaSlabOneRegular28: "font-alfaslabone font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtIBMPlexSansMedium16: "font-ibmplexsans font-medium",
  txtAlfaSlabOneRegular24: "font-alfaslabone font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
