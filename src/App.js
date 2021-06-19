import "./App.css";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Cat from "./components/Cat";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Counter name="Jacqueline" />

      <Cat />
    </div>
  );
}

export default App;
