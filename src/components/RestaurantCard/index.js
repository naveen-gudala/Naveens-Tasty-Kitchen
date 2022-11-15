import {Link} from 'react-router-dom'
import {ImStarFull} from 'react-icons/im'

import './index.css'

const RestaurantCard = props => {
  const {restaurantsDetails} = props

  const {imageUrl, name, cuisine, userRating, id} = restaurantsDetails
  const {rating, totalReviews} = userRating

  return (
    <Link to={`/restaurant/${id}`} className="restaurant-link">
      <li className="restaurant-list">
        <img src={imageUrl} alt="restaurant" className="restaurant-img" />
        <div className="restaurant-description">
          <h1 className="restaurant-name">{name}</h1>
          <p className="cuisine">{cuisine}</p>
          <div className="ratings-container">
            <ImStarFull className="star" />
            <p className="rating">{rating}</p>
            <h1 className="total-ratings"> ({totalReviews} ratings)</h1>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default RestaurantCard
