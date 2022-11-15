import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'

import './index.css'
import RestaurantContext from '../../RestaurantContext'

const CartItemsCard = props => (
  <RestaurantContext.Consumer>
    {value => {
      const {
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
      } = value
      const {cartItem} = props
      const {id, name, quantity, cost, imageUrl} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }
      const onClickRemoveCartItem = () => {
        removeCartItem(id)
      }

      return (
        <>
          <li className="cart-item">
            <img className="cart-product-image" src={imageUrl} alt={name} />
            <div className="cart-items-details">
              <h1 className="cart-product-title">{name}</h1>
              <div className="cart-quantity-container">
                <button
                  type="button"
                  className="quantity-controller-button"
                  onClick={decreaseQuantity}
                >
                  <BsDashSquare color="#52606D" size={12} />
                </button>
                <p className="cart-quantity">{quantity}</p>
                <button
                  type="button"
                  className="quantity-controller-button"
                  onClick={increaseQuantity}
                >
                  <BsPlusSquare color="#52606D" size={12} />
                </button>
              </div>
              <div className="cart-price-remove-container">
                <p className="cart-total-price">
                  <span>
                    <FaRupeeSign size={12} />
                  </span>{' '}
                  {cost}/-
                </p>
              </div>
              <div className="button-container">
                <button
                  className="delete-button"
                  type="button"
                  onClick={onClickRemoveCartItem}
                >
                  <MdDelete color="#616E7C" size={20} />
                </button>
                <button
                  className="remove-button remove-btn-1"
                  type="button"
                  onClick={onClickRemoveCartItem}
                >
                  Remove
                </button>
              </div>
            </div>

            <button
              className="remove-button remove-btn-2"
              type="button"
              onClick={onClickRemoveCartItem}
            >
              Remove
            </button>
          </li>
        </>
      )
    }}
  </RestaurantContext.Consumer>
)

export default CartItemsCard
