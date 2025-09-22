import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const ClassHoverButton = (props) => {
    return (
        <Link to={props.link} className="arrow-step" style={{ backgroundColor: props.color }}><div className="arrow-button">{props.className}</div></Link>
    )
}

export default ClassHoverButton;