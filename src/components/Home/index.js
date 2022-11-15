import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'
import CarouselCard from '../CarouselCard'
import AllRestaurantsSection from '../AllRestaurantsSection'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <CarouselCard />
        <AllRestaurantsSection />
      </div>
      <Footer />
    </>
  )
}

export default Home
