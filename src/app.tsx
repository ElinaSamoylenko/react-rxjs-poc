import * as React from "react";
import { merge } from "rxjs";
import { Subscribe } from "@react-rxjs/core";
import { stats$, todos$ } from "./state";
import { TodoList } from "./components";

const provider$ = merge(todos$, stats$);
export default function App() {
  return (
    <Subscribe source$={provider$}>
      <TodoList />
    </Subscribe>
  );
}
