import * as React from "react";
import { Subscribe } from "@react-rxjs/core";
import { todos$ } from "./state";
import { TodoList } from "./components";

export default function App() {
  return (
    <Subscribe source$={todos$}>
      <TodoList />
    </Subscribe>
  );
}
