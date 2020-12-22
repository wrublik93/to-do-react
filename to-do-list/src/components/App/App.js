import React, { Component } from 'react';

import './App.css';

import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import ItemAddForm from '../ItemAddForm';

export default class App extends Component {

  maxId = 1;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Read Document'),
      this.createTodoItem('Read book'),
    ],
    textSearch: '',
    filter: 'all', // active, all, done
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    }
  }

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

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    const beforeIdx = arr.slice(0, idx);
    const afterIdx = arr.slice(idx + 1);

    const newArray = [
      ...beforeIdx,
      newItem,
      ...afterIdx,
    ];

    return newArray;
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
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

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important'),
      }
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done'),
      }
    });
  };

  onSearchChange = (textSearch) => {
    this.setState({ textSearch });
  }

  searchText(items, text) {
    if (text.length === 0) {
      return items;
    };
    return items.filter((item) => {
      return item.label
                .toLowerCase()
                .indexOf(text.toLowerCase()) > -1;
    })
  };

  filterItems(items, filter) {
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    }
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { todoData, textSearch, filter } = this.state;
    const visibleItems = this.filterItems(this.searchText(todoData, textSearch), filter);
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={ this.onSearchChange }/>
          <ItemStatusFilter filter={ filter } onFilterChange={this.onFilterChange}/>
        </div>
        <TodoList
          todos={ visibleItems }
          onDeleted={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onItemAdded={ this.addItem }/>
      </div>
    )
  }
}
