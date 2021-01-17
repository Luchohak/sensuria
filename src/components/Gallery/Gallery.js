import React from 'react';
import './Gallery.css';
import { Container, Row, Col, Image } from 'react-bootstrap'

import imageExample from './../../assets/carousel/far-slider.jpeg';

const gallery = () => {
    return (
        <Container>
            <Row>
                <Col xs={6} lg={8}>
                    <Image src={imageExample} thumbnail />
                </Col>
                <Col xs={6} lg={4}>
                    <Image src={imageExample} thumbnail />
                    <Image src={imageExample} thumbnail />
                </Col>
                <Col xs={6} lg={4}>
                    <Image src={imageExample} thumbnail />
                </Col>
                <Col xs={6} lg={4}>
                    <Image src={imageExample} thumbnail />
                </Col>
            </Row>
            
        </Container>
    );
};

export default gallery;