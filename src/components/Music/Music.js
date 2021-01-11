import React from 'react';
import { Row, Col, Image, Card, Button } from 'react-bootstrap';

import imgBanner from './../../assets/banners/music-banner.jpeg';
import coverMonsters from './../../assets/album-covers/monsters-cover.png';
import coverFar from './../../assets/album-covers/far-cover.png';
import coverRiq from './../../assets/album-covers/riquisimo-cover.jpeg';

import './Music.css';

const music = () => {

    return (
        <div>
            <Row className="music-banner-container">
                <Image className="music-banner-img" src={imgBanner} fluid />
                <h1 className="music-banner-text">Music</h1>
            </Row>
            <Row>
                <Col className="justify-content-center d-flex">
                    <Card className="card-song">
                        <Card.Img variant="top" src={coverRiq} />
                        <Card.Body>
                            <Card.Title>Riquísimo</Card.Title>
                            <Card.Text>
                                Released on December 4th 2020. This song is a melancholic and dreamy ride powdered with many emotions ranging from love to desperation.
                            </Card.Text>
                            <a
                                href="https://open.spotify.com/track/2ycdnfqQlths50dEitGCZ7?si=jUiZUMn0RuWT-hHlfzRHpA"
                                target="_blank"
                                className="btn btn-outline-success"
                                disabled
                            >
                                Listen on Spotify
                            </a>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="justify-content-center d-flex">
                    <Card className="card-song">
                        <Card.Img variant="top" src={coverFar} />
                        <Card.Body>
                            <Card.Title>FAR</Card.Title>
                            <Card.Text>To be released on February 4th.</Card.Text>
                            <Button variant="outline-success" disabled>Listen on Spotify</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="justify-content-center d-flex">
                    <Card className="card-song">
                        <Card.Img variant="top" src={coverMonsters} />
                        <Card.Body>
                            <Card.Title>Monsters</Card.Title>
                            <Card.Text>To be released on February 22nd.</Card.Text>
                            <Button variant="outline-success" disabled>Listen on Spotify</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div >
    );
};

export default music;