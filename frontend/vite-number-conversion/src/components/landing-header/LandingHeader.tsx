import './LandingHeader.css';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="landingheader-container">
            <div className="header-logo">
                <img src='../src/assets/flower-icon.png' alt="logo" />
                <h2>ТатарМилләте</h2>
            </div>
            <div className="header-nav">
                <div className="header-nav-title">
                    <Link to="/course"><p>Express course</p></Link>
                </div>
                <div className="header-nav-title">
                    <Link to="/about-project"><p>About project</p></Link>
                </div>
                <div className="header-nav-title">
                    <Link to="/contacts"><p>Contacts</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
