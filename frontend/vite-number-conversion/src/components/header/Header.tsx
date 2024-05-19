import './Header.css';
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <div className="header-container">

                <div className="header-logo">
                    <img src='../src/assets/flower-icon.png' alt="logo"/>
                    <Link to="/"><h2>ТатарМилләте</h2></Link>
                </div>

            <div className="header-nav">
                <Link to="/profile"><p>Профиль</p></Link>
            </div>
        </div>
    );
};

export default Header;
