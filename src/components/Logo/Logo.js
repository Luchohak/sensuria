import React from 'react';
import { Link } from 'react-router-dom'
import './Logo.css';

import sensLogo from '../../assets/album-covers/far-cover.png';

const Logo = (props) => (
    <div className="sens-logo bg-drk pt-2" style={{ height: props.height }}>
        <Link className="secondary" to="/" >SENSURIA</Link>
    </div>
);

export default Logo; 