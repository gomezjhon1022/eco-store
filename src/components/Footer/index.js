import './Footer.scss';
import instagram from '../../assets/img/instagram-logo.png';
import facebook from '../../assets/img/facebook-logo.png';
import twitter from '../../assets/img/twitter-logo.png';

function Footer () {
  return (
    <div className="footer">
      <h3>Eco-store</h3>
      <p>Careers</p>
      <p>Term and conditions</p>
      <p>Eco-store inc</p>
      <div className='social-media'>
        <img src={instagram} alt=''/>
        <img src={facebook} alt=''/>
        <img src={twitter} alt=''/>
      </div>
    </div>
  )
}

export { Footer }