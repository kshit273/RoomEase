import { forwardRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./Dropdown.css";

const DropdownButton = forwardRef((props, ref) => {
  const { children, toggle, open } = props;

  return (
    <div
      onClick={toggle}
      className={`dropdown-btn text-gray-500 ${open ? "button-open" : null}`}
      ref={ref}
    >
      {children}
      <span className="toggle-icon">
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </span>
    </div>
  );
});

export default DropdownButton;
