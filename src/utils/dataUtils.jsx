import { useEffect, useState } from "react";
import { data as dataPlaceholde } from "../data/constants";

export const useDataFromLocalStorage = () => {
  const [data, setData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const fetchLocalStorage = async () =>
    (await JSON.parse(localStorage.getItem("data"))) || [];

  useEffect(() => {
    fetchLocalStorage().then((storedData) => {
      storedData.length ? setData(storedData) : setData(dataPlaceholde);
      setIsDataLoaded(true);
    });
  }, []);

  useEffect(() => {
    isDataLoaded && localStorage.setItem("data", JSON.stringify(data));
  }, [data, isDataLoaded]);

  return { data, setData };
};
