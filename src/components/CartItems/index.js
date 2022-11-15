import {Component} from 'react'
import {Link} from 'react-router-dom'

import CartItemsCard from '../CartItemsCard'
import CartTotal from '../CartTotal'

import './index.css'
import RestaurantContext from '../../RestaurantContext'

class CartItems extends Component {
  state = {
    isOrderPlaced: false,
  }

  orderPlaced = () => {
    this.setState(prevState => ({isOrderPlaced: !prevState.isOrderPlaced}))
  }

  render() {
    const {isOrderPlaced} = this.state
    return (
      <RestaurantContext.Consumer>
        {value => {
          const {cartList, removeAllCartItems} = value
          const onClickRemoveAllBtn = () => {
            removeAllCartItems()
          }
          return isOrderPlaced ? (
            <div className="payment-container">
              <img
                src="https://res.cloudinary.com/sree7771/image/upload/v1658661871/Vector_4_bzptf7.png"
                alt=""
                className="payment-img"
              />
              <h1 className="payment-heading"> Payment Successful</h1>
              <p className="payment-description">
                Thank you for ordering <br />
                Your payment is successfully completed.
              </p>
              <Link to="/" className="payment-link">
                <button type="button" className="go-to-home-page-button">
                  {' '}
                  Go To Home Page
                </button>
              </Link>
            </div>
          ) : (
            <div className="cart-content-container">
              <div className="cart-card-details">
                <div className="cart-heading-remove-all-btn">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-btn"
                    onClick={onClickRemoveAllBtn}
                  >
                    Remove All
                  </button>
                </div>
                <div className="desktop-cart-header">
                  <h1 className="cart-header-item">Item</h1>

                  <h1 className="cart-header-quantity">Quantity</h1>
                  <h1 className="cart-header-price">price</h1>
                  <h1 className="cart-header-remove">remove</h1>
                </div>
                <ul className="cart-list">
                  {cartList.map(eachItem => (
                    <CartItemsCard
                      key={eachItem.id}
                      cartItem={eachItem}
                      value={value}
                    />
                  ))}
                </ul>
              </div>
              <CartTotal orderPlaced={this.orderPlaced} />
            </div>
          )
        }}
      </RestaurantContext.Consumer>
    )
  }
}

export default CartItems
