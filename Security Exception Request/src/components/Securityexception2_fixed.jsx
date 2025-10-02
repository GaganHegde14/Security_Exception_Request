import React, { useState, useRef } from "react";
import "../styles/SecurityTraining1.css";
import NotesIcon from "../assets/svg/notesicon.svg";
import CalendarIcon from "../assets/svg/calendericon.svg";
import InfoIcon from "../assets/svg/smallinfo.svg";
import BlueInfoIcon from "../assets/svg/blueInformation.svg";
import GreyInfoIcon from "../assets/svg/greyInformation.svg";
import PlusIcon from "../assets/svg/plusicon.svg";
import UploadIcon from "../assets/svg/uploadicon.svg";
import UploadCloudIcon from "../assets/svg/uploadcloud.svg";
import UserIcon from "../assets/svg/usericon.svg";
import exceltemplateicon from "../assets/svg/exceltemplateicon.svg";
import DropdownIcon from "../assets/svg/dropdown.svg";
import DatePicker from "./DatePicker";

const SecurityTraining = ({
  isReadOnly = false,
  disabledFieldColor = "#D0D5DD",
  initialPeriodFrom = "",
  initialPeriodTo = "",
  initialExpiryDate = "",
  initialExceptionType = "bulk",
}) => {
  const [exceptionType, setExceptionType] = useState(initialExceptionType);
  const [projectName, setProjectName] = useState(
    "IoT_Advanced_Features_Gen_RI_V_Y2023"
  );
  const [periodFrom, setPeriodFrom] = useState(initialPeriodFrom);
  const [periodTo, setPeriodTo] = useState(initialPeriodTo);
  const [expiryDate, setExpiryDate] = useState(initialExpiryDate);
  const blueInfoRef = useRef(null);

  // Calendar states
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeCalendarField, setActiveCalendarField] = useState(null);
  const [calendarPosition, setCalendarPosition] = useState({ top: 0, left: 0 });

  const [securityException, setSecurityException] = useState(
    "SMTP- Outlook access/usage of SMTP host to send emails"
  );
  const [problemDescription, setProblemDescription] =
    useState("XXX-XXX-XX-XXX-X");
  const [impactOnProject, setImpactOnProject] = useState("XXX-XXX-XX-XXX-X");
  const [assetNo, setAssetNo] = useState("");
  const [macId, setMacId] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [location, setLocation] = useState("");
  const [additionalComments, setAdditionalComments] =
    useState("xxx-xxx-xx-xxx-x");

  // Calendar handlers
  const handleCalendarClick = (event, fieldName) => {
    event.preventDefault();
    const rect = event.target
      .closest(".date-input-wrapper")
      .getBoundingClientRect();
    setCalendarPosition({
      top: rect.bottom + window.scrollY + 5,
      left: rect.left + window.scrollX,
    });
    setActiveCalendarField(fieldName);
    setShowCalendar(true);
  };

  const handleDateSelect = (date) => {
    switch (activeCalendarField) {
      case "periodFrom":
        setPeriodFrom(date);
        break;
      case "periodTo":
        setPeriodTo(date);
        break;
      case "expiryDate":
        setExpiryDate(date);
        break;
      default:
        break;
    }
    setShowCalendar(false);
    setActiveCalendarField(null);
  };

  const handleCalendarClose = () => {
    setShowCalendar(false);
    setActiveCalendarField(null);
  };

  return (
    <div
      className={`security-training-container ${
        isReadOnly ? "readonly-form" : ""
      }`}
    >
      {/* Main Grey Rectangle Container */}
      <div className="main-rectangle">
        {/* Top Section with Exception Type and Notes Icon */}
        <div className="top-section">
          <div className="exception-type-wrapper">
            <h2 className="main-training-title">Exception Type</h2>

            {/* Exception Type Radio Buttons */}
            <div className="exception-type-section">
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="exceptionType"
                    value="individual"
                    checked={exceptionType === "individual"}
                    onChange={(e) => setExceptionType(e.target.value)}
                    className="radio-input"
                    disabled={isReadOnly}
                  />
                  <span className="radio-label">Individual</span>
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="exceptionType"
                    value="bulk"
                    checked={exceptionType === "bulk"}
                    onChange={(e) => setExceptionType(e.target.value)}
                    className="radio-input"
                    disabled={isReadOnly}
                  />
                  <span className="radio-label">Bulk</span>
                </label>
              </div>
            </div>
          </div>

          {/* Notes Icon in top right */}
          <div className="notes-icon-container">
            <img src={NotesIcon} alt="Notes" className="top-notes-icon" />
          </div>
        </div>

        {/* Project Name Section */}
        <div className="form-section">
          <label className="form-label">
            Project Name <span className="required-asterisk">*</span>
          </label>
          <div className="input-with-dropdown">
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="form-input project-name-input"
              readOnly={isReadOnly}
              style={isReadOnly ? { backgroundColor: disabledFieldColor } : {}}
            />
            <button className="dropdown-icon" disabled={isReadOnly}>
              <img src={DropdownIcon} alt="Dropdown" className="dropdown-svg" />
            </button>
          </div>
        </div>

        {/* Date Fields Row */}
        <div className="date-fields-container">
          <div className="date-field">
            <label className="form-label">
              Period From <span className="required-asterisk">*</span>
            </label>
            <div className="date-input-wrapper">
              <input
                type="date"
                value={periodFrom}
                onChange={(e) => setPeriodFrom(e.target.value)}
                className="form-input date-input"
                readOnly={isReadOnly}
                style={
                  isReadOnly ? { backgroundColor: disabledFieldColor } : {}
                }
              />
              <img
                src={CalendarIcon}
                alt="Calendar"
                className="calendar-icon-svg"
                onClick={
                  isReadOnly
                    ? undefined
                    : (e) => handleCalendarClick(e, "periodFrom")
                }
                style={
                  isReadOnly
                    ? { opacity: 0.5, cursor: "not-allowed" }
                    : { cursor: "pointer" }
                }
              />
            </div>
          </div>
          <div className="date-field">
            <label className="form-label">
              Period To <span className="required-asterisk">*</span>
            </label>
            <div className="date-input-wrapper">
              <input
                type="date"
                value={periodTo}
                onChange={(e) => setPeriodTo(e.target.value)}
                className="form-input date-input"
                readOnly={isReadOnly}
                style={
                  isReadOnly ? { backgroundColor: disabledFieldColor } : {}
                }
              />
              <img
                src={CalendarIcon}
                alt="Calendar"
                className="calendar-icon-svg"
                onClick={
                  isReadOnly
                    ? undefined
                    : (e) => handleCalendarClick(e, "periodTo")
                }
                style={
                  isReadOnly
                    ? { opacity: 0.5, cursor: "not-allowed" }
                    : { cursor: "pointer" }
                }
              />
            </div>
          </div>
          <div className="date-field">
            <label className="form-label">
              Expiry Date (By Corporate Security){" "}
              <span className="required-asterisk">*</span>
            </label>
            <div className="date-input-wrapper">
              <input
                type="date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="form-input date-input"
                readOnly={isReadOnly}
                style={
                  isReadOnly ? { backgroundColor: disabledFieldColor } : {}
                }
              />
              <img
                src={CalendarIcon}
                alt="Calendar"
                className="calendar-icon-svg"
                onClick={
                  isReadOnly
                    ? undefined
                    : (e) => handleCalendarClick(e, "expiryDate")
                }
                style={
                  isReadOnly
                    ? { opacity: 0.5, cursor: "not-allowed" }
                    : { cursor: "pointer" }
                }
              />
            </div>
          </div>
        </div>

        {/* Security Exception List */}
        <div className="form-section">
          <div className="security-exception-list">
            {/* Header Row */}
            <div className="security-exception-header">
              <span className="header-radio-placeholder"></span>
              <span className="header-text">Security Exception List</span>
            </div>

            {/* Data Rows */}
            {(isReadOnly
              ? ["SMTP- Outlook access/usage of SMTP host to send emails"]
              : [
                  "SMTP- Outlook access/usage of SMTP host to send emails",
                  "SMTP- Outlook access/usage of SMTP host to send emails",
                  "SMTP- Outlook access/usage of SMTP host to send emails",
                  "SMTP- Outlook access/usage of SMTP host to send emails",
                  "SMTP- Outlook access/usage of SMTP host to send emails",
                  "SMTP- Outlook access/usage of SMTP host to send emails",
                  "SMTP- Outlook access/usage of SMTP host to send emails",
                  "SMTP- Outlook access/usage of SMTP host to send emails",
                  "SMTP- Outlook access/usage of SMTP host to send emails",
                ]
            ).map((option, index) => (
              <label key={index} className="radio-option-vertical">
                <input
                  type="radio"
                  name="securityException"
                  value={option}
                  checked={securityException === option}
                  onChange={(e) => setSecurityException(e.target.value)}
                  className="radio-input"
                  disabled={isReadOnly}
                />
                <span
                  className={`radio-label-vertical ${
                    index === 0 ? "first-row-bold" : ""
                  }`}
                >
                  {option}
                  {index === 0 && (
                    <img
                      src={GreyInfoIcon}
                      alt="Info"
                      className="info-icon-inline grey-info"
                    />
                  )}
                  {index >= 1 && (
                    <img
                      src={GreyInfoIcon}
                      alt="Info"
                      className="info-icon-inline grey-info"
                    />
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Problem Description */}
        <div className="form-section">
          <label className="form-label">
            Problem Description + Error Screenshot if any (Max 500 Characters)
            *Attachment Max 4 MB
          </label>
          <textarea
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
            className="form-textarea fixed-90 hide-scrollbar"
            maxLength={500}
            rows={4}
          />
        </div>

        {/* Impact On Project */}
        <div className="form-section">
          <label className="form-label">
            Impact On Project, if Denied (Max 500 Characters)
          </label>
          <textarea
            value={impactOnProject}
            onChange={(e) => setImpactOnProject(e.target.value)}
            className="form-textarea fixed-90 hide-scrollbar"
            maxLength={500}
            rows={4}
          />
        </div>

        {/* System Information */}
        <div className="form-section">
          <label className="form-label">System Information</label>
          {!isReadOnly && (
            <>
              <div className="system-info-grid">
                <div className="info-field">
                  <label className="info-label">
                    Asset No <span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value={assetNo}
                    onChange={(e) => setAssetNo(e.target.value)}
                    placeholder="Enter Asset Number"
                    className="form-input system-info-input"
                  />
                </div>
                <div className="info-field">
                  <label className="info-label">
                    MAC ID <span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value={macId}
                    onChange={(e) => setMacId(e.target.value)}
                    placeholder="Enter MAC ID"
                    className="form-input system-info-input"
                  />
                </div>
                <div className="info-field">
                  <label className="info-label">
                    Serial Number <span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value={serialNumber}
                    onChange={(e) => setSerialNumber(e.target.value)}
                    placeholder="Enter Serial Number"
                    className="form-input system-info-input"
                  />
                </div>
                <div className="info-field">
                  <label className="info-label">
                    IP Address <span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                    placeholder="Enter IP Address"
                    className="form-input system-info-input"
                  />
                </div>
                <div className="info-field">
                  <label className="info-label">
                    Owner Name <span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="XXX-XXX-XXXXX"
                    className="form-input system-info-input"
                  />
                </div>
                <div className="info-field">
                  <label className="info-label">
                    Location <span className="required-asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter Location name"
                    className="form-input system-info-input"
                  />
                </div>
              </div>

              {/* Bulk Information */}
              <div className="form-section" style={{ marginTop: "10px" }}>
                <label className="form-label">Bulk Import From Excel</label>
                <div className="bulk-upload-container">
                  <div className="bulk-upload-area">
                    <input
                      type="file"
                      id="bulkFileInput"
                      className="bulk-file-input"
                      accept=".xls,.xlsx"
                    />
                    <div className="bulk-upload-left">
                      <img
                        src={UploadCloudIcon}
                        alt="Upload Cloud"
                        className="bulk-upload-cloud-icon"
                      />
                      <div className="bulk-upload-text">
                        <label
                          htmlFor="bulkFileInput"
                          className="bulk-upload-label"
                        >
                          Choose File
                        </label>
                        <span className="bulk-file-info">
                          Excel format • Max. 4MB
                        </span>
                      </div>
                    </div>
                    <button className="bulk-upload-btn">
                      <img
                        src={UploadIcon}
                        alt="Upload"
                        className="bulk-upload-icon"
                      />
                      Upload
                    </button>
                    <div className="bulk-button-divider"></div>
                    <button className="bulk-template-btn">
                      <img
                        src={exceltemplateicon}
                        alt="Upload"
                        className="bulk-upload-icon"
                      />
                      Excel Template
                    </button>
                  </div>
                </div>
              </div>

              {/* System Info Table */}
              <div className="system-info-table-container">
                <div className="system-info-table">
                  <div className="table-header">
                    <span>Asset/Sample No</span>
                    <span>MAC ID</span>
                    <span>Serial Number</span>
                    <span>IP Address</span>
                    <span>Owner Name</span>
                    <span>Location</span>
                  </div>
                  <div className="table-row">
                    <span>20320512335</span>
                    <span>5A-FF-WQ-34-FF-33</span>
                    <span>000123PG2215349E</span>
                    <span>000123PG2215349E</span>
                    <span>XXX-XXX-XXX-XXX</span>
                    <span>XXX-XXX-XXX-XXX</span>
                  </div>
                  <div className="table-row">
                    <span>20300513524</span>
                    <span>5A-FF-WQ-34-FF-33</span>
                    <span>000123PG2215349E</span>
                    <span>000123PG2215349E</span>
                    <span>XXX-XXX-XXX-XXX</span>
                    <span>XXX-XXX-XXX-XXX</span>
                  </div>
                  <div className="table-row">
                    <span>20300514657</span>
                    <span>5A-FF-WQ-34-FF-33</span>
                    <span>000123PG2215349E</span>
                    <span>000123PG2215349E</span>
                    <span>XXX-XXX-XXX-XXX</span>
                    <span>XXX-XXX-XXX-XXX</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Additional Information */}
        {!isReadOnly && (
          <div className="form-section">
            <label className="form-label">Additional Information</label>
            <div className="file-upload-container">
              <div className="file-upload-area">
                <input
                  type="file"
                  id="fileInput"
                  className="file-input"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif"
                />
                <div className="file-upload-left">
                  <img
                    src={UploadCloudIcon}
                    alt="Upload Cloud"
                    className="upload-cloud-icon"
                  />
                  <div className="file-upload-text">
                    <label htmlFor="fileInput" className="file-upload-label">
                      Choose File
                    </label>
                    <span className="file-info">Excel format • Max. 4MB</span>
                  </div>
                </div>
                <button className="upload-btn">
                  <img src={UploadIcon} alt="Upload" className="upload-icon" />
                  Upload
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Comments Section */}
        {!isReadOnly && (
          <div className="form-section">
            <label className="form-label">Comments (Max 500 Characters)</label>
            <textarea
              value={additionalComments}
              onChange={(e) => setAdditionalComments(e.target.value)}
              className="form-textarea fixed-90 hide-scrollbar"
              maxLength={500}
              rows={3}
            />
          </div>
        )}

        {/* Submit Button - Inside grey container, aligned right below comment box */}
        <div className="submit-button-container">
          <button className="submit-button">Submit</button>
        </div>
      </div>

      {/* DatePicker Component */}
      <DatePicker
        isOpen={showCalendar}
        onClose={handleCalendarClose}
        onDateSelect={handleDateSelect}
        selectedDate={
          activeCalendarField === "periodFrom"
            ? periodFrom
            : activeCalendarField === "periodTo"
            ? periodTo
            : activeCalendarField === "expiryDate"
            ? expiryDate
            : null
        }
        position={calendarPosition}
      />
    </div>
  );
};

export default SecurityTraining;
