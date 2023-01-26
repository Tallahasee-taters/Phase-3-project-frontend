import React from 'react';
import { useState } from 'react';

//something random to test

function NewCharacterForm(){
    const [newCharacter, setNewCharacter] = useState(initialFormValues)

    const initialFormValues ={
        name: '',
        description: ''
    }

    const handleChange = event => {
        const {name, value} = event.target
        setFormData({...formData, [name]:value})
    }

    const handleSubmit=event => {
        event.preventDefault()
        const newCharacter ={
            name: formData.name,
            description: formData.description
        }
    

    // fetch("http://localhost:3000/reviews", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(newCharacter)
    // })
    //     .then(res => res.json())
    //     .then(data => setNewCharacter)
}
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name ="name" onChange={handleChange} value = {formData.name} placeholder="Name"/>
                <input type="text" name ="description" value = {formData.description} placeholder="Description"/>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default Form;
