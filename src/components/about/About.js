import React from 'react'
import Banner from '../banner/Banner'
import "./about.css"

function About() {
  return (
    <div className='about'>
        <Banner title="ABOUT PAGE"/>
        <div className="about__page">
        <div className="about__container">
            <div className="img"></div>
            <div className="content"></div>
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
            <h2>our mission</h2>
            <div className="mission_container">
                <div className="mission__item">
                    <div className="write">
                        <h2>good</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum nisi? Facere laudantium vero excepturi dicta ipsam quidem saepe facilis eos dolorem cupiditate similique impedit enim, voluptas eligendi rem modi.</p>

                    </div>
                    <div className="write">
                    <h2>good</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum nisi? Facere laudantium vero excepturi dicta ipsam quidem saepe facilis eos dolorem cupiditate similique impedit enim, voluptas eligendi rem modi.</p>

                    </div>
                </div>
                <div className="mission__item">
                    <div className="write">
                    <h2>good</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum nisi? Facere laudantium vero excepturi dicta ipsam quidem saepe facilis eos dolorem cupiditate similique impedit enim, voluptas eligendi rem modi.</p>

                    </div>
                    <div className="write">
                    <h2>good</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nostrum nisi? Facere laudantium vero excepturi dicta ipsam quidem saepe facilis eos dolorem cupiditate similique impedit enim, voluptas eligendi rem modi.</p>

                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default About