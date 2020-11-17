import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    return (
        <ul>
            <li><TodoListItem label="Drink Coffee" /></li>
            <li>
                <TodoListItem 
                    label="Read book" 
                    important
                />
            </li>
        </ul>
    )
};

export default TodoList;