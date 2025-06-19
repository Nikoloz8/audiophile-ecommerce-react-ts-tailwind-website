import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/"
  },
  {
    element: <Category />,
    path:"/category/:category"
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
