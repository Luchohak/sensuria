import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Music from './components/Music/Music';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';



class App extends React.Component {
    render() {
        return (
            <Container
                fluid
                style={{
                    height: '100vh',
                }}
            >
                <Row>
                    <NavbarComponent />
                </Row>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Landing} />
                            <Route path="/music" component={Music} />
                            <Route path="/gallery" component={Gallery} />
                            <Route path="/about" component={About} />
                        </Switch>
                    </Router>
            </Container>
        );
    }
} export default App