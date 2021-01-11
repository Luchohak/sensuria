import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Landing.css';

import imgRiquisimo from './../../assets/carousel/riq-slider.jpeg';
import imgFar from './../../assets/carousel/far-slider.jpeg';
import imgMonsters from './../../assets/carousel/monsters-slider.jpeg';
import imgCynical from './../../assets/carousel/cynical-slider.jpeg';

const landing = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 crsl-img"
                    src={imgRiquisimo}
                    alt="slider-riquisimo-1"
                />
                <Carousel.Caption>
                    <h3>Riquísimo (out now)</h3>
                    <a 
                        href="https://open.spotify.com/track/2ycdnfqQlths50dEitGCZ7?si=jUiZUMn0RuWT-hHlfzRHpA" 
                        target="_blank"
                        className="btn btn-success"
                        >
                            Listen Now
                    </a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 crsl-img"
                    src={imgFar}
                    alt="slider-far"
                />
                <Carousel.Caption>
                    <h3>FAR (coming soon)</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 crsl-img"
                    src={imgMonsters}
                    alt="slider-monsters"
                />
                <Carousel.Caption>
                    <h3>Monsters (coming soon)</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 crsl-img"
                    src={imgCynical}
                    alt="slider-cynical"
                />
                <Carousel.Caption>
                    <h3>Cynical (coming soon)</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default landing;