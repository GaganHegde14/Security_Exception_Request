import React from "react";

const DatePicker = ({
  isOpen,
  onClose,
  onDateSelect,
  position = { top: 0, left: 0 },
}) => {
  if (!isOpen) return null;

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
        }}
        onClick={onClose}
      />
      <div
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          zIndex: 1000,
        }}
      >
        <input
          type="date"
          defaultValue={today}
          onChange={(e) => {
            onDateSelect(e.target.value);
            onClose();
          }}
          style={{
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            fontSize: "14px",
          }}
        />
      </div>
    </>
  );
};

export default DatePicker;
