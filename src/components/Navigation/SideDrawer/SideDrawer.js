import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

import './SideDrawer.css';

const SideDrawer = (props) => {
    let attachedClasses = ['side-drawer', 'close'];

    if (props.open) {
        attachedClasses = ['side-drawer', 'open'];
    }

    return (
        <Aux>
            <Backdrop show={props.open} close={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo height="11%" className="side-sens-logo" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default SideDrawer;