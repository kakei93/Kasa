import '../styles/Footer.css';
import Logo from '../assets/logoFooter.png';

const Footer = () => {
    return (
        <div className='footer'>
            <footer>
                <img src={Logo} alt="Kasa, location d'appartements"></img>
                <p className='copyright'>© 2020 Kasa. All rights reserved</p>
            </footer>
        </div>
    );
};

export default Footer;