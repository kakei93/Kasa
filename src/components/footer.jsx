import '../styles/Footer.css';
import LOGO from '../assets/logoFooter.png';

const Footer = () => {
    return (
        <div className='footer'>
            <footer>
                <img src={LOGO} alt="Kasa, location d'appartements"></img>
                <p className='copyright'>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
};

export default Footer;