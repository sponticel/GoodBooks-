import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Books from '../screens/Books';
import ReviewCreate from '../screens/ReviewCreate'
import ReviewEdit from '../screens/ReviewEdit'
import BookDetails from '../screens/BookDetails';
import { getAllBooks } from '../services/books'
import { getAllReviews, postReview, putReview } from '../services/reviews'

export default function MainContainer() {
  const [books, setBooks] = useState([])
  const [reviews, setReviews] = useState([])
  const history = useHistory();
  
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
  
  const handleCreate = async (formData) => {
    const reviewData = await postReview(formData);
    setReviews(prevState => [...prevState, reviewData])
    history.push('books/:id')
  }

  const handleEdit = async (id, formData) => {
    const reviewData = await putReview(id, formData);
    setReviews(prevState => prevState.map(review => {
    return review.id === Number(id) ? reviewData : review
    }))
    history.push(`/books/${id}`)
  }
  
  return (
    <Switch>
      <Route path='/reviews/:id/edit'>
        <ReviewEdit
          reviews={reviews}
          handleEdit={handleEdit}
        />
      </Route>
      <Route path='/books/:id/reviews/new'>
        <ReviewCreate
          handleCreate={handleCreate}
        />
      </Route>
      <Route path='/books/:id'>
        <BookDetails/>
      </Route>
      <Route path='/'>
        <Books
          books={books}
        />
      </Route>
    </Switch>
  )
}
