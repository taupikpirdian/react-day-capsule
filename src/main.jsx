import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/login'
import ErrorPage from './pages/404-page'

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello</div>,
        errorElement: <ErrorPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
