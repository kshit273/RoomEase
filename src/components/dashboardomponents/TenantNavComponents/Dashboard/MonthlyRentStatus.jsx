import React from "react";

// Function to convert hex color to RGB
const hexToRgb = (hex) => {
  const bigint = parseInt(hex.replace("#", ""), 16);
  return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
};

// Function to interpolate between two colors
const interpolateColor = (color1, color2, factor) => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const result = rgb1.map((c, i) => Math.round(c + factor * (rgb2[i] - c)));
  return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
};

const getCurrentMonthColor = () => {
  const today = new Date();
  const date = today.getDate();
  const month = today.getMonth();

  const green = "#61C428";
  const yellow = "#dfdf1a";
  const red = "#d72638";

  // Last day of the current month
  const lastDay = new Date(today.getFullYear(), month + 1, 0).getDate();

  if (date <= 15) {
    // Transition from green to yellow between 1st → 15th
    const factor = (date - 1) / (15 - 1);
    return interpolateColor(green, yellow, factor);
  } else {
    // Transition from yellow to red between 15th → last day
    const factor = (date - 15) / (lastDay - 15);
    return interpolateColor(yellow, red, factor);
  }
};

const MonthlyRentStatus = ({ dates }) => {
  const currentMonth = new Date().getMonth();

  // Get unique months from the dates array
  const monthsPaid = [
    ...new Set(dates.map((date) => new Date(date).getMonth())),
  ];

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  return (
    <div className="p-4 bg-[#e2e2e2] rounded-[20px] max-w-sm">
      <p className="font-medium text-[24px] text-[#5c5c5c] mb-4">
        Monthly rent status
      </p>
      <div className="grid grid-cols-4 gap-3">
        {months.map((month, index) => {
          const isCurrentMonth = index === currentMonth;
          const isPaid = monthsPaid.includes(index);

          let bgColor = "#d9d9d9";
          let textColor = "#444"; // default gray
          if (isPaid) {
            bgColor = "#61C428";
            textColor = "#e8e8e8";
          } // green for paid months
          if (isCurrentMonth) {
            bgColor = getCurrentMonthColor();
            textColor = "#e8e8e8";
          } // yellow for current month

          return (
            <div
              key={month}
              className="w-[75px] h-[75px] rounded-[12px] flex items-center justify-center font-normal  capitalize cursor-default"
              style={{ backgroundColor: bgColor, color: textColor }}
            >
              {month}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyRentStatus;
