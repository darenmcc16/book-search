import React from 'react';


function List(props) {
  return(
      <div className="book_list">
          {props.title}
          {props.author}
          {props.price}
          {props.subject}
      </div>
  )
}

export default List;