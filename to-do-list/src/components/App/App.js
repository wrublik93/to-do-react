import React from 'react';

import './App.css';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';

const App = () => {
    const todoData = [
        {
            id: 1,
            label: 'Drink Coffee',
            important: false,
        },
        {
            id: 2,
            label: 'Read documentation',
            important: true,
        },
        {
            id: 3,
            label: 'Eat food',
            important: false,
        },
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={ 1 } done={ 2 } />
            <div className="top-panel d-flex">
              <SearchPanel />
              <ItemStatusFilter />
            </div>
            <TodoList todos={ todoData } />
        </div>
    )
};

export default App;
