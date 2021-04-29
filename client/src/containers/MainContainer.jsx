import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Books from '../screens/Books';

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
      <Route path='/books'>
        <Books
          books={Books}
        />
      </Route>
    </Switch>
  )
}
