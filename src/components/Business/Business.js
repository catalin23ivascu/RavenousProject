import React from 'react';
import './Business.css';

class Business extends React.Component { // React Component
    render() {
        const { businessProp } = this.props;
        return (
            <div className="Business">
            <div className="image-container">
                <img src={businessProp.imageSrc} alt=''/>
            </div>
            <h2>{businessProp.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <p>{businessProp.address}</p>
                    <p>{businessProp.city}</p>
                    <p>{`${businessProp.state} ${businessProp.zipCode}`}</p>
                </div>
                <div className="Business-reviews">
                    <h3>{businessProp.category.toUpperCase()}</h3>
                    <h3 className="rating">{`${businessProp.rating} stars`}</h3>
                    <p>{`${businessProp.reviewCount} reviews`}</p>
                </div>
            </div>
            </div>
        )
    }
}

export default Business;