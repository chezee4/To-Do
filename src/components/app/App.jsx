import { useState } from "react";
import FormComponent from "../form";
import Header from "../header";
import List from "../list";

import "../../style/index.scss";
function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <FormComponent setData={setData} data={data} />
        <List data={data} setData={setData} />
      </div>
    </div>
  );
}

export default App;
