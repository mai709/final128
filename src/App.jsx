import { useState } from 'react'
import './App.css'

import Home from './components/Home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './components/NotFound/NotFound'

function App() {
  const [count, setCount] = useState(0)
  let routers = createBrowserRouter([

    {path:"", element:<Layout/>,children:[
      {index :true,element:<Home />},
      {path:"*" ,element:<NotFound/>}
    ] }
  ])
  return <RouterProvider router={routers}></RouterProvider>
  
}

export default App
