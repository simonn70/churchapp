import React from 'react'
import Banner from '../banner/Banner'
import SingleEvent from '../Single/SingleEvent'
import "./event.css"

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import imageSlide from '../data';
import Multi from '../Multi';

function event() {
  return (
    <div className='event'>
        < Slider autoplay={3000} direction="horizontal" >
	{imageSlide.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.url}') no-repeat center center`,backgroundPosition:'center',
            backgroundSize:'cover',
            height:'100vh',width:'100%'
            ,
            display:'flex',
            alignItems:'center',
            justifyContent:'center' }}
		>
			<div className="center">
				<h1>EVENT PAGE</h1>
				
				
			</div>
		</div>
	))}
</Slider>

        
        
        
        
  


        
        
        <div className="header2">
          <h2>PLEASE TAKE NOTE OF THE FOLLOWING UPCOMING EVENTS</h2>
          <Multi/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus tenetur ex pariatur in ea voluptates sequi? Minima quod pariatur facilis? Ipsa natus dolore veniam fugit ducimus accusamus ad maxime!</p>
        </div>
      
        
     
    </div>
   
  )
}

export default event