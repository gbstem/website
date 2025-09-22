import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const PageButton = (props) => {
    return (
        <Link to={props.link} className="button" style={{ borderRadius: "20px", padding: "1.5rem", backgroundColor: props.color, color: "white", textDecoration: "none", fontSize: "1.25rem" }}>
            {props.className}
        </Link>
    )
}

export default PageButton;