import {Link} from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const NotFound = () => (
  <div>
    <Header />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/sree7771/image/upload/v1658493198/erroring_1_xwmqcf.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-heading"> Page Not Found </h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found <br />
        Please go back to home page
      </p>
      <Link to="/" className="restaurant-link">
        <button type="button" className="home-page-button">
          Home Page
        </button>
      </Link>
    </div>
    <Footer />
  </div>
)

export default NotFound
