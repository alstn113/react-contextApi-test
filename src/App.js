import React from "react";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import CounterProvider from "./context/Counter/CounterProvider";
import TodoListProvider from "./context/TodoList/TodoListProvider";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const AppProvider = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) =>
      React.createElement(context, {
        children: prev,
      }),
    children
  );

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Context Api</h1>
        <ul>
          <li>
            <Link to="/">TODO LIST</Link>
          </li>
          <li>
            <Link to="/counter">COUNTER</Link>
          </li>
        </ul>
      </div>
      <AppProvider contexts={[CounterProvider, TodoListProvider]}>
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route exact path="/counter" component={Counter} />
        </Switch>
      </AppProvider>
    </Router>
  );
}

export default App;
