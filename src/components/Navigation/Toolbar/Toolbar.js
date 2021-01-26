import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import './Toolbar.css';

const Toolbar = (props) => (
    <header className="toolbar classic">
        <DrawerToggle clicked={(props.drawerToggleClicked)} />
        <Logo height="80%" />
        <nav className="toolbar-desktop">
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;