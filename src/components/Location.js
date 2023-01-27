import React, {useState, useEffect} from 'react';
// import { NavLink } from 'react-router-dom';
import Review from './Review';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link, useParams, useLocation } from 'react-router-dom';

function Location({id, inhabitants, terrain, name, reviews, img_url, average_rating}){
    const {locationId} = useParams()
    const locationObj = useLocation()
    const [location, setLocation] = useState(null)

    const mappedReviews = reviews?.map(review => <Review key={review.id} {...review}/>)
   
    useEffect(() => {
        if (!id) {
            fetch(`http://localhost:9292/locations/${locationId}`)
            .then(resp => {
                if(resp.ok){
                    resp.json()
                    .then(setLocation)  
                } else {
                    resp.json()
                    .then(msg => alert(msg))
                }
            })
            .then(setLocation)
        }
      }, [locationId, id])
// debugger
      const finalLocation = location ? location : {id, inhabitants, terrain, name, reviews, img_url, average_rating}
      if (!finalLocation) return <div>loading...</div>
    return (
       <>{locationObj.pathname === "/home-page" ? <Card className='locationCard'
    // href= {`/locations/${id}`}
    header={<Link to = {`/locations/${id}`}>{finalLocation.name}</Link>}
    meta={finalLocation.inhabitants}
    description={finalLocation.terrain}
  /> : <Card className='locationCard'
  // href= {`/locations/${id}`}
  header={name}
  meta={finalLocation.inhabitants}
  description={finalLocation.terrain}
    />} </>
    );
}

export default Location;

