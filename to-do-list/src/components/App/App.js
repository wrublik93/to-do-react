import React, { Component } from 'react';

import './App.css';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
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
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const beforeIdx = todoData.slice(0, idx);
      const afterIdx = todoData.slice(idx + 1);

      const newArray = [
        ...beforeIdx,
        ...afterIdx,
      ];

      return {
        todoData: newArray,
      }
    });
  };

  addItem = (text) => {
    // generate id
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem,
      ];

      return {
        todoData: newArray,
      }
    })
  };

  on

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={ 1 } done={ 2 } />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList
          todos={ this.state.todoData }
          onDeleted={ this.deleteItem }
        />
        <ItemAddForm onItemAdded={ this.addItem }/>
      </div>
    )
  }
}
