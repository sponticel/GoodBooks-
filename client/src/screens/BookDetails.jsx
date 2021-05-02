import { useState, useEffect } from 'react'
import { getOneBook } from '../services/books'
import { useParams } from 'react-router-dom'
import { deleteReview } from '../services/reviews'
import Reviews from './Reviews'
import './BookDetails.css'

export default function BookDetails() {

  const params = useParams()
  const [bookData, setBookData] = useState({})
  useEffect(() => {
    const fetchBook = async () => {
      const bookData = await getOneBook(params.id)
      setBookData(bookData)
    }
    fetchBook()
  }, [])
  
  const{title, author, genre, release_date, img_url,synopsis, reviews}  = bookData
  
  const handleDelete = async (id) => {
    await deleteReview(id)
    setBookData(prevState => ({
      ...prevState,
      reviews: prevState.reviews.filter(review => review.id !== id)
    }))
  }

  return (
    <div className='detail-container'>
      <div className= 'book-detail'>
          <h3 className='title'>{title}</h3>
          <p>By: {author}</p>
          <p>Genre: {genre}</p>
          <p>Released on: {release_date}</p>
          {synopsis}
      <div className= 'book-cover'><img src={img_url} /></div>
      </div>
      <div className='reviews-container'>
        <Reviews
          reviews={reviews}
          book_id={params.id}
          handleDelete={handleDelete}
        />
        </div>
  </div>
  )
}
