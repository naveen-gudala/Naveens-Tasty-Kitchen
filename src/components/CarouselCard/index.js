import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

class CarouselCard extends Component {
  state = {allHomeCarouselImagesList: [], isLoading: true}

  componentDidMount() {
    this.getHomeCarouselImages()
  }

  getHomeCarouselImages = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/restaurants-list/offers'

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    console.log(response)

    const data = await response.json()

    console.log(data)

    const updateData = data.offers.map(eachImage => ({
      id: eachImage.id,
      imageUrl: eachImage.image_url,
    }))

    this.setState({
      allHomeCarouselImagesList: updateData,
      isLoading: false,
    })
  }

  renderHomeCarouselSuccessView = () => {
    const {allHomeCarouselImagesList} = this.state

    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      infinite: true,
    }

    return (
      <ul className="carousel-container">
        <Slider {...settings} className="slider">
          {allHomeCarouselImagesList.map(eachCarousel => (
            <li key={eachCarousel.id}>
              <img
                src={eachCarousel.imageUrl}
                alt="offer"
                className="carousel-img"
              />
            </li>
          ))}
        </Slider>
      </ul>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container loader-position">
      <Loader type="TailSpin" color="#f7931e" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div>
        {isLoading
          ? this.renderLoadingView()
          : this.renderHomeCarouselSuccessView()}
      </div>
    )
  }
}

export default CarouselCard
