import React from 'react'

export default function Books(props) {
  const { books } = props;
  return (
    <div>
      <h3>Books</h3>
      {books.map(book => (
        <p key={book.id}>
          {book.img_url}
          {book.title}
          {book.author}</p>
      ))}
    </div>
  )
}