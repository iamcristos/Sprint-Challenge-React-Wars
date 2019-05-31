import React from 'react';
import './Pagination.css';
const Pagination = props =>{
    return (
        <div className="pagination">
           <li onClick={props.previousClicked} style={props.previous}> Previous</li>
           <li onClick= {props.nextClicked}> next </li>
        </div>
    )
}

export default Pagination;