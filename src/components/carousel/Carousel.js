import React, { useEffect, useState } from 'react'
import imageSlide from '../data'
import './carousel.css'

function Carousel() {
    const [currentState,setCurrentState] = useState(0)
     const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'100%'
        ,backgroundRepeat:'no-repeat',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'

     }
     useEffect(()=>{
        const timer= setTimeout(()=>{
       if(currentState===2){
        setCurrentState(0)
       }
       else {
        setCurrentState(currentState+1)
       }
       return ()=> clearTimeout(timer)
        },5000)
     },[currentState])
    
  return (
    <div className='carousel'>
        <div style={bgImageStyle}>
            <div className="banner__text">
                <p>{imageSlide[currentState].content}</p>
            </div>
        </div>
    </div>
  )
}

export default Carousel