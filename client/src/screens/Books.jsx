import React from 'react'
import {Link} from 'react-router-dom'
export default function Books(props) {
  const { books } = props;
  return (
    <div>
      <h3>Books</h3>
      {books.map(book => (
        <Link to={`/books/${book.id}`}><p key={book.id}>
          {book.img_url}
          {book.title}
          {book.author}</p></Link>
      ))}
    </div>
  )
}