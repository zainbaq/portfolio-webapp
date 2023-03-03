// Create your Footer component here

import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="footer-contact-info">
                <h1 className="footer-heading">Feel free to contact me!</h1>
                <p className="footer-contact-access">+1 818 852 9817</p>
            </div>
            <div>
                <h1>Social Links</h1>
                <div className="social-icons">
                    {/* <a href="https://www.educative.io/"><i><FaFacebook /></i></a> */}
                    {/* <a href="https://www.educative.io/"><i><FaInstagram /></i></a> */}
                    <a href="https://twitter.com/thelazyronin"><i><FaTwitter /></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;