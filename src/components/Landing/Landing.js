import React from 'react';
import './Landing.css';
import Aux from '../../hoc/Aux';
import { Image, Button } from 'react-bootstrap';

import imgRiquisimo from './../../assets/carousel/riq-slider.jpeg';
import imgFar from './../../assets/carousel/far-slider.jpeg';
import imgMonsters from './../../assets/carousel/monsters-slider.jpeg';
import imgCynical from './../../assets/carousel/cynical-slider.jpeg';
import SocialNetworks from './SocialNetworks/SocialNetworks';
import VerticalBanners from '../verticalBanners/verticalBanners';


const landing = () => {

    const riqLink = "https://open.spotify.com/track/2ycdnfqQlths50dEitGCZ7?si=jUiZUMn0RuWT-hHlfzRHpA"

    return (
        <Aux>
            <div className="cover-container">
                <Image src={imgRiquisimo} fluid />
                <Button>BECOME A FAN</Button>
            </div>
            <SocialNetworks />
            <VerticalBanners />
        </Aux>
    );
}

export default landing;