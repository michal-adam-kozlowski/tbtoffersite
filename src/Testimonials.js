import React from 'react';
import Review from './Review.js'


function Testimonials() {
    return (
        <div id="testimonials">
             <Review number={1} stars={5}/>
             <Review number={2} stars={3}/>
             <Review number={3} stars={4}/>
             <Review number={4} stars={5}/>
             <Review number={5} stars={4}/>
        </div>
    );
}

export default Testimonials;
