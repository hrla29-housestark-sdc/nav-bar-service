import React from 'react';
import style from './searchResults.css';

const SearchResults = (props) => (
  <li>
    <span className={style.result} onMouseEnter={() => props.handleMouseOver('resultHoverIdx', props.index)}>
      {props.result.name}
    </span>
  </li>
)

export default SearchResults;