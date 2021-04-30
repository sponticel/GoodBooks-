import React from 'react'
import {Link} from 'react-router-dom'

// need help getting on book in here and user name and img

export default function Reviews(props) {
  const { reviews} = props;
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.map(review => (
        <React.Fragment key={review.id}>
          <p>
            {review.user_id}
            {review.book_id}
            {review.rating}
            {review.content}
          </p>
            <Link to={`/reviews/${review.id}/edit`}><button>edit</button></Link>
            <button>delete</button>
        </React.Fragment>
      ))}
      <button>Add Review</button>
    </div>
  )
}