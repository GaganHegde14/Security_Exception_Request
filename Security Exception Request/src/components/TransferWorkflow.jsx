import React, { useState } from "react";
import "../styles/TransferWorkflow.css";
import transferworkflowIcon from "../assets/svg/transferworflow.svg";
import markdownarrowIcon from "../assets/svg/markdownarrow.svg";
import transferWFIcon from "../assets/svg/transferWF.svg";
import viewPoliceIcon from "../assets/svg/viewpolice.svg";

const TransferWorkflow = ({
  defaultTransferTo = "Krishna@samsung.com",
  defaultComment = "I have an important personal matter to attend at my Home town.",
  onTransferWFClick,
  onViewPoliciesClick,
  currentStep = 2, // Current step in the workflow (1-based)
}) => {
  const [selectedRequestType, setSelectedRequestType] = useState("transferTo");
  const [isExpanded, setIsExpanded] = useState(false); // Default to collapsed

  const handleRequestTypeChange = (value) => {
    setSelectedRequestType(value);
  };

  const handleTransferWFClick = () => {
    console.log("Transfer WF button clicked");
    if (onTransferWFClick) {
      onTransferWFClick();
    }
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Define workflow steps
  const workflowSteps = [
    { id: 1, label: "Submit", status: "completed" },
    { id: 2, label: "Approval", status: "current" },
    { id: 3, label: "Review", status: "pending" },
    { id: 4, label: "Complete", status: "pending" },
  ];

  // Calculate progress percentage
  const progressPercentage =
    ((currentStep - 1) / (workflowSteps.length - 1)) * 100;

  return (
    <div>
      <div className="transfer-workflow-section">
        <div className="transfer-workflow-header">
          <img
            src={transferworkflowIcon}
            alt="Transfer Workflow"
            className="transfer-workflow-icon"
          />
          <span className="transfer-workflow-title">Transfer Workflow</span>
        </div>
      </div>

      {/* View Policies Section */}
      <div className="view-policies-section">
        <div className="view-policies-content">
          <img
            src={viewPoliceIcon}
            alt="View Policies"
            className="view-policies-icon"
          />
          <span className="view-policies-text">View Policies</span>
        </div>
      </div>
    </div>
  );
};

export default TransferWorkflow;
