import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: uuidv4(),
    isChecked: false,
    text: "Поїсти",
    chips: [
      { id: uuidv4(), value: "#1" },
      { id: uuidv4(), value: "must-have" },
    ],
  },
  {
    id: uuidv4(),
    isChecked: false,
    text: "Поспати",
    chips: [
      { id: uuidv4(), value: "#1" },
      { id: uuidv4(), value: "must-have" },
    ],
  },
  {
    id: uuidv4(),
    isChecked: false,
    text: "Подивитись Фільм",
    chips: [{ id: uuidv4(), value: "пріоритет" }],
  },
  {
    id: uuidv4(),
    isChecked: false,
    text: "Ту-ту-ту!",
    chips: [
      { id: uuidv4(), value: "Ту-ту-ту!" },
      { id: uuidv4(), value: "ту-ту" },
    ],
  },
  {
    id: uuidv4(),
    isChecked: false,
    text: "A-B-F",
    chips: [{ id: uuidv4(), value: "D-U-W" }],
  },
  {
    id: uuidv4(),
    isChecked: false,
    text: "Q-I-R",
    chips: [{ id: uuidv4(), value: "E-O-0" }],
  },
];
