import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Details from './pages/Details'
import Layout from './layouts/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/"
      },
      {
        element: <Category />,
        path: "/category/:category"
      },
      {
        element: <Details />,
        path: "/details/:category/:id"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
