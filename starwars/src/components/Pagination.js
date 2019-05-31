import React from 'react';
import './Pagination.css';
const Pagination = props =>{
    return (
        <ul className="pagination">
           <li onClick={props.previousClicked} style={props.previous}> Previous</li>
           <li onClick= {props.nextClicked} style={props.next}> Next </li>
        </ul>
    )
}

export default Pagination;