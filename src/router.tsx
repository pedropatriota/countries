import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import Home from './pages/Home'
import Country from './pages/Country'

const Router = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route path= '/' index element={<Home />} />
      <Route path= '/:id' element={<Country />} />
      </Route>
    )
  )

  return(
    <RouterProvider router={router} />
  )
}

export default Router