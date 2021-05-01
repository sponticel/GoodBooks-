import React from 'react'
import { Link } from 'react-router-dom'
import './Books.css'

export default function Books(props) {
  const { books } = props;
  return (
    <div className='book-card'>
      {/* <h3>Books</h3> */}
      {books.map(book => (
        <Link to={`/books/${book.id}`}>
          <div
            
            key={book.id}
          >
          <div className="middle">
              <div className='book-cover'><img src={book.img_url} /></div>
              <h3 className="middle-title">{book.title}</h3>
              <div className="middle-author">By: {book.author}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}