import React, { FC, useEffect, useState } from 'react'
import { SliderPropTypes } from '../../../types/slide';
import { imgsBank } from './imgsBank';
import Slide from './Slide';
import './slider.scss'

const Slider: FC<SliderPropTypes> = (props) => {

    const { id, onClick } = props;

    const [index, setIndex] = useState(0);
    const [imgArr, setImgArr] = useState([{
        id: 0,
        src: '',
        alt: ''
    }])

    useEffect(() => {
        imgsBank.map((img) => {
            if (img.imgId === id) {
                setImgArr([...img.imgArr])
            }
            return '';
        });
    }, [id])

    useEffect(() => {
        const lastIndex = imgArr.length - 1
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, imgArr])

    const decreaseIndex = () => setIndex(index - 1);
    const increaseIndex = () => setIndex(index + 1);


    return (
        <div className='section-width'>
            <div className="section-center">

                {imgArr.map((slideImg, imgIndex) =>
                    <Slide key={slideImg.id} {...slideImg} slideIndex={imgIndex} index={index} />
                )}

                <button className="prev" onClick={decreaseIndex}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" /></svg>
                </button>
                <button className="next" onClick={increaseIndex}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z" /></svg>
                </button>
                <button className='close' onClick={onClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" /></svg>
                </button>
            </div>
        </div>
    )
}

export default Slider
