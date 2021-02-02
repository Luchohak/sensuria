import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import './MusicItem.css';
import spotiIcon from '../../../../assets/icons/spotify-100.png';


const MusicItem = (props) => {
    return (
        <Col md={5} className="mx-4 my-4 music-item bg1 py-4 px-5">
            <Row><Image src={props.cover} /></Row>
            <Row className="my-3">
                <Col md={5}>
                    {props.title}
                </Col>
                <Col md={7} className="d-flex align-items-center listen-buttons">
                    <div className="bg-classic">
                        <a href={props.spotifyURL} target="_blank"><Image src={spotiIcon}></Image></a>
                    </div>
                    <div className="bg-classic mx-3">
                        <a href={props.appMusicURL} target="_blank"><Image src={spotiIcon}></Image></a>
                    </div>
                    <div className="bg-classic">
                        <a href={props.amzMusicURL} target="_blank"><Image src={spotiIcon}></Image></a>
                    </div>
                </Col>
            </Row>
        </Col>
    );
}

export default MusicItem;