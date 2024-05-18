// import React from 'react';
import Header from '../../components/header/Header';
import './MaterialPage.css';
import { Link } from "react-router-dom";

const MaterialPage: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <div className="barsik">
                <img src="./src/assets/barsik.png" alt="Barsik" />
            </div>
            <div className="material-container">
                <div className="content">
                    <p>ну короче да тыры пыры учите китайский</p>
                </div>
                <div className="button-next-div">
                    <Link to="/">
                        <button type="button" className="button-next">Done</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MaterialPage;
