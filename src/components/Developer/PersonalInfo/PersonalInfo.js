import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import profilePic from '../../../assets/portfolio/pics/profile-pic.jpg';
import linkedIcon from '../../../assets/icons/linkedin-100.png';
import gitIcon from '../../../assets/icons/github-100.png';
import instaIcon from '../../../assets/icons/instagram-100.png'
import resume from '../../../assets/portfolio/resume/resume-lacosta.pdf'

import './PersonalInfo.css'

const PersonalInfo = () => {
    const linkedURL = 'https://www.linkedin.com/in/luis-carlos-acosta-682473176/';
    const gitURL = 'https://github.com/Luchohak';
    const instaURL = 'https://www.instagram.com/lucho4costa';

    return (
        <section className="personal-info dark my-4 mx-4 py-4">
            <Row className="mx-4 px-3">
                <Col md={7} className="greetings-container px-4 py-4">
                    <Row><h1>Luis Acosta</h1></Row>
                    <Row><h4>Lucho for the pals</h4></Row>
                    <Row className="my-3 mx-3">
                        <p> Hey! Welcome to my band's website, this section is directed for employers or poeple that would like to connect with me.</p>
                        <p>I'm building this website as I learn and experiment more with React and CSS. </p>
                        <p>Feel free to listen to our music and follow us on social media and streaming platforms if you dig our tunes.</p>
                    </Row>
                </Col>
                <Col md={1} className="buttons-container">
                    <Row> <a href={linkedURL} target="_blank"> <img src={linkedIcon} /> </a></Row>
                    <Row className="round"> <a href={gitURL} target="_blank"> <img src={gitIcon} /> </a> </Row>
                    <Row> <a href={instaURL} target="_blank"> <img src={instaIcon} /> </a> </Row>
                </Col>
                <Col md={4} className="picture-container">
                    <Row className="my-2"><img src={profilePic} /></Row>
                    <Row className="my-2"><Link className="bg1 secondary px-2 py-2" to={resume} target="_blank" download="resume-lacosta.pdf">download resume</Link></Row>
                </Col>
            </Row>
        </section>
    );
}


export default PersonalInfo; 