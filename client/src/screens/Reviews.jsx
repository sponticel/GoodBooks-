import React from 'react'

export default function Reviews(props) {
  const { reviews } = props;
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(book => (
        <p key={book.id}>{book.name}</p>
      ))}
    </div>
  )
}