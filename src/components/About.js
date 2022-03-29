import React, {useState} from 'react';

export default function About(props) {


return(
 <>
 <div className="container">
 <h1 style={{color: props.mode === 'light'? 'black': 'white'}}>{props.Heading}</h1>
 <p style={{color: props.mode === 'light'? 'black': 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quo voluptates corrupti iusto molestiae, eveniet animi repellat laboriosam, iste est, exercitationem nesciunt quidem fuga consequatur! Cumque sapiente necessitatibus consectetur deleniti voluptates doloremque dolorem, blanditiis adipisci ratione eveniet tempore qui debitis.</p>
 </div>
 </>
)
}