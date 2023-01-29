import React, {useState, useEffect} from 'react';
// import { NavLink } from 'react-router-dom';
import Review from './Review';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link, useParams, useLocation, Redirect} from 'react-router-dom';
import Character from './Character';

function Location({id, inhabitants, terrain, name, reviews, img_url, characters}){
    const {locationId} = useParams()
    const locationObj = useLocation()
    const [location, setLocation] = useState(null)
    
   




    const handleClick = () => {
         <Redirect to={`/locations/${id}`} />
    }
   
    // useEffect(() => {
    //     if (!id) {
    //         fetch(`http://localhost:9292/locations/${locationId}`)
    //         .then(resp => {
    //             if(resp.ok){
    //                 resp.json()
    //                 .then(setLocation)  
    //             } else {
    //                 resp.json()
    //                 .then(msg => alert(msg))
    //             }
    //         })
    //         .then(setLocation)
    //     }
    //   }, [locationId, id])
// debugger
    //   const finalLocation = location ? location : {id, inhabitants, terrain, name, reviews, img_url, average_rating}
    //   if (!finalLocation) return <div>loading...</div>
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
      //        <>{locationObj.pathname === "/home-page" ? <Card className='locationCard'
      //     // href= {`/locations/${id}`}
      //     header={<Link to = {`/locations/${id}`}>{finalLocation.name}</Link>}
      //     meta={finalLocation.inhabitants}
      //     description={finalLocation.terrain}
      //   /> : <Card className='locationCard'
      //   // href= {`/locations/${id}`}
      //   header={name}
      //   meta={finalLocation.inhabitants}
      //   description={finalLocation.terrain}
      //     />}
      //     </>
    );
}

export default Location;

