import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-bg-container">
      <div className="footer-img-container">
        <img
          src="https://res.cloudinary.com/sree7771/image/upload/v1658551419/Vector_1_agnf8v.png"
          alt="website-footer-logo"
          className="footer-img"
        />
        <h1 className="footer-heading"> Tasty Kitchens</h1>
      </div>
      <p className="paragraph">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="sns-container">
        <FaPinterestSquare className="sns-img" testid="pintrest-social-icon" />
        <FaInstagram className="sns-img" testid="instagram-social-icon" />
        <FaTwitter className="sns-img" testid="twitter-social-icon" />
        <FaFacebookSquare className="sns-img" testid="facebook-social-icon" />
      </div>
    </div>
  )
}
