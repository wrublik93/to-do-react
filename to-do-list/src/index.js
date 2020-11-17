import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';

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
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={ todoData } />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));