import React from 'react';
import { Image } from 'react-bootstrap';

import './SocialNetworks.css';

import fbIcon from '../../../assets/icons/facebook-100.png';
import ytIcon from '../../../assets/icons/youtube-100.png';
import spotiIcon from '../../../assets/icons/spotify-100.png';
import instaIcon from '../../../assets/icons/instagram-100.png';




const SocialNetworks = () => (

    <div className="social-networks-container bg1">
        <div className="image-outline">
            <Image src={spotiIcon}></Image>
        </div>
        <div className="image-outline">
            <Image src={ytIcon}></Image>
        </div>
        <div className="image-outline">
            <Image src={fbIcon}></Image>
        </div>
        <div className="image-outline">
            <Image src={instaIcon}></Image>
        </div>
    </div>

);


export default SocialNetworks;