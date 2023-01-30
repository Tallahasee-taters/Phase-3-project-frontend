import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'semantic-ui-react';

function Location({id, inhabitants, terrain, name, setLocationPath}){
    const navigate = useNavigate()
    const handleClick = () => {
       setLocationPath(id) 
       navigate(`/locations/${id}`)
    }
   
    return (
      <div onClick={() => handleClick()}>
        <Card.Group>
          <Card>
            <Card.Content>
              <Card.Header  >{name}</Card.Header>
              <Card.Description>{terrain}</Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
}

export default Location;

