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
       {imgURL: monstersImg, btnId: 'bg2 classic', btnLabel: 'MUSIC', sectionURL: '/music'},
       {imgURL: riqImg, btnId: 'bg1 secondary', btnLabel: 'PICS', sectionURL: '/'},
       {imgURL: cynicalImg, btnId: 'bg1 secondary', btnLabel: 'US', sectionURL: '/'},
       {imgURL: farImg, btnId: 'bg2 classic', btnLabel: 'CONNECT', sectionURL: '/'}  
    ]
    return(
        <Row>
            {bannersInfo.map(banner => {
                return (
                    <VerticalBanner 
                        imgURL={banner.imgURL} 
                        btnClass={banner.btnId} 
                        btnText={banner.btnLabel}
                        url={banner.sectionURL}/>
                )
            })}
        </Row>    
    )
}

export default VerticalBanners;