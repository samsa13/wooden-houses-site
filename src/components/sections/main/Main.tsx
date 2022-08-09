import React, { FC } from 'react'
import './main.scss'


const Main:FC = () => {
  return (
    <section id='main' className='main'>
      <div className='text-block'>
        <h1>Строим дома для Вас с <span>2009</span> года</h1>
        <div className='line'></div>
        <p>Успешно завершено более <span>150</span> проектов</p>
      </div>
      <nav className='page-buttons'>
        <button id="houses" className='button'>Дома</button>
        <button id="bathhouses" className='button'>Бани</button>
        <button id="foundations" className='button'>Фундаменты</button>
        <button id="summer-houses" className='button'>Беседки</button>
      </nav>
    </section>
  )
}

export default Main
