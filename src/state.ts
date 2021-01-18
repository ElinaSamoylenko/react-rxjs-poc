import { combineLatest, Subject } from "rxjs";
import { map, takeWhile, scan, startWith } from "rxjs/operators";
import { bind, shareLatest } from "@react-rxjs/core";
import { collectValues, mergeWithKey, split } from "@react-rxjs/utils";
import { Todo } from "./types";

export const newTodo$ = new Subject<string>();
export const addTodo = (title: string) => title && newTodo$.next(title);

export const editTodo$ = new Subject<{ id: number; title: string }>();
export const editTodo = (id: number, title: string) => editTodo$.next({ id, title });

export const toggleTodo$ = new Subject<number>();
export const toggleTodo = (id: number) => toggleTodo$.next(id);

export const deleteTodo$ = new Subject<number>();
export const deleteTodo = (id: number) => deleteTodo$.next(id);

export const todoActions$ = mergeWithKey({
  add: newTodo$.pipe(map((title, id) => ({ id: id, title }))),
  edit: editTodo$,
  toggle: toggleTodo$.pipe(map((id) => ({ id }))),
  delete: deleteTodo$.pipe(map((id) => ({ id })))
});

export const todosMap$ = todoActions$.pipe(
  split(
    (event) => event.payload.id,
    (event$, id) =>
      event$.pipe(
        takeWhile((event) => event.type !== 'delete'),
        scan(
          (state, action) => {
            switch (action.type) {
              case 'add':
              case 'edit':
                return { ...state, title: action.payload.title};
              case 'toggle':
                return { ...state, done: !state.done };
              default:
                return state;
            }
          },
          { id, title: '', done: false } as Todo
        )
      )
  ),
  collectValues()
);

export const todosList$ = todosMap$.pipe(
  map((todosMap) => [...todosMap.values()]),
  shareLatest()
);

export const [useTodos, todos$] = bind(todosList$);