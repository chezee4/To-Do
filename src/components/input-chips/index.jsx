import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./input-chips.scss";

const Chips = ({ onPushData, chips, setChips }) => {
  const [inputValue, setInputValue] = useState("");
  const maxlength = 10;
  const handleKeyDown = (event) => {
    const value = event.target.value;
    if (value.length <= maxlength) setInputValue(value);
  };
  const push = (e) => {
    if (e.key === "Enter") {
      updateChips(inputValue);
      e.preventDefault();
    }
  };

  const updateChips = (value) => {
    const chipValue = value.trim().toLowerCase();
    if (chipValue) {
      const newChip = { id: uuidv4(), value: chipValue };
      onPushData(newChip);
    }
    setInputValue("");
  };

  const deleteChip = (id) =>
    setChips((chips) => chips.filter((chip) => chip.id !== id));

  return (
    <div className="input-chips__container">
      {chips.map(({ id, value }) => (
        <span className="chip" key={id}>
          <span className="chip-value">{value}</span>
          <button
            type="button"
            className="delete-button"
            onClick={() => deleteChip(id)}
          >
            x
          </button>
        </span>
      ))}
      <input
        type="text"
        className="input-chips"
        value={inputValue}
        onChange={handleKeyDown}
        onKeyDown={push}
      />
    </div>
  );
};

export default Chips;
