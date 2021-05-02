import { useState } from 'react';
// import Reviews from './Reviews'
import { useParams } from 'react-router-dom'
import './ReviewCreate.css'


export default function ReviewCreate(props) {
  const [formData, setFormData] = useState({
    rating: '',
    content: ''
  })
  const { rating, content } = formData;
  const { id } = useParams();
  const { handleCreate } = props
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <>
    <form onSubmit={(e) => {
      e.preventDefault();
        handleCreate({ ...formData,book_id:id });
    }}>
        <h3> Add your review </h3>
      <div className='review-container'>
      <label>Rating:
        <select name='rating' value={rating} onChange={handleChange}>
            <option defaultValue>--Select--</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
          </label>
          <br/>
        <textarea
          type='text'
          name='content'
          placeholder="Did you enjoy the book?"  
          value={content}
              onChange={handleChange}
        />
      </div>   
      <button>Add Review</button>
    </form>
    </>
  )
}
