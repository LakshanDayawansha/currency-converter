import React, { useState, useEffect, useRef } from "react";
import { CaretUp, CaretDown } from "@phosphor-icons/react";
import "./dropdown.css";
import CurrencyFlag from 'react-currency-flags';

//selectOption - function to handle option selection
//options - array of options
//selectedOption - selected option
const DropDown = ({ selectOption, options, selectedOption,flag }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
//handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelet = (option) => {
    selectOption(option);
    setIsOpen(false);
  };

 


  return (
    <div className="dropdown"  ref={dropdownRef}>
      <button className="dropdown-toggle"  onClick={toggleDropdown} >
        {selectedOption}{" "}
        <span className="caret">{ <CurrencyFlag currency={selectedOption} size="sm" />}{isOpen ? <CaretUp /> : <CaretDown />}</span>
      </button>
      <div 
        className={`dropdown-menu ${isOpen ? "show" : ""}`}
      >
        {options.map((option, index) => (
          <button
            type="button"
            className="dropdown-item"
            key={index}
            onClick={() => handleOptionSelet(option)}
          >
            {option}{ <CurrencyFlag currency={option} size="sm" />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
