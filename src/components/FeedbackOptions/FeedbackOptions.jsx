import React from 'react';

const FeedbackOptions = (props) => {

    return (
        <>
            <div className="buttons">
                <button className="button" onClick={() => props.handleReviewClick("Good")}>Good</button>
                <button className="button" onClick={() => props.handleReviewClick("Neutral")}>Neutral</button>
                <button className="button" onClick={() => props.handleReviewClick("Bad")}>Bad</button>
            </div>
        </>
    )
}

export default FeedbackOptions;
