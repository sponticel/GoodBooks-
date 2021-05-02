import React from 'react'
import {Link} from 'react-router-dom'
// import './Reviews.css'

// need help getting on book in here and user name 

export default function Reviews(props) {
  const { reviews, book_id, handleDelete} = props;
  return (
    <div>
      <Link to={`/books/${book_id}/reviews/new`}><button>Add Review</button></Link>
      <h3>Reviews</h3>
      {reviews?.map(review => (
        <React.Fragment key={review.id}>
          <p className='review-container'>
            {review.user_id} {review.book_id} Rating of {review.rating}/5 {review.content}
          </p>
            <Link to={`/reviews/${review.id}/edit`}><button>edit</button></Link>
          <button onClick={() => {
            handleDelete(review.id)
            }}>delete</button>
        </React.Fragment>
      ))}
      
    </div>
  )
}