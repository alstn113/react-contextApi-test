import "./App.css";
import Counter from "./components/Counter";
import CounterProvider from "./context/CounterContext";

function App() {
  return (
    <CounterProvider>
      <div className="App">
        <h1>Context Api</h1>
        <Counter />
      </div>
    </CounterProvider>
  );
}

export default App;
