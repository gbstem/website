import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const ClassHoverButton = (props) => {
    return (
        <Link to={props.link} style={{ fontWeight: "500", fontSize: "1.25rem", color:`${props.color}` }} className="link"><div style={{ borderWidth: "5px", borderStyle: "solid", borderRadius: "25px", padding: "2.25rem 0.5rem", textAlign: "center", margin: "auto"}} className={`${props.fillButtonColor} link classButton`}>{props.className}</div></Link>
    )
}

export default ClassHoverButton;