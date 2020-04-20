import React, {Component} from "react";
import Testimonial from "./Testimonial.js";
import "./TestimonialsWrapper.scss";


var TestimonialsArr = [
    {
        index : 1,
        image : "./img/girl1.jpg",
        name : 'Ania',
        testimonial_text : 'Najlepsze wyjazdy, cudowni ludzie, niepowtarzalne wspomnienia!'
    },

    {
        index : 2,
        image : './img/man1.jpg',
        name : 'Jacek',
        testimonial_text : 'Wszystko ok!'
        },

    {
        index : 3,
        image : './img/man2.jpg',
        name : 'Robert',
        testimonial_text : 'Autokar smierdzial i dlatego 3!'
        },
    {
        index : 4,
        image : './img/man2.jpg',
        name : 'Marian',
        testimonial_text : 'Zajebongo!'
        },
    {
        index : 5,
        image : './img/man1.jpg',
        name : 'Januszo',
        testimonial_text : 'Najgorsze biuro EVER!'
        }
    ];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function GenerateTestimonialsArr() {
    var arr = [];
    var arr2 = [];
    while(arr.length < 3){
        var r = getRandomInt(1, 5);
        if(arr.indexOf(r) === -1) {
            arr.push(r);
            TestimonialsArr.forEach((el) => {
                if (el.index === r) {
                    arr2.push(el)
                }
            })
        }
    }
    return arr2
}

class TestimonialsWrapper extends Component {
    render () {
        return (
            <div className='testimonialsWrapper'>
                    {GenerateTestimonialsArr().map((el) =>
                        <Testimonial image={el.image} name={el.name} text={el.testimonial_text}/>
                    )}
            </div>
        )

    }
}

export default TestimonialsWrapper;