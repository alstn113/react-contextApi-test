import TodoListContext from "../context/TodoList/TodoListContext";
import { useContext, useState } from "react";

function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useContext(TodoListContext);
  const [input, setInput] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <div>
      <h2>TODO LIST Component</h2>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  );
}

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div>
      <input type="checkbox" onClick={() => onToggle(todo.id)} checked={todo.done} readOnly={true} />
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.id} {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </div>
  );
};

export default TodoList;
