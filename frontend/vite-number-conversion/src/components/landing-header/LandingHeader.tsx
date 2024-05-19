import './LandingHeader.css';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="landingheader-container">
            <Link to="/">
            <div className="header-logo">

                    <img src='../src/assets/flower-icon.png' alt="logo"/>
                    <h2>ТатарМилләте</h2>

            </div>
        </Link>
            <div className="header-nav">
                <Link to="/course">
            <div className="header-nav-title">
                    <p>Экспресс курс</p>
                </div>
                </Link>
                <Link to="/about-project">
                <div className="header-nav-title">
                    <p>О проекте</p>
                </div>
                </Link>
                <Link to="/contacts">
                <div className="header-nav-title">
                    <p>Контакты</p>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
