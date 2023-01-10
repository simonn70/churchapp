import React from 'react'
import Banner from '../banner/Banner'

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import imageSlide from '../data';

function Contact() {
  return (
    <div className='contact'>
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
				<h1>{}</h1>
				<p className='slide_p'>CONTACT PAGE</p>
				<button>{}</button>
			</div>
		</div>
	))}
</Slider>
        <div className="contactus">
            <h2>map</h2>
            <div className="map">

            </div>
            <div className="content__map">

            </div>
        </div>
    </div>
  )
}

export default Contact