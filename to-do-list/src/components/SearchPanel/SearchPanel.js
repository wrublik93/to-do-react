import React from 'react';

import './SearchPanel.css';

const SearchPanel = () => {
    const searchPlaceholder = 'Type here for search';
    return (
        <input
          type="text"
          className="form-control search-input"
          placeholder = { searchPlaceholder }
        />
    )
};

export default SearchPanel;
