import Header from "./Components/Layout/Header";

import "./App.css";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
