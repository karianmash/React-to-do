import React from 'react';
import background from '../img/food.jpg';
import '../css/main.css'

const Title = () => {
    return (
        <div className="title" style={{ backgroundImage: `url(${background})` }}>
            <div className="top">
                <div className="network">
                    <i className="fas fa-signal"></i>
                </div>
                <div className="camera"></div>
                <div className="battery">
                    <i className="fas fa-battery-full"></i>
                </div>
            </div>
            <div className="text">
                <h1>TO-DO APP</h1>
            </div>
        </div>
    );
}

export default Title;