import React from 'react';
import './Pagination.css';
const Pagination = props =>{
    return (
        <div className="pagination">
           <li onClick={props.previousClicked}> Previous</li>
           <li onClick= {props.nextClicked}> Next </li>
        </div>
    )
}

export default Pagination;