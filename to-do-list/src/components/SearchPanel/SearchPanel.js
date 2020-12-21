import React, { Component } from 'react';

import './SearchPanel.css';

export default class SearchPanel extends Component {
  state = {
    textSearch: '',
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ textSearch: term });
    this.props.onSearchChange(term);
  }
  render() {
    const searchPlaceholder = 'Type here for search';
    return (
        <input
          type="text"
          className="form-control search-input"
          placeholder = { searchPlaceholder }
          value={ this.state.textSearch }
          onChange={this.onSearchChange}
        />
    )
  }
};
