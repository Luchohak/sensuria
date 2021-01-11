import React from 'react';
import Aux from '../../hoc/Aux';

import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Music from '../Music/Music';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import NavbarComponent from '../NavbarComponent/NavbarComponent';

const layout = (props) => (
    <Aux>
        <Container
            fluid
            id="page-container"
        >
            <div>
                <NavbarComponent />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route path="/music" component={Music} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Router>
                <main>
                    {props.children}
                </main>
            </div>
        </Container>
    </Aux>
);

export default layout; 