import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css'

class App extends React.Component {

    componentDidMount() {
        console.log("[App.js] DidUpdate");
    }

    render() {
        return (
            <BrowserRouter>
                <div id="global-container" className="bg2">
                    <Layout />
                </div>
                <footer className="footer">
                        coded with&nbsp;<i class="far fa-heart"></i>&nbsp;by Luchohak&nbsp;<i class="far fa-hand-spock"></i>.
                </footer>
            </BrowserRouter>
        );
    }
} export default App