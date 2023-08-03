import styled   from "styled-components";

export const Chip = styled.span`

    display: inline-block;
    font-size:18px;
    margin: 5px;
    margin-right: 8px;
    position: relative;
    cursor: pointer;
    
 `
 
export const ChipValue = styled.span`
     display: inline-block;
      padding: 5px;
      padding-inline: 15px;
      padding-right: 20px;
      background: #414040;
      color: #fff;
      font-weight: bold;
      border-radius: 15px;
`
export const DeleteButton = styled.button`
  background: #414040;
      color: #fff;
      border: 0;
      transform: translate(-70%);
      border-radius:15px;
      padding: 5px 10px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: -25px;
      line-height: 0.5;
      font-weight: bold;
`