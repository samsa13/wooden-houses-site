import React, { FC } from 'react'
import './about-us.scss'

const AboutUs:FC = () => {
  return (
    <section id="about-us" className='about-us'>
      <h1>О нас</h1>
      <div className='picture-description'>
        <img src={require('../../../assets/background-imgs/director-photo.jpg')} className='img' />
        <div className='line'></div>
        <h5>Чеперегин Михаил Сергеевич</h5>
        <h6>Директор компании</h6>
      </div>

      <div className='text-container'>
        <p>На протяжении более чем 10 лет наша  компания оказывает комплексные услуги по строительству деревянных домов. Гарантируем качество по приемлемым ценам.</p>
        <p>В нашем штате числится несколько строительных бригад из города Рыбинска.</p>
        <p>Мы строим дома по каркасной технологии, дома из бруса (в теплый угол),  дома из бревна.</p>
        <p>Перфекционисты в своем деле. Делаем четкий запил. Рекомендуем качественные материалы.</p>
      </div>
    </section>
  )
}

export default AboutUs
