import { useState, useEffect } from 'react'
import { getOneBook } from '../services/books'
import { useParams } from 'react-router-dom'

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
  
  const{title, author, genre, release_date, img_url, reviews}  = bookData
  // const { rating, content } = review
  
  return (
    <div>
      test
    </div>
  )
}
