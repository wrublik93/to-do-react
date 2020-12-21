import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {
  state = {
    label: '',
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: '',
    });
  }

  render() {
    return (
      <form
        className="item-add-form d-flex"
        onSubmit={this.onSubmit}
      >
        <input
          value={this.state.label}
          className="form-control"
          type="text"
          onChange={this.onLabelChange}
          placeholder="I need ..." />
        <button
          className="btn btn-outline-secondary item-add-button">
          Add Item
        </button>
      </form>
    )
  }
}
