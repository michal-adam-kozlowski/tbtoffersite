import React from 'react';


function Review(props) {
    return (
        <span> --Name: {props.number} Rate: {props.stars}-- </span>
    );
}

export default Review;