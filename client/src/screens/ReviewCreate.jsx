import { useState } from 'react';
// import Reviews from './Reviews'

export default function ReviewCreate(props) {
  const [formData, setFormData] = useState({
    rating: '',
    content: ''
  })
  const { rating, content } = formData;

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
      handleCreate(formData);
    }}>
      <h3> Add your review </h3>
      <label>Rating:
        <select name='rating' value={rating} onChange={handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
      </label>
      <label>Review:
        <textarea
          type='text'
          name='content'
          placeholder="Did you enjoy the book?"  
          value={content}
        onChange={handleChange}
        />
      </label>
      {/* <label>Rating:
      <StarRatings
            rating={rating}
            starRatedColor="yellow"
            changeRating={handleRating}
            numberOfStars={5}
            name='rating'
      />
      </label> */}
        
      <button>Add Review</button>
    </form>
    </>
  )
}
