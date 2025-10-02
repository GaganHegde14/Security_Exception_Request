import React from "react";
import "../styles/SecurityProfile.css";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import ProfileCard from "./ProfileCard";

const SecurityProfile = ({
  securityUser,
  onAvatarClick,
  onNameClick,
  onEmailClick,
  onDesignationClick,
  onDivisionClick,
  onManagerClick,
  className = "",
}) => {
  const {
    initials = "MK",
    name = "Manoj Kandan M",
    genId = "255048778",
    email = "Manoj.kandan@partner.samsung.com",
    designation = "Outsourcing",
    division = "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    manager = "Ravindra S R (06786669)",
    isOnline = true,
  } = securityUser || {};

  return (
    <div className={`security-profile-section ${className}`}>
      <Avatar initials={initials} isOnline={isOnline} onClick={onAvatarClick} />

      <UserInfo
        name={name}
        genId={genId}
        email={email}
        onNameClick={onNameClick}
        onEmailClick={onEmailClick}
      />

      <ProfileCard
        designation={designation}
        division={division}
        manager={manager}
        onDesignationClick={onDesignationClick}
        onDivisionClick={onDivisionClick}
        onManagerClick={onManagerClick}
      />
    </div>
  );
};

export default SecurityProfile;
