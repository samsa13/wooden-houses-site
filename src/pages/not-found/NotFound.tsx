import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { RouteNames } from '../../router'
import './not-found.scss'

const NotFound: FC = () => {
  return (
    <div className='not-found'>
      <p>This page is not found. Click<span> </span>
      <Link to={RouteNames.MAIN}>here</Link><span> </span>
       to go to the Main.</p>
    </div>
  )
}

export default NotFound
