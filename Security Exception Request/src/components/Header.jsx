import React from "react";
import "../styles/Header.css";
import ClockIcon from "../assets/svg/clockicon.svg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Header = ({
  breadcrumb,
  title,
  onBackClick,
  onClockClick,
  showBackArrow = true,
  showClockIcon = true,
}) => {
  // Split title at the dash to apply different font sizes
  const renderTitle = () => {
    const dashIndex = title.indexOf(" - ");
    if (dashIndex !== -1) {
      const mainTitle = title.substring(0, dashIndex);
      const subtitle = title.substring(dashIndex);
      return (
        <>
          {mainTitle}
          <span className="subtitle">{subtitle}</span>
        </>
      );
    }
    return title;
  };

  return (
    <div className="header-section">
      {breadcrumb && (
        <div
          className="breadcrumb"
          onClick={() => onBackClick && onBackClick()}
        >
          {breadcrumb}
        </div>
      )}

      <div className="main-header">
        {showBackArrow && (
          <div className="back-arrow" onClick={onBackClick}>
            <ArrowBackIcon />
          </div>
        )}
        <h1 className="page-title">{renderTitle()}</h1>
        {showClockIcon && (
          <div className="clock-icon" onClick={onClockClick}>
            <img src={ClockIcon} alt="Clock" width="30" height="30" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
