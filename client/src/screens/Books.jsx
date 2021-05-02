import React from 'react'
import { Link } from 'react-router-dom'
import './Books.css'

export default function Books(props) {
  const { books } = props;
  return (
    <>
    <h3>PICK A BOOK TO GET MORE DETAILS</h3>
    <div className='book-card'>
      
      {books.map(book => (
        <Link to={`/books/${book.id}`}>
          <div
            key={book.id}
          >
          <div className="middle">
              <div className='book-cover'><img src={book.img_url} /></div>
              <h2 className="middle-title">{book.title}</h2>
              <h5>{book.author}</h5>
          
            </div>
          </div>
        </Link>
      ))}
      </div>
    </>
  )
}