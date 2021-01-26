import React from 'react';
import { Image } from 'react-bootstrap';

import './SocialNetworks.css';

import fbIcon from '../../../assets/icons/facebook-100.png';
import ytIcon from '../../../assets/icons/youtube-100.png';
import spotiIcon from '../../../assets/icons/spotify-100.png';
import instaIcon from '../../../assets/icons/instagram-100.png';



const SocialNetworks = () => {
    const spotLink = 'https://open.spotify.com/artist/2NUjnjx90KjTYOjIbO2x7c?si=BGCk-kNRSseiXbGaP8JAlQ';
    const ytLink = 'https://www.youtube.com/channel/UCWiUUSDYW2FJx7vQgyWDR1Q';
    const instaLink = 'https://www.instagram.com/sensuriaband/';
    const fbLink = 'https://www.facebook.com/sensuria';

    return (
        <div className="social-networks-container bg1">
            <div className="image-outline">
                <a href={spotLink} target="_blank"><Image src={spotiIcon}></Image></a>
            </div>
            <div className="image-outline">
                <a href={ytLink} target="_blank"><Image src={ytIcon}></Image></a>
            </div>
            <div className="image-outline">
                <a href={fbLink} target="_blank"><Image src={fbIcon}></Image></a>
            </div>
            <div className="image-outline">
                <a href={instaLink} target="_blank"><Image src={instaIcon}></Image></a>
            </div>
        </div>
    );
}

export default SocialNetworks;