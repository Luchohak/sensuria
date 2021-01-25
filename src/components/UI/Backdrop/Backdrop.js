import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => (
    props.show ? <div className="backdrop" onClick={() => {console.log('nooo');}}></div> : null
);

export default Backdrop;