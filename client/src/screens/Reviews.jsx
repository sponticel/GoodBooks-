import React from 'react'
import {Link} from 'react-router-dom'

// need help getting on book in here and user name and img

export default function Reviews(props) {
  const { reviews, book_id, handleDelete} = props;
  return (
    <div>
      <h3>Reviews</h3>
      {reviews?.map(review => (
        <React.Fragment key={review.id}>
          <p>
            {review.user_id}
            {review.book_id}
            {review.rating}
            {review.content}
          </p>
            <Link to={`/reviews/${review.id}/edit`}><button>edit</button></Link>
          <button onClick={() => {
            handleDelete(review.id)
            }}>delete</button>
        </React.Fragment>
      ))}
      <Link to={`/books/${book_id}/reviews/new`}><button>Add Review</button></Link>
    </div>
  )
}