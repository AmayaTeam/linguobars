// import React from 'react';
import Header from '../../components/header/Header';
import Module from '../../components/Module/Module';
import './SingleModule.css';

const SingleModule: React.FC = () => {
    return (
        <div className="container">
            <Header />
            <Module/>
        </div>
    );
};

export default SingleModule;
