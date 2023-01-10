import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import './multi.css'

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className='carousel' >
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button style={{ border:'1px solid white' }} >{'<'}</button>}
        rightChevron={<button  style={{ border:'1px solid white' }}>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <div style={{  background: '#EEE' }}><img className='img' src='https://images.subsplash.com/image.jpg?id=dbaf8bdc-7ba8-41aa-b34c-7eb6a7c789f2&w=400&h=225'/></div>
        <div style={{  background: '#EEE' }}><img className='img' src='https://images.subsplash.com/image.jpg?id=dbaf8bdc-7ba8-41aa-b34c-7eb6a7c789f2&w=400&h=225'/></div>
        <div style={{  background: '#EEE' }}><img className='img' src='https://images.subsplash.com/image.jpg?id=dbaf8bdc-7ba8-41aa-b34c-7eb6a7c789f2&w=400&h=225'/></div>
        <div style={{  background: '#EEE' }}><img className='img' src='https://images.subsplash.com/image.jpg?id=dbaf8bdc-7ba8-41aa-b34c-7eb6a7c789f2&w=400&h=225'/></div>
        <div style={{  background: '#EEE' }}><img className='img' src='https://images.subsplash.com/image.jpg?id=dbaf8bdc-7ba8-41aa-b34c-7eb6a7c789f2&w=400&h=225'/></div>
        <div style={{  background: '#EEE' }}><img className='img' src='https://images.subsplash.com/image.jpg?id=dbaf8bdc-7ba8-41aa-b34c-7eb6a7c789f2&w=400&h=225'/></div>
        <div style={{  background: '#EEE' }}><img className='img' src='https://images.subsplash.com/image.jpg?id=dbaf8bdc-7ba8-41aa-b34c-7eb6a7c789f2&w=400&h=225'/></div>
      </ItemsCarousel>
    </div>
  );
};