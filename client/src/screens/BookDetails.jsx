import { useState, useEffect } from 'react'
import { getOneBook } from '../services/books'
import { useParams } from 'react-router-dom'
import Reviews from './Reviews'
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
  
  return (
    <div>
      <h3>Book Details</h3>
      <p>{title}</p>
      <p>{author}</p>
      <p>{genre}</p>
      <p>{release_date}</p>
      <p>{synopsis}</p>
      <img src={img_url} />
      <Reviews reviews={reviews} book_id={params.id}/>
    </div>
  )
}
