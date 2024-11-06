import React, { useState, useEffect } from "react";
import DropDown from "./components/DropDown";
import TextInput from "./components/TextInput";
import { ArrowsDownUp } from "@phosphor-icons/react";
import "./conversionform.css";
import MoreCurrencies from "./MoreCurrencies";
import CurrencyAPI from "@everapi/currencyapi-js";

const ConversionForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const [error, setError] = useState(null);
  const [currencyData, setCurrencyData] = useState();
  const [currencyCodes, setCurrencyCodes] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState("LKR");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [isBaseCurrency, setIsBaseCurrency] = useState(false);
  const [rate, setRate] = useState(0);
  const [baseValue, setBaseValue] = useState(1);
  const [targetValue, setTargetValue] = useState(1);
  const options = ["USD", "LKR", "JPY", "INR", "KRW", "more.."];
  const api = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const client = new CurrencyAPI(api);
        const data = await client.latest({
          base_currency: baseCurrency,
        });
        setCurrencyData(data.data);
        const codes = Object.keys(data.data);
        setCurrencyCodes(codes);
        
        
        const newRate = data.data[targetCurrency].value;
        setRate(newRate);
        setTargetValue(baseValue * newRate);
        
      } catch (err) {
        setError("Failed to fetch currency data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [baseCurrency, targetCurrency]); 

  const handleMoreCurrencies = (more) => {
    setIsMore(more);
  };

  const handleBaseCurrency = (option) => {
    if (option === "more..") {
      setIsMore(true);
      setIsBaseCurrency(true);
    } else {
      setBaseCurrency(option);
    }
  };

  const handleMoreBaseCurrency = (option) => {
    setBaseCurrency(option);
    setIsMore(false);
    setIsBaseCurrency(false);
  };

  const handleMoreTargetCurrency = (option) => {
    setTargetCurrency(option);
    setIsMore(false);
  };

  const handleTargetCurrency = (option) => {
    if (option === "more..") {
      setIsMore(true);
    } else {
      setTargetCurrency(option);
    }
  };

  const handleTargetValue = (value) => {
    setBaseValue(value);
    if (currencyData) {
      const currentRate = currencyData[targetCurrency].value;
      setTargetValue(value * currentRate);
    }
  };

  const handleSwap = () => {
    setBaseCurrency(targetCurrency);
    setTargetCurrency(baseCurrency);
    
  };

  return (
    <>
      <div
        className={`converter-form ${isLoading ? "loading" : ""} ${
          isMore ? "more" : ""
        }`}
      >
        <div className="header">
          <h1>Currency Converter</h1>
          <p>With Live Exchange Rates</p>
        </div>

        <div className="base-currency">
          <DropDown
            selectOption={handleBaseCurrency}
            options={options}
            selectedOption={baseCurrency}
          />
          <TextInput getvalue={handleTargetValue} />
        </div>

        <div className="swap-btn" onClick={handleSwap}>
          <ArrowsDownUp size={24} />
        </div>

        <div className="target-currency">
          <DropDown
            selectOption={handleTargetCurrency}
            options={options}
            selectedOption={targetCurrency}
          />
          <TextInput setvalue={targetValue} viewonly={true} />
        </div>
        <div className="rate">
          1 {baseCurrency} = {rate} {targetCurrency}
        </div>
      </div>
      {error && (<div className="error"><p>{error}</p></div>)}
      <div className={`loader ${isLoading ? "active" : ""}`}></div>
      {isMore && (
        <div className="more-currencies">
          <MoreCurrencies
            currencies={currencyCodes}
            moreOption={handleMoreCurrencies}
            selectedOption={
              isBaseCurrency ? handleMoreBaseCurrency : handleMoreTargetCurrency
            }
          />
        </div>
      )}
    </>
  );
};

export default ConversionForm;