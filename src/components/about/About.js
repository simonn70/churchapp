import React from 'react'
import Banner from '../banner/Banner'
import "./about.css"
import Car from '../Car.js'

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import imageSlide from '../data';


function About() {
  return (
    <div className='about'>
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
				<h1>ABOUT PAGE</h1>
				
				
			</div>
		</div>
	))}
</Slider>
        <div className="about__page">
        <div className="img">
                <img src="https://images.subsplash.com/image.jpg?id=dbaf8bdc-7ba8-41aa-b34c-7eb6a7c789f2&w=400&h=225" alt="" />
            </div>
            <div className="content">
                <h3>our vision</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla quibusdam quod voluptate fugit corporis voluptatibus magnam incidunt harum voluptates beatae in praesentium eos ipsum placeat, dolores rem cum. Ut, alias.</p>
                <h3>Rev Adjei Simon</h3>
            </div>
        </div>
        <div className="description">
            <div className="heading">
                <h2>we are</h2>
            </div>
            <div className="about__content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex modi ut sequi! Unde quos inventore quibusdam iusto cupiditate? Perspiciatis asperiores sint tenetur quia alias nesciunt architecto suscipit sunt at eaque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste obcaecati illum voluptas itaque ex incidunt perspiciatis eum ducimus tempora totam ut ipsum corrupti, eligendi cupiditate adipisci sequi perferendis officia quaerat?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nihil perferendis cumque amet repudiandae hic ullam necessitatibus, possimus laborum id unde aperiam nisi illum odio nemo rem nulla cum nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolorum magni reiciendis aperiam ab consequuntur earum laudantium eos voluptatibus harum, repellat voluptatum quos fugit animi dolores alias culpa aspernatur ut.</p>
            </div>
        </div>
        <div className="mission">
            <h1>our mission</h1>
            <div className="mission_container">
                <div className="mission__item">
                    <div className="write">
                        <h2>Experience God</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum nisi? Facere laudantium vero excepturi dicta ipsam quidem saepe facilis eos dolorem cupiditate similique impedit enim, voluptas eligendi rem modi.</p>

                    </div>
                    <div className="write">
                    <h2>Experience God</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum nisi? Facere laudantium vero excepturi dicta ipsam quidem saepe facilis eos dolorem cupiditate similique impedit enim, voluptas eligendi rem modi.</p>

                    </div>
                </div>
                <div className="mission__item">
                    <div className="write">
                    <h2>Experience God</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum nisi? Facere laudantium vero excepturi dicta ipsam quidem saepe facilis eos dolorem cupiditate similique impedit enim, voluptas eligendi rem modi.</p>

                    </div>
                    <div className="write">
                    <h2>Experience God</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum nisi? Facere laudantium vero excepturi dicta ipsam quidem saepe facilis eos dolorem cupiditate similique impedit enim, voluptas eligendi rem modi.</p>

                    </div>
                </div>

            </div>
        </div>
        <div className="leaders">
        <h1>OUR LEADERS</h1>
        </div>
        <div className="cards">
        
        <Car/>
        <Car/>
        <Car/>
        </div>
    </div>
  )
}

export default About