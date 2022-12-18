import React from "react";

const Section = (props) => {
    return (
        <>
            <h1>{props.title}</h1>
            {props.children}
        </>
    );
}

export default Section;
