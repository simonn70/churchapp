import React from 'react'
import Banner from '../banner/Banner'
import SingleEvent from '../Single/SingleEvent'
import "./event.css"

function event() {
  return (
    <div className='event'>
        <Banner title="EVENT PAGE"/>
        <div className="single__container">
            <h2 className='h2'>big events</h2>
        <SingleEvent/>
        <SingleEvent/>
        <SingleEvent/>
        <SingleEvent/>
        </div>
        <div className="week__event">
            <h2>weekly events</h2>
            <div className="week__container">
                <div className="week__box">

                </div>
                <div className="week__box">
                    
                </div>
                <div className="week__box">
                    
                </div>
                <div className="week__box">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default event