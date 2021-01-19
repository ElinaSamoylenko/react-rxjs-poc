import React from 'react';
import { deleteTodo, editTodo, toggleTodo } from '../../state';
import { Todo } from '../../types';

type Props = {
    item : Todo;
}

const TodoItem: React.FC<Props> = ({ item }) => (
    <div>
        <input value={item.title} onChange={({ target }) => editTodo(item.id, target.value)} />
        <input type="checkbox" checked={item.done} onChange={() => toggleTodo(item.id)} />
        <button onClick={() => deleteTodo(item.id)}>Delete</button>
    </div>
);

export default TodoItem;