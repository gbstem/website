import React from 'react';
import { Link } from 'react-router-dom';

const ClassHoverButton = (props) => {
    return (
        <Link to={props.link} style={{ fontWeight: "500", fontSize: "1.25rem", color:`${props.color}` }} className="link"><div style={{ borderWidth: "5px", borderStyle: "solid", borderRadius: "25px", padding: "2.25rem 0.5rem", width: "15rem", textAlign: "center", margin: "auto"}} className={`${props.fillButtonColor} link`}>{props.className}</div></Link>
    )
}

export default ClassHoverButton;