import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const ClassHoverButton = (props) => {
    return (
        <Link to={props.link} style={{ fontWeight: "500", fontSize: "1.25rem", color: 'white'}} className="link"><div style={{ backgroundColor:`${props.color}`, borderWidth: "5px", borderStyle: "solid", borderColor:`${props.color}`, borderRadius: "25px", padding: "2.25rem 0.5rem", textAlign: "center", margin: "auto"}} className={`${props.fillButtonColor} link classButton`}>{props.className}</div></Link>
    )
}

export default ClassHoverButton;