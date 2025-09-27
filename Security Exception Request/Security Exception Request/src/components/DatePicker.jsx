import React, { useState } from "react";
import "../styles/DatePicker.css";

const DatePicker = ({
  isOpen,
  onClose,
  onDateSelect,
  selectedDate = null,
  position = { top: 0, left: 0 },
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState("days"); // 'days', 'months', 'years'

  if (!isOpen) return null;

  // Get current month/year info
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = new Date();

  // Calendar navigation
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const goToPreviousYear = () => {
    setCurrentDate(new Date(currentYear - 1, currentMonth, 1));
  };

  const goToNextYear = () => {
    setCurrentDate(new Date(currentYear + 1, currentMonth, 1));
  };

  // Generate calendar days
  const getDaysInMonth = () => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const handleDateClick = (day) => {
    if (!day) return;

    const selectedDateObj = new Date(currentYear, currentMonth, day);
    const formattedDate = selectedDateObj.toISOString().split("T")[0]; // YYYY-MM-DD format
    onDateSelect(formattedDate);
    onClose();
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const isSelected = (day) => {
    if (!selectedDate || !day) return false;
    const selected = new Date(selectedDate);
    return (
      day === selected.getDate() &&
      currentMonth === selected.getMonth() &&
      currentYear === selected.getFullYear()
    );
  };

  return (
    <>
      <div className="datepicker-overlay" onClick={onClose}></div>
      <div
        className="datepicker-container"
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          zIndex: 9999,
        }}
      >
        {/* Header */}
        <div className="datepicker-header">
          <button className="nav-button" onClick={goToPreviousMonth}>
            ‹
          </button>
          <div className="month-year-display">
            <span>
              {monthNames[currentMonth]} {currentYear}
            </span>
          </div>
          <button className="nav-button" onClick={goToNextMonth}>
            ›
          </button>
        </div>

        {/* Week days */}
        <div className="weekdays-header">
          {weekDays.map((day) => (
            <div key={day} className="weekday">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="calendar-grid">
          {getDaysInMonth().map((day, index) => (
            <div
              key={index}
              className={`calendar-day ${!day ? "empty" : ""} ${
                isToday(day) ? "today" : ""
              } ${isSelected(day) ? "selected" : ""}`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Footer with Today button */}
        <div className="datepicker-footer">
          <button
            className="today-button"
            onClick={() => {
              const today = new Date();
              const todayFormatted = today.toISOString().split("T")[0];
              onDateSelect(todayFormatted);
              onClose();
            }}
          >
            Today
          </button>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
