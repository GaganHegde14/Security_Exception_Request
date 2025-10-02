import React from "react";
import "../styles/SecurityForms2.css";
import Header from "./Header";
import SecurityProfile from "./EmployeeProfile";
import SecurityRequirements from "./RequiredInfo";
import SecurityTraining from "./Securityexception2";
const SecurityForms6 = () => {
  // Event handlers for all clickable components
  const handleBackClick = () => {
    console.log("Back button clicked");
    // Add your navigation logic here
  };

  const handleClockClick = () => {
    console.log("Clock icon clicked");
    // Add your clock/time logic here
  };

  const handleAvatarClick = () => {
    console.log("Avatar clicked");
    // Add your avatar click logic here
  };

  const handleNameClick = () => {
    console.log("Name clicked");
    // Add your name click logic here
  };

  const handleEmailClick = () => {
    console.log("Email clicked");
    // Add your email click logic here
  };

  const handleSecurityRequirementsClick = () => {
    console.log("Security Requirements clicked");
    // Add your security requirements click logic here
  };

  const handleDesignationClick = () => {
    console.log("Designation clicked");
    // Add your designation click logic here
  };

  const handleDivisionClick = () => {
    console.log("Division clicked");
    // Add your division click logic here
  };

  const handleLocationClick = () => {
    console.log("Location clicked");
    // Add your location click logic here
  };

  const handleManagerClick = () => {
    console.log("Manager clicked");
    // Add your manager click logic here
  };

  // Security User data object
  const securityUserData = {
    initials: "MK",
    name: "Manoj Kandan M",
    genId: "255048778",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division:
      "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    location: "Bangalore",
    manager: "Ravindra S R (06786669)",
    isOnline: true,
  };

  return (
    <div className="security-forms-container">
      <Header
        breadcrumb="My Workspace > Security Training Module"
        title="Security Exception Request - HR BP Approve"
        onBackClick={handleBackClick}
        onClockClick={handleClockClick}
      />

      <SecurityProfile
        securityUser={securityUserData}
        onAvatarClick={handleAvatarClick}
        onNameClick={handleNameClick}
        onEmailClick={handleEmailClick}
        onDesignationClick={handleDesignationClick}
        onDivisionClick={handleDivisionClick}
        onLocationClick={handleLocationClick}
        onManagerClick={handleManagerClick}
      />

      <SecurityRequirements onClick={handleSecurityRequirementsClick} />

      <SecurityTraining
        isReadOnly={true}
        disabledFieldColor="#D0D5DD"
        initialExceptionType="individual"
        initialPeriodFrom="2025-06-12"
        initialPeriodTo="2026-06-12"
        initialExpiryDate="2026-06-12"
      />
    </div>
  );
};

export default SecurityForms6;
