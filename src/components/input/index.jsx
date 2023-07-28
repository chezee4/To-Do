// import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// const Input = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       const data = JSON.parse(localStorage.getItem('data')) || [];
//       data.push({ id: uuidv4(), text: inputValue });
//       localStorage.setItem('data', JSON.stringify(data));
//       setInputValue('');
//     }
//   };

//   return (
//     <input
//       type="text"
//       value={inputValue}
//       onChange={(e) => setInputValue(e.target.value)}
//       onKeyDown={handleKeyDown}
//     />
//   );
// };

// export default Input;

import React from 'react';

const Input = ({ value, onChange }) => {
  const handleKeyDown = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      onChange={handleKeyDown}
      value={value}
    />
  );
};

export default Input;

