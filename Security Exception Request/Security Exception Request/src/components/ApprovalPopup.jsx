import React, { useEffect, useState } from "react";
import "../styles/ApprovalPopup.css";
import UserIcon from "../assets/svg/usericon.svg";
import HorizontalArrow from "../assets/svg/horizontalarrow.svg";

const ApprovalPopup = ({ isVisible, onClose, triggerRef }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const tableElement = triggerRef.current.closest(
        ".security-exception-list"
      );
      const tableRect = tableElement
        ? tableElement.getBoundingClientRect()
        : rect;

      setPosition({
        top: rect.bottom + window.scrollY + 10,
        left: tableRect.left + window.scrollX,
        width: tableRect.width,
      });
    }
  }, [isVisible, triggerRef]);

  if (!isVisible) return null;

  const approvalSteps = [
    "Employee",
    "Reporting Manager",
    "Part Head",
    "Group Head",
    "Dispatcher",
    "IT Security",
    "IT Head",
    "HR Expat",
  ];

  return (
    <>
      {/* Backdrop to close popup when clicked outside */}
      <div className="approval-popup-backdrop" onClick={onClose}></div>

      <div
        className="approval-popup-container"
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          width: position.width,
          zIndex: 1005,
        }}
      >
        <div className="approval-popup">
          <div className="popup-arrow"></div>

          {/* Approval Path Heading */}
          <div className="approval-header">
            <h3 className="approval-title">Approval Path:</h3>
            <div className="approval-divider"></div>
          </div>

          <div className="approval-flow-horizontal">
            {approvalSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="approval-step-vertical">
                  <img src={UserIcon} alt={step} className="user-icon" />
                </div>
                {index < approvalSteps.length - 1 && (
                  <div className="arrow-container">
                    <img
                      src={HorizontalArrow}
                      alt="arrow"
                      className="horizontal-arrow"
                    />
                    <span className="arrow-label">{step}</span>
                  </div>
                )}
                {index === approvalSteps.length - 1 && (
                  <>
                    <div className="arrow-container">
                      <img
                        src={HorizontalArrow}
                        alt="arrow"
                        className="horizontal-arrow"
                      />
                      <span className="arrow-label">{step}</span>
                    </div>
                    <div className="approval-step-vertical">
                      <img
                        src={UserIcon}
                        alt="Final User"
                        className="user-icon"
                      />
                    </div>
                    <div className="arrow-container">
                      <img
                        src={HorizontalArrow}
                        alt="arrow"
                        className="horizontal-arrow"
                      />
                    </div>
                    <div className="end-step-vertical">
                      <span className="end-label">END</span>
                    </div>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovalPopup;
