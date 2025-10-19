import React from "react";
import BYULogo from "../../asset/BYU.png";

const Logo = () => (
  <div className="flex items-center space-x-2">
    <img
      src={BYULogo}
      alt="BYU DIGITAL"
      className="h-8 w-8 object-contain"
      width={32}
      height={32}
      loading="eager"
      decoding="async"
    />
    <span className="font-display font-bold text-xl text-light-100">
      BYU DIGITAL
    </span>
  </div>
);

export default Logo;
