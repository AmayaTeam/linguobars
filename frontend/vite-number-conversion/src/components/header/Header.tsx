import './Header.css';

const Header: React.FC = () => {
    return (
        <div className="header-container">
            <div className="header-logo">
                <img src='../src/assets/flower-icon.png' alt="logo" />
                <p>ТатарМилләте</p>
            </div>
            <div className="header-nav">
                <p>Profile</p>
            </div>
        </div>
    );
};

export default Header;
