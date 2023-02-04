import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from '../../../router'
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
        <Link to={RouteNames.HOUSES} className='button'>Дома</Link>
        <Link to={RouteNames.BATH_HOUSES} className='button'>Бани</Link>
        <Link to={RouteNames.FOUNDATIONS} className='button'>Фундаменты</Link>
        <Link to={RouteNames.SUMMER_HOUSES} className='button'>Беседки</Link>
      </nav>
    </section>
  )
}

export default Main
