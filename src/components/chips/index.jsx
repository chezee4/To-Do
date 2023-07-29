import React from "react";
import { Chip, ChipValue, DeleteButton } from "./styles.jsx";


const Chips = ({ chips, deleteChip = null }) => {


  return chips.map(({ id, value }) => (
    <Chip key={id}>
      <ChipValue>{value}</ChipValue>
      {deleteChip ? (
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
