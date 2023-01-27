import React from 'react';
import { useState } from 'react';

function NewReviewForm(){
    
    const initialFormValues ={
        name: '',
        description: ''
    }
    const [newReview, setNewReview] = useState(initialFormValues)

    const handleChange = event => {
        const {name, value} = event.target
        setNewReview({...newReview, [name]:value})
    }

    const handleSubmit=event => {
        event.preventDefault()

    
    fetch("http://localhost:9292/reviews", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newReview)
    })
        .then(res => {
            if (res.status === 201){
            res.json()
            .then(rev =>{
                console.log(rev)
                setNewReview(initialFormValues)
            })
        }else {
            res.json()
            .then(error =>{
                alert(error)
            })
        }

        })
       
}
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" name ="rating" onChange={handleChange} value = {newReview.name} placeholder="Rating"/>
                <input type="text" name ="text" onChange={handleChange} value = {newReview.description} placeholder="Text"/>
                
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default NewReviewForm;