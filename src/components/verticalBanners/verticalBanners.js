import React from 'react';
import { Row } from 'react-bootstrap';
import VerticalBanner from './verticalBanner/verticalBanner';
import Aux from '../../hoc/Aux';

import monstersImg from '../../assets/vertical-banners/monsters-vertical-1930x3431.jpeg';
import riqImg from '../../assets/vertical-banners/riq-vertical-1930x3431.jpeg';
import cynicalImg from '../../assets/vertical-banners/cynical-vertical-1930x3431.jpeg';
import farImg from '../../assets/vertical-banners/far-vertical-1930x3431.jpeg'

const VerticalBanners = () => {
    const bannersInfo = [
       {imgURL: monstersImg, btnId: 'bg2 classic', btnLabel: 'MUSIC'},
       {imgURL: riqImg, btnId: 'bg1', btnLabel: 'PICS'},
       {imgURL: cynicalImg, btnId: 'bg1', btnLabel: 'US'},
       {imgURL: farImg, btnId: 'bg2 classic', btnLabel: 'CONNECT'}  
    ]
    return(
        <Row>
            {bannersInfo.map(banner => {
                return (
                    <VerticalBanner imgURL={banner.imgURL} btnClass={banner.btnId} btnText={banner.btnLabel}/>
                )
            })}
        </Row>    
    )
}

export default VerticalBanners;