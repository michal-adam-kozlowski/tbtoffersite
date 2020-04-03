import React from 'react';
import './Tag.scss';


// function Tag(props) {
//     return (
//         <span>
//             TAG {props.number}
//         </span>
//     );
// }

function Tag(props) {
  return (
   <p>Tu jest tag {props.number}</p>
  );
};

export default Tag;
