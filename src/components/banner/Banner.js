import React from 'react'
import "./banner.css"

function Banner({title}) {
  return (
    <div className="banner__main">
        <div className="banner__icon">
         <h2>{title}</h2>
        </div>
        
       </div>
  )
}

export default Banner