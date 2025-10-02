import React from "react";
import "../styles/SecurityRequirements.css";
import ClipboardIcon from "../assets/svg/ClipboardIcon.svg";

const SecurityRequirements = ({ onClick, className = "" }) => {
  return (
    <div className={`security-requirements ${className}`} onClick={onClick}>
      <img
        src={ClipboardIcon}
        alt="Clipboard"
        className="clipboard-icon"
        width="24"
        height="26"
      />
      <span className="requirements-text">Required Information</span>
    </div>
  );
};

export default SecurityRequirements;
