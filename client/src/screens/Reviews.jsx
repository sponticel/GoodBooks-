import React from 'react'
import {Link} from 'react-router-dom'

export default function Reviews(props) {
  const { reviews, book_id, handleDelete } = props;
  
  return (
    <div>
      <Link to={`/books/${book_id}/reviews/new`}><button>Add Review</button></Link>
      <h3>Reviews</h3>
      {reviews?.map(review => (
        <React.Fragment key={review.id}>
          <p className='review-container'>
            <b>{review.user.username}'s Rating: {review.rating}/5</b>
            <br/>
            {review.content}
          </p>
          <Link to={`/reviews/${review.id}/edit`}><button>edit</button></Link>
          <button onClick={() => { handleDelete(review.id) }}>
            Delete
          </button>
        </React.Fragment>
      ))}
    </div>
  )
}