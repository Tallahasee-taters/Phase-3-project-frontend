import React from 'react';
import { useState } from 'react';
import NewReviewForm from './NewReviewForm';


function Review({character, review, id, setReviews, setLocations}) {
    const [editReview, setEditReview] = useState({
        text: ""
    })

    const handleChange = (e) => {
        setEditReview({ ...editReview, [e.target.name]: e.target.value });
      };

    const handleSubmit = (e) => {
        debugger
        e.preventDefault()
        // take data to submit
            fetch(`http://localhost:9292/reviews/${review.id}`, {
                method: "PATCH",
                header: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(editReview)
            })
            .then(resp => resp.json())
            .then(review => setReviews(current => {
                const finalEdit = current.findIndex(element => element.id === review.id)
                return [...current.slice(0, finalEdit), editReview.text, ...current.slice(finalEdit + 1)]
            }))
      };

      const handleDelete = () => {
        fetch(`http://localhost:9292/reviews/${review.id}`, {
            method: "DELETE",
      })
      .then(resp => resp.json())
      .then(review => setReviews(current => {
        const finalEdit = current.findIndex(element => element.id === review.id)
        return [...current.slice(0, finalEdit), ...current.slice(finalEdit + 1)]
      }))
      };

    return (
      <div>
        <div>
          {!editReview ? (
            <form onSubmit={handleSubmit}>
              <input type="text" name="text" value={editReview.text} onChange={handleChange}/>
              <button>submit</button>
            </form>
          ) : (
            <>
              {character.name}
              {review.text}
              {review.rating}
            </>
          )}
        </div>
        <button onClick={() => setEditReview((current) => !current)}>✏️</button>
        <button onClick={() => handleDelete()}>🗑</button>
        
      </div>
    );
}

export default Review;
