import React, { useState } from "react";
import "../components/filter.css";
// import dropdown from "../components/images/dropdown.png"

const Filter = ({ filters, buttonName }) => {
  const [isOpen, setisOpen] = useState(false);

  const toggleDropdown = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="filter-component">
      <button onClick={toggleDropdown} className="filter-btn">
        {buttonName}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="headings">
            <p>Refined By</p>
            <p>Clear</p>
          </div>

          {filters.map((filter, index) => (
            <div key={index} className="filter-options">
              <label className="filter-options-label">{filter.label}</label>

              {filter.inputType === "text" && <input type="text" />}

              {filter.inputType === "select" && (
                <select className="dropDown">
                  {filter.options.map((option, i) => (
                    <option key={i} value={option.value} className="dropDown-option">
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
              {}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
