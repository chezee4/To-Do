import React from "react";
import { Chip, ChipValue, DeleteButton } from "./styles.jsx";

const Chips = ({ chips, setChips, comparison = true}) => {

  const deleteChip = (id) =>
    setChips((chips) => chips.filter((chip) => chip.id !== id));

  return chips.map(({ id, value }) => (
    <Chip
      key={id}
    >
      <ChipValue>{value}</ChipValue>
      {comparison ? (
        <DeleteButton
          type="button"
          className="delete-button"
          onClick={() => deleteChip(id)}
        >
          x
        </DeleteButton>
      ) : null}
    </Chip>
  ));
};

export default Chips;
