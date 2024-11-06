import React, { useState, useEffect } from "react";
import DropDown from "./components/DropDown";
import TextInput from "./components/TextInput";
import { ArrowsDownUp } from "@phosphor-icons/react";
import "./conversionform.css";

const ConversionForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [currencyData, setCurrencyData] = useState(null);
  const [error, setError] = useState(null);
  const [currencyCodes, setCurrencyCodes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/currencies");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const codes = Object.keys(data);
        setCurrencyData(data);
        setCurrencyCodes(codes);
        console.log(codes);
        setError(null);
      } catch (err) {
        setError("Failed to fetch currency data");
        console.error("Error fetching data:", err);
      } finally {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  const handleMoreCurrencies = (more) => {
    setIsMore(more);
  };

  return (
    <>
      <div className={`converter-form ${isLoading ? "loading" : ""}`}>
        <div className="header">
          <h1>Currency Converter</h1>
        </div>
        <div className="base-currency">
          <DropDown moreOption={handleMoreCurrencies} />
          <TextInput />
        </div>

        <div className="swap-btn">
          <ArrowsDownUp size={24} />
        </div>

        <div className="target-currency">
          <DropDown moreOption={handleMoreCurrencies} />
          <TextInput />
        </div>
        <div className="rate">1 USD = 0.85 EUR</div>
      </div>
      <div className={`loader ${isLoading ? "active" : ""}`}></div>
      {isMore && (
        <div className="more">
          <h1>More Currencies</h1>
        </div>
      )}
    </>
  );
};

export default ConversionForm;
