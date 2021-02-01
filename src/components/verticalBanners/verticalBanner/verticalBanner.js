import React from 'react';
import { Col, Button } from 'react-bootstrap';

import './VerticalBanner.css';

const VerticalBanner = (props) => {
    return (
        <Col xs={6} md={3} lg={3} className="d-flex justify-content-center align-items-center vertical-banner">
            <img src={props.imgURL}/>
            <button className={props.btnClass}>
                {props.btnText}
            </button>
        </Col>
    )
}

export default VerticalBanner;