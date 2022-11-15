import {Component} from 'react'
import {Link} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import CartItems from '../CartItems'
import './index.css'
import RestaurantContext from '../../RestaurantContext'

class Cart extends Component {
  render() {
    return (
      <RestaurantContext.Consumer>
        {value => {
          const {cartList} = value

          const foodItemsListLength = cartList.length

          if (foodItemsListLength === 0) {
            return (
              <div className="cart-items-added-container">
                <Header />
                <div className="cart-img-container">
                  <div>
                    <img
                      src="https://res.cloudinary.com/sree7771/image/upload/v1658492287/cooking_1_dxzxcl.png"
                      alt="empty cart"
                      className="cart-img"
                    />
                  </div>
                  <h1 className="no-orders">No Order Yet! </h1>
                  <p className="cart-description">
                    {' '}
                    Your cart is empty. Add something from the menu.
                  </p>
                  <Link to="/">
                    <button type="button" className="order-now-button">
                      Order Now
                    </button>
                  </Link>
                </div>
                <Footer />
              </div>
            )
          }
          return (
            <div>
              <Header />
              <div className="cart-items-added-container">
                <CartItems foodItemsList={cartList} />
              </div>
              <Footer />
            </div>
          )
        }}
      </RestaurantContext.Consumer>
    )
  }
}

export default Cart
