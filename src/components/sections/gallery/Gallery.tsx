import React, { FC } from 'react'
import './gallery.scss'

const Gallery: FC = () => {
  return (
    <section id="gallery" className='gallery'>
      <h1>Галерея</h1>
      <p>Проекты</p>
      <div className='box'>
      <img className='img left' src={require('../../../assets/gallery/1.jpg')} alt='дом из оцб с балконом и террасой' />
      <img className='img right' src={require('../../../assets/gallery/2.jpg')} alt='дом из оцб с крыльцом' />
      <img className='img left' src={require('../../../assets/gallery/3.jpg')} alt='хозяйственная постройка. вид сбоку' />
      <img className='img right' src={require('../../../assets/gallery/4.jpg')} alt='хозяйственная постройка. вид спереди' />
      <img className='img left' src={require('../../../assets/gallery/5.jpg')} alt='облицовка фасада дома сайдингом' />
      <img className='img right' src={require('../../../assets/gallery/6.jpg')} alt='остекление крыльца дома' />
      <img className='img left' src={require('../../../assets/gallery/7.jpg')} alt='дом из бруса с террасой и крыльцом' />
      <img className='img right' src={require('../../../assets/gallery/8.jpg')} alt='дом из бруса с балконом и террасой' />
      </div>
      
    </section>
  )
}

export default Gallery
