import React, { useState } from "react";
import "./morecurrencies.css";
import CurrencyFlag from 'react-currency-flags';

const MoreCurrencies = ({ currencies, moreOption, selectedOption }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // filter currencies based on search term
  const filteredCurrencies = currencies.filter((currency) =>
    currency.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    
  };
  return (
    <div className="more-currencies">
      <div className="currencies-search">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="cancel-button" onClick={() => moreOption(false)}>
          Cancel
        </button>
      </div>
      {filteredCurrencies.map((currency, index) => (
        <div
          key={index}
          className="more-currencies-item"
          onClick={() => selectedOption(currency)}
        >
          <p className="currency-with-flag">{currency}    <CurrencyFlag currency={currency} size="sm" /></p>
        </div>
      ))}
    </div>
  );
};
export default MoreCurrencies;
