import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

import './MusicItem.css';
import spotiIcon from '../../../../assets/icons/spotify-100.png';
import appMusicIcon from '../../../../assets/icons/itunes-100.png';
import amzMusicIcon from '../../../../assets/icons/amazon-music-128.png';


const MusicItem = (props) => {

    let embededSong = <p>Comming soon!</p>

    if (props.isReleased) {
        embededSong = <iframe 
            src={props.embededURL}
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media">
        </iframe>
    }
    return (
        <Col md={5} className="mx-4 my-4 music-item bg1 py-4 px-5">
            <Row><Image src={props.cover} /></Row>
            <Row className="my-3">
                <Col md={5}>
                    {props.title}
                </Col>
                <Col md={7} className={props.isReleased ? "d-flex align-items-center listen-buttons" : "d-none"}>
                    <div className="bg-classic">
                        <a href={props.spotifyURL} target="_blank"><Image src={spotiIcon} disable></Image></a>
                    </div>
                    <div className="bg-classic mx-3">
                        <a href={props.appMusicURL} target="_blank"><Image src={appMusicIcon}></Image></a>
                    </div>
                    <div className="bg-classic">
                        <a href={props.amzMusicURL} target="_blank"><Image src={amzMusicIcon}></Image></a>
                    </div>
                </Col>
            </Row>
            <Row>{embededSong}</Row>
        </Col>
    );
}

export default MusicItem;