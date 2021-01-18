import React, { useState } from 'react';
import { addTodo } from '../../state';

const TodoItemCreator: React.FC<{}> = () => {
    const [value, setValue] = useState('');
    
    const handleClick = () => {
        addTodo(value);
        setValue('');
    };
    
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    
    return (
        <div>
            <input type="text" value={value} onChange={handleValueChange} />
            <button onClick={handleClick}>Add</button>
        </div>
    );
}

export default TodoItemCreator;