import React from 'react';
import { Row, Col } from 'react-bootstrap';

const MusicItem = (props) => {
    <Row>
        <article>
            <Col xs={4} md={2}>
                <img src={props.imgURL} />
            </Col>
            <Col xs={8} md={10}>
                <h1>{props.songName}</h1>
                <a
                    href={props.songURL}
                    target="_blank"
                    className="btn btn-outline-success">
                    Listen
                </a>
            </Col>
        </article>
    </Row>
}

export default MusicItem;