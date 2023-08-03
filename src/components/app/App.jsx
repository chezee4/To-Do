import FormComponent from "../form";
import Header from "../header";
import List from "../list";

import { DataContext } from "../../context";
import { useDataFromLocalStorage } from "../../utils/dataUtils";

import "../../style/index.scss";

function App() {
  const { data, setData } = useDataFromLocalStorage();

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="App">
        <div className="container">
          <Header />
          <FormComponent />
          <List />
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
