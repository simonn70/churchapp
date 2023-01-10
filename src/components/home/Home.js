import React from 'react'
import Carousel from '../carousel/Carousel'
import './home.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import imageSlide from '../data';
import Car from '../Car.js'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {
  return (
   <div className="home">
     
<Slider sx={{height:'100vh'}} autoplay={3000} direction="horizontal" >
	{imageSlide.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.url}') no-repeat center center`,backgroundPosition:'center',
            backgroundSize:'cover',
            height:'100vh',width:'100%'
            ,
            display:'flex',
            justifyContent:'center'
             }}
		>
			<div className="center">
				<FormatQuoteIcon sx={{fontSize:'80px',color:'white'}}/>
				<p className='slide_p'>{item.content}</p>
				
			</div>
		</div>
	))}
</Slider>
    <div className="container__main">
        <div className="container__items">
           <div className="btn__item">
           <button className='button button1'>join us to transform</button>
            <h4>join us every sunday</h4>
           </div>
            <div className="container__content">
                <strong>join us every sunday</strong>
                <p>Thursday |<span> In Person</span> | 7PM</p>
                <p>Sunday | In Person | 9AM, 10:15AM, & 11:30AM</p>
                <p>Sunday | Online | 9AM and ON-DEMAND</p>
               
               
            </div>

           
            
        </div>
        </div>
        <div className="boxes">
            <div className="box">
            <button className='button button1'>join us to transform</button>
            </div>
            <div className="box">
            <button className='button button1'>join us to transform</button>
            </div>
            <div className="box">
            <button className='button button1'>join us to transform</button>

             </div>
             </div>
            
        </div>
       
    

  )
}

export default Home