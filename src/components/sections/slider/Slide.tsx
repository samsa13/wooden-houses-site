import React, { FC } from 'react'
import { SlideState } from '../../../types/slide'
import { imgsBank } from './imgsBank';


const Slide: FC<SlideState> = ({id, src, alt, index, slideIndex}) => {
  
    let position = "nextSlide";

    if(slideIndex === index){
        position = 'activeSlide'
    }
    if(slideIndex === index - 1 || (index === 0 && slideIndex === imgsBank.length - 1)){
        position = 'lastSlide'
    }
    return (
    <article className={position} key={id}>
       <img id='picture' className='picture' src={src} alt={alt} />
    </article>
  )
}

export default Slide
