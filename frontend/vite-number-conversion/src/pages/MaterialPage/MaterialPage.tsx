// import React from 'react';
import Header from '../../components/header/Header';
import './MaterialPage.css'

const MaterialPage: React.FC = () => {
    return (
        <div className="container">
            <Header/>
            <div className="barsik">
                <img src="./src/assets/barsik.png"/>
            </div>
            <div className="material-container">
                <div className="content">
                    <p>ну короче да тыры пыры учите китайский</p>
                </div>
            </div>
        </div>
    );
};

export default MaterialPage;
