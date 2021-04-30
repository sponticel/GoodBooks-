import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Books from '../screens/Books';
import ReviewCreate from '../screens/ReviewCreate'
import ReviewEdit from '../screens/ReviewEdit'
import BookDetails from '../screens/BookDetails';
import { getAllBooks } from '../services/books'
import { deleteReview, getAllReviews, postReview, putReview } from '../services/reviews'

export default function MainContainer() {
  const [books, setBooks] = useState([])
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const bookData = await getAllBooks();
      setBooks(bookData);
    }
    fetchBooks()
  }, [])

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewData = await getAllReviews();
      setReviews(reviewData);
    }
    fetchReviews()
  }, [])
    
  
  return (
    <Switch>
      <Route path='/books/:id/reviews/new'>
        <ReviewCreate/>
      </Route>
      
      <Route path='/books/:id'>
        <BookDetails/>
      </Route>

      <Route path='/'>
        <Books
          books={books}
        />
      </Route>

      {/* <Route path='/reviews'>
        <Reviews
          reviews={reviews}
        />
      </Route> */}

      
    </Switch>
  )
}
