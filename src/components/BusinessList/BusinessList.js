import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        return(
            <div className="BusinessList">
                {
                    this.props.businesses.map(businessParam => {
                        return <Business key={businessParam.id} businessProp={businessParam} />;
                    })
                }
            </div>
        )
    }
}

export default BusinessList;