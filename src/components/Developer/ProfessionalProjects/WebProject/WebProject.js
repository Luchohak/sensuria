import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const WebProject = (props) => {

    return (
        <Col md={5} className="m-4 web-project-item bg1 p-5">
        <Row><Image src={props.cover} /></Row>
        <Row className="my-3">
            <Col md={5}>
                {props.title ? props.title : 'Title placeholder'}
            </Col>
            <Col md={7} className="d-flex align-items-center">
                <div className="bg-classic">
                    <a href="" target="_blank"><Image src=""></Image></a>
                </div>
                <div className="bg-classic mx-3">
                    <a href="" target="_blank"><Image src=""></Image></a>
                </div>
                <div className="bg-classic">
                    <a href="" target="_blank"><Image src=""></Image></a>
                </div>
            </Col>
        </Row>
        <Row><p>Descripción...</p></Row>
    </Col>
    ); 

}

export default WebProject;