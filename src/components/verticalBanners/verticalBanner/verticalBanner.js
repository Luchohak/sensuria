import React from 'react';
import { Col, Button } from 'react-bootstrap';

import './verticalBanner.css';

const VerticalBanner = (props) => {
    return (
        <Col xs={6} md={3} lg={3} className="d-flex justify-content-center align-items-center vertical-banner">
            <img src={props.imgURL}/>
            <a className={props.btnClass} href={props.url}>
                {props.btnText}
            </a>
        </Col>
    )
}

export default VerticalBanner;