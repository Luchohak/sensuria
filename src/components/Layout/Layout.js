import React, { useState } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Aux from '../../hoc/Aux';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Music from '../Music/Music';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';

import './Layout.css';

const Layout = (props) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerCloseHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }

    console.log("Layout");

    return (
        <Aux>
            <Toolbar drawerToggleClicked={() => sideDrawerToggleHandler()} />
            <SideDrawer
                open={showSideDrawer}
                closed={() => sideDrawerCloseHandler()}
            />
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/music" component={Music} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        </Aux>
    );
}

export default Layout; 