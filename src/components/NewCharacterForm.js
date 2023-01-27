import React from 'react';
import { useState } from 'react';

//something random to test

function NewCharacterForm(){
    
    const initialFormValues ={
        name: '',
        description: ''
    }
    const [newCharacter, setNewCharacter] = useState(initialFormValues)

    const handleChange = event => {
        const {name, value} = event.target
        setNewCharacter({...newCharacter, [name]:value})
    }

    const handleSubmit=event => {
        event.preventDefault()
        // const newCharacter ={
        //     name: formData.name,
        //     description: formData.description
        // }
    

    fetch("http://localhost:9292/characters", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCharacter)
    })
        .then(res => {
            if (res.status === 201){
            res.json()
            .then(char =>{
                console.log(char)
                setNewCharacter(initialFormValues)
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
                <input type="text" name ="name" onChange={handleChange} value = {newCharacter.name} placeholder="Name"/>
                <input type="text" name ="description" onChange={handleChange} value = {newCharacter.description} placeholder="Description"/>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
}

export default NewCharacterForm;
