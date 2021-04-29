import { useState, useEffect } from 'react';


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
      setFoods(reviewData);
    }
    fetchReviews()
  }, [])
    
  
  return (
    <div>
      
    </div>
  )
}
