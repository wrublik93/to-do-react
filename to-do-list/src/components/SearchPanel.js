import React from 'react';

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

export default SearchPanel;