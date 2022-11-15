import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {ImStarFull} from 'react-icons/im'
import {FaRupeeSign} from 'react-icons/fa'
import Header from '../Header'
import FoodItemCard from '../FoodItemCard'
import Footer from '../Footer'
import './index.css'

const url = 'https://apis.ccbp.in/restaurants-list/'

class RestaurantDetails extends Component {
  state = {
    isLoading: true,
    restaurantDetailsList: {},
    foodItemsDetailsList: [],
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  getRestaurantDetails = async () => {
    const {match} = this.props
    const {params} = match

    const {id} = params
    console.log(params)

    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(`${url}${id}`, options)
    console.log(response.ok)

    const data = await response.json()
    console.log(data)

    const updateData = {
      costForTwo: data.cost_for_two,
      cuisine: data.cuisine,
      id: data.id,
      itemsCount: data.items_count,
      imageUrl: data.image_url,
      location: data.location,
      name: data.name,
      opensAt: data.opens_at,
      rating: data.rating,
      reviewsCount: data.reviews_count,
    }

    const foodUpdateData = data.food_items.map(eachItem => ({
      cost: eachItem.cost,
      foodType: eachItem.food_type,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      name: eachItem.name,
      rating: eachItem.rating,
    }))

    this.setState({
      isLoading: false,
      restaurantDetailsList: updateData,
      foodItemsDetailsList: foodUpdateData,
    })
  }

  renderRestaurantDetailsSuccessView = () => {
    const {restaurantDetailsList, foodItemsDetailsList} = this.state

    const {
      imageUrl,
      name,
      cuisine,
      location,
      rating,
      reviewsCount,
      costForTwo,
    } = restaurantDetailsList

    return (
      <div>
        <div className="image-container">
          <img
            src={imageUrl}
            alt="restaurant"
            className="restaurant-item-img"
          />
          <div className="rest-description">
            <h1 className="restaurant-details-name">{name}</h1>
            <p className="rest-details-cuisine">{cuisine}</p>
            <p className="rest-location">{location}</p>
            <div className="rest-rate-cost-container">
              <div>
                <div className="rest-star-rating-container">
                  <ImStarFull className="rest-star" />
                  <p className="rest-rating">{rating}</p>
                </div>
                <p className="rest-ratings">{reviewsCount}+ ratings</p>
              </div>{' '}
              <hr />
              <div>
                <div className="cost-price-rupee-container">
                  <FaRupeeSign className="rest-fa-rupee" />
                  <p className="rest-cost">{costForTwo}</p>
                </div>
                <p className="rest-cost-two">Cost for two</p>
              </div>
            </div>
          </div>
        </div>

        <ul className="food-item-card-container">
          {foodItemsDetailsList.map(eachFoodItem => (
            <FoodItemCard
              key={eachFoodItem.id}
              foodItemDetails={eachFoodItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container loader-position">
      <Loader type="TailSpin" color="#f7931e" height={80} width={120} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div>
        <Header />
        <div>
          {isLoading
            ? this.renderLoadingView()
            : this.renderRestaurantDetailsSuccessView()}
        </div>
        <Footer />
      </div>
    )
  }
}

export default RestaurantDetails
