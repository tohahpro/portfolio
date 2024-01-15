import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Projects from './Components/Projects'
import ProdectsPage from './ProdectsPage'
import Home from './Home/Home'


const router = createBrowserRouter([{
  path: "/",
  element: <MainLayout />,
  children: [

    {
      path: '/',
      element: <Home />
    },
    {
      path: '/',
      element: <Projects />,

    },
    {
      path: '/products/:brand_name',
      element: <ProdectsPage />,
      loader: () => fetch('Projects.json')


    },
  ]
}])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
  </React.StrictMode>,
)
