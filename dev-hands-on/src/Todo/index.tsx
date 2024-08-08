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
    <ul className="todo-list">
      {todoList.map((item) => (
        <li className="todo-list-item">
          <input
            className="input-checkbox"
            type="checkbox"
            checked={item.completed}
            onChange={() => handleTodoComplete(item.id)}
          />
          <p
            className={item.completed ? "todo-complete" : ""}
            onClick={() => handleTodoComplete(item.id)}
          >
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
};
