import styled   from "styled-components";

export const Chip = styled.span`

    display: inline-block;
    font-size: 18px;
    margin: 5px;
    padding-left: 8px;
    margin-right: 8px;
    position: relative;
    cursor: pointer;
    padding-right: 22px;
    border-radius: 15px;
    background: #414040;
    
 `
 
export const ChipValue = styled.span`
     display: inline-block;
      color: #fff;
      padding: 5px;
      font-weight: bold;
    
`
export const DeleteButton = styled.button`
      background: #414040;
      color: #fff;
      border: 0;
      transform: translate(-64%, 0%);
      border-radius:15px;
      padding: 5px 12px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: -25px;
      line-height: 0.5;
      font-weight: bold;
      cursor:pointer;
`