import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'

import './index.css'
import RestaurantContext from '../../RestaurantContext'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const cartCount = () => (
    <RestaurantContext.Consumer>
      {value => {
        const {cartList} = value
        const cartItemsCount = cartList.length
        console.log(cartList)

        return (
          <>
            {cartItemsCount > 0 && (
              <span className="cart-count-badge">{cartList.length}</span>
            )}
          </>
        )
      }}
    </RestaurantContext.Consumer>
  )

  const getColor = activeTab => {
    const {history} = props

    if (history.location.pathname === activeTab) {
      return '#f7931e'
    }
    return '#334155'
  }

  return (
    <nav className="header-container">
      <div className="nav-content">
        <div className="img-container">
          <Link to="/" className="restaurant-link">
            <div className="header-taste-heading">
              <img
                src="https://res.cloudinary.com/sree7771/image/upload/v1658312644/Frame_274_tph3zo.png"
                alt="website logo"
                className="header-hat-heading"
              />
              <h1 className="tasty-heading"> Tasty Kitchens</h1>
            </div>
          </Link>
        </div>
        <ul className="home-header-desktop-container">
          <Link to="/" className="restaurant-link">
            <li className="home-heading" style={{color: getColor('/')}}>
              {' '}
              Home{' '}
            </li>
          </Link>
          <Link to="/cart" className="restaurant-link">
            <li className="cart-heading" style={{color: getColor('/cart')}}>
              Cart <span className="count-heading">{cartCount()}</span>{' '}
            </li>
          </Link>
          <button
            type="button"
            onClick={onClickLogout}
            className="logout-button"
          >
            Logout
          </button>
        </ul>
        <div className="header-mobile-container">
          <Popup
            trigger={
              <button type="button" className="hamburger-button">
                <GiHamburgerMenu size={25} className="hamburger" />
              </button>
            }
          >
            {close => (
              <div className="modal-container">
                <div className="nav-link-container">
                  <Link to="/" className="restaurant-link">
                    <p className="home-heading" style={{color: getColor('/')}}>
                      Home
                    </p>
                  </Link>
                  <Link to="/cart" className="restaurant-link">
                    <p
                      className="home-heading"
                      style={{color: getColor('/cart')}}
                    >
                      Cart
                      <span className="count-heading">{cartCount()}</span>
                    </p>
                  </Link>
                  <button
                    type="button"
                    className="logout-pop-button"
                    onClick={onClickLogout}
                  >
                    Logout
                  </button>
                </div>
                <button type="button" className="close-button">
                  <AiOutlineCloseCircle size={18} onClick={() => close()} />
                </button>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
