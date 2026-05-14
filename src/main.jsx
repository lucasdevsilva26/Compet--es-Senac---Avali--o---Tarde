import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import SignOn from './components/SignOn.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <App></App>
},
{
  path: '/login',
  element: <Login></Login>
},
{
  path: '/signon',
  element: <SignOn></SignOn>
},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
