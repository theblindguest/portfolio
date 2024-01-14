import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { About, Contact, Layout, Timeline } from './pages'

const container = document.getElementById('app-root')!
const root = createRoot(container)

const router = createBrowserRouter([
  {
    // parent route component
    element: <Layout />,
    // child route components
    children: [
      {
        path: '/',
        element: <About />
      },
      // other pages....
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'timeline',
        element: <Timeline />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

root.render(<RouterProvider router={router} />)
