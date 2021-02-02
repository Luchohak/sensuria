import React from 'react';
import { Row, Image,} from 'react-bootstrap';
import MusicItems from './MusicItems/MusicItems';

import imgBanner from './../../assets/banners/music-banner.jpeg';
import './Music.css';

const music = () => {

    return (
        <div>
            <Row className="music-banner-container">
                <Image className="music-banner-img" src={imgBanner} fluid />
                <h1 className="music-banner-text">Music</h1>
            </Row>
            <MusicItems />
        </div >
    );
};

export default music;