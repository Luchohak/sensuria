import React from 'react';
import { Row } from 'react-bootstrap';
import WebProject from './WebProject/WebProject';

const ProfessionalProjects = () => {
    return (
        <section className="dark my-4 mx-4 py-4">
            <Row className="mx-4 px-3">
                <h1>My Web Projects</h1>
                <WebProject />
            </Row>

        </section>
    )
}

export default ProfessionalProjects;