import React, { FC } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import { RouteNames, routes } from '../router'
import { Layout } from './layout/Layout';


const AppRouter:FC = () => {
  return (
    <Routes>
      <Route path='/wooden-houses-site/'
             element={<Layout />}>
        <Route index
               element={<MainPage />} />

        {routes.map(route =>
          <Route path={route.path}
                 element={<route.element />}
                 key={route.path} />
        )}
        <Route path={RouteNames.NOT_FOUND}
               element={<Navigate to={RouteNames.MAIN} replace />}
        />
      </Route>

    </Routes>
  )
}

export default AppRouter
