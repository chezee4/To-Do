import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Chips from "../chips";
import { InputChipsContainer, InputChipsText } from "./styles.jsx";

const InputChips = ({ onPushData, chips, setChips }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const maxlength = 10;

  const handleClick = () => inputRef.current.focus();

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
    if (chipValue && !chips.find(({ value }) => chipValue === value)) {
      const newChip = { id: uuidv4(), value: chipValue};
      onPushData(newChip);
    }
    setInputValue("");
  };

  return (
    <InputChipsContainer onClick={handleClick}>
      <Chips chips={chips} setChips={setChips} />
      {chips.length <= 10 ? (
        <InputChipsText
          ref={inputRef}
          placeholder="Type chips"
          value={inputValue}
          onChange={handleKeyDown}
          onKeyDown={push}
        />
      ) : null}
    </InputChipsContainer>
  );
};

export default InputChips;
