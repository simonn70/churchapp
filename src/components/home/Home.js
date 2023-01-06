import React from 'react'
import Carousel from '../carousel/Carousel'
import './home.css'


function Home() {
  return (
   <div className="home">
    <Carousel/>
    <div className="container__main">
        <div className="container__items">
            <button className='button button1'>join us to transform</button>
            <div className="container__content">
                <h2>join us every sunday</h2>
                <p>Thursday |<span> In Person</span> | 7PM</p>
                <p>Thursday |<span> In Person</span> | 7PM</p>
                <p>Thursday |<span> In Person</span> | 7PM</p>
                <p>Thursday |<span> In Person</span> | 7PM</p>
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
       
    </div>
   </div>

  )
}

export default Home