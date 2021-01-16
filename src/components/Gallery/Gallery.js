import React from 'react';
import './Gallery.css';
import { Container, Row, Col, Image } from 'react-bootstrap'

import imageExample from './../../assets/carousel/far-slider.jpeg';

const gallery = () => {
    return (
        <Container>
            <Row>
                <Col sm={6} md={4} lg={3}>
                    <Image src={imageExample} thumbnail />
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <Image src={imageExample} thumbnail />
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <Image src={imageExample} thumbnail />
                </Col>
                <Col sm={6} md={4} lg={3}>
                    <Image src={imageExample} thumbnail />
                </Col>
            </Row>
            
        </Container>
    );
};

export default gallery;