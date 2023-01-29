import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Review from './Review';
import { Card, Image, Icon } from 'semantic-ui-react';
import Character from './Character';

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
            <Card.Content extra>
              <a>
                <Icon name="star" />
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    );
}

export default Location;

