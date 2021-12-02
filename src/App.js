import "./App.css";

import NameTag from "./components/NameTag";
import CounterC from "./components/CounterC";
import CounterF from "./components/CounterF";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="App">
      <Feed />

      <NameTag name="Michael Scott" city="Scranton" />
      <CounterC color="red" />
      <CounterF color="green" />
    </div>
  );
}

export default App;
