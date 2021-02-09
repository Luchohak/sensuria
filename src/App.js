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
                <div className="bg2 global-font">
                    <Layout />
                    <footer className="footer">
                        coded with&nbsp;<i class="far fa-heart"></i>&nbsp;by Luchohak&nbsp;<i class="far fa-hand-spock"></i>.
                </footer>
                </div>
            </BrowserRouter>
        );
    }
} export default App