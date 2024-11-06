import React from "react";
import "./textinput.css";

const TextInput = ({ setvalue,getvalue, viewonly }) => {

  const handleChange = (event) => {
    getvalue(event.target.value);
  };
  return (
    <div>
      <input
        className="input-group"
        type="number"
        value={setvalue}
        readOnly={viewonly}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInput;
