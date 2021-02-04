import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationItem.css';


const NavigationItem = (props) => (
    <li className="navi-item">
        <Link
            to={props.link}
            className={props.active ? 'active' : null}
        >
            {props.children}
        </Link>
    </li>
);

export default NavigationItem;