import React from 'react';
import './Logo.css';

import sensLogo from '../../assets/album-covers/far-cover.png';

const Logo = (props) => (
    <div className="sens-logo" style={{ height: props.height }}>
        <img src={sensLogo} alt="SensuriaMusic" />
    </div>
);

export default Logo; 