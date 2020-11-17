import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    const items = ['Learn React Fast', 'Drink Hot Coffee'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    )
};

const AppHeader = () => {
    return (
        <h1>My Todo List</h1>
    )
};

const SearchPanel = () => {
    const searchPlaceholder = 'Type here for search';
    const searchStyle = {
        fontSize: '25px'
    }
    return (
        <input
            style = { searchStyle }
            placeholder = { searchPlaceholder } />
    )
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));