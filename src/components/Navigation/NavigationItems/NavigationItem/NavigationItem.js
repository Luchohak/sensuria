import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';


const NavigationItem = (props) => (
    <li className="navi-item">
        <NavLink
            to={props.link}
            exact
            className={props.active ? 'active' : null}
        >
            {props.children}
        </NavLink>
    </li>
);

export default NavigationItem;