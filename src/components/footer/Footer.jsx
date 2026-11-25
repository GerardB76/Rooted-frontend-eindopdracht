import logo from '../../assets/rooted-logo.png';
import './Footer.css';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="content-container footer-content">
                <a href="/" aria-label="Rooted — naar de homepage">
                    <img className="footer-logo" src={logo} alt="Rooted — systemisch werken" />
                </a>
                <p>Met aandacht voor het geheel.</p>
            </div>
        </footer>
    );
}

export default Footer;
