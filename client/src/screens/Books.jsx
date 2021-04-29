import React from 'react'

export default function Books(props) {
  const { books } = props;
  return (
    <div>
      <h3>Books</h3>
      {books.map(book => (
        <p key={book.id}>{book.name}</p>
      ))}
    </div>
  )
}