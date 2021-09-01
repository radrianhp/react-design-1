import React from "react";

import Icon from "../assets/images/logo-icon.png";

export default function IconLogo() {
  return (
    <>
      <div className="brand-icon">
        <img src={Icon} alt="logo" style={{ width: "30px", height: "30px" }} />
        <h1>
          Agros<span className="span-logo">Shipper</span>
        </h1>
      </div>
    </>
  );
}
