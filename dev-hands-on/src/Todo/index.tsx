import React, { FC, useState } from "react";
import { TodoItem } from "../types";
import "./styles.css";

interface TodoItemsProps {
  items: TodoItem[];
}
export const Todo: FC<TodoItemsProps> = ({ items }) => {
  const [todoList, setTodoList] = useState<TodoItem[]>(items);
  const handleTodoComplete = (index: number) => {
    setTodoList(
      todoList.map((item) =>
        item.id === index ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <ul>
      {todoList.map((item) => (
        <li className="todo-list">
          <input
            className="input-checkbox"
            type="checkbox"
            checked={item.completed}
            onChange={() => handleTodoComplete(item.id)}
          />
          <span className={item.completed ? "todo-complete" : ""}>
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
};
