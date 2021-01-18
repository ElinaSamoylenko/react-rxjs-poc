import * as React from "react";
import { useTodos } from "../state";
import { Todo } from "../types";
import TodoItemCreator from "./todo-item-creator";
import TodoItem from "./todo-item";
  
export const TodoList: React.FC<{}> = () => {
    const todoList = useTodos();
  
    return (
      <>
        <TodoItemCreator />
  
        {todoList.map((item: Todo) => (
          <TodoItem key={item.id} item={item} />
        ))}
      </>
    );
  }