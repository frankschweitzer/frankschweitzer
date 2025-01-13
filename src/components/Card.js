import React from 'react';
import '../assets/styles/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ title, description, image }) => {
    return (
        <div className="card">
            {typeof image === 'string' ? (
                <img src={image} alt={title} className="card-img-top" />
            ) : (
                <div className="card-img-top d-flex justify-content-center align-items-center custom-img" style={{ height: '150px' }}>
                    {image}
                </div>
            )}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default Card;