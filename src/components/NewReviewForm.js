import React from 'react';
import { useState } from 'react';



function NewReviewForm({reviews, setReviews, review, locationPath, characters}){
    const [newReview, setNewReview] = useState({
        rating: 0,
        text: '',
        location_id: locationPath,
        character: characters[0].name
    })

    const handleChange = (e) => {
        // const {name, value} = event.target
        setNewReview({...newReview, [e.target.name]:e.target.value})
    }
    
    const handlePost = e => {
        setNewReview({...newReview, character:e.target.value})
    }
    const handleSubmit=event => {
      event.preventDefault();

      fetch("http://localhost:9292/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      }).then((res) => {
        if (res.status === 201) {
          res.json()
          .then((review) => {
            setReviews((current) => [...current, review]);
          });
        } else {
          res.json()
          .then((error) => {
            alert(error);
          });
        }
      });
    }
    const mappedCharacters = characters.map(character => <option key={character.id} value={character.name}>{character.name}</option>)

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="rating"
            onChange={handleChange}
            value={newReview.rating}
            placeholder="Rating"
          />
          <input
            type="text"
            name="text"
            onChange={handleChange}
            value={newReview.text}
            placeholder="Text"
          />
            <select onChange={handlePost}>
              {mappedCharacters}
            </select>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
}

export default NewReviewForm;