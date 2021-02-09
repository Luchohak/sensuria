import React from 'react';
import { Row, Col } from 'react-bootstrap';

import PersonalInfo from './PersonalInfo/PersonalInfo';
import ProfessionalProjects from './ProfessionalProjects/ProfessionalProjects';

import './Developer.css';

const Developer = () => {

    return (
        <div className="developer-section">
                    <PersonalInfo />
                    <ProfessionalProjects />

        </div>
    );


}

export default Developer; 