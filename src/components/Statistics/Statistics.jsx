import React from 'react';

const Statistics = (props) => {


    return (
        <>
            <div>
                <p>Good: {props.good}</p>
                <p>Neutral: {props.neutral}</p>
                <p>Bad: {props.bad}</p>
                <p>Total: {props.total} </p>
                <p>Positive feedback: {props.percentage.toFixed(2)} %</p>
            </div>
        </>
    )
}


export default Statistics;
