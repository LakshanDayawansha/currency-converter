// DropdownMenu.js
import React, { useState ,useEffect, useRef} from "react";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
import "./dropdown.css";

const DropDown = ({moreOption}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("USD");

  const options = ["USD", "LKR", "JPY", "INR","CNY","KRW","more.."];
 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    if (option === "more..") {
      moreOption(true);
      
    }else{
      setSelectedOption(option);
    }
    setIsOpen(!isOpen);
  };

 
  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption}{" "}
        <span className="caret">{isOpen ? <CaretUp /> : <CaretDown />}</span>
      </button>
      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {options.map((option, index) => (
          <a
            href="#"
            className="dropdown-item"
            key={index}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
