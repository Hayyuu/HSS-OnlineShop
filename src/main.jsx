import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home-Component/Home.jsx'
import Shop from './Shop-component/Shop.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const routes=createBrowserRouter([
  {path:'/',element:<App />,
  children:[
    {path:'shop',element:<Shop />},
    {index:true,element:<Home />},
  ,],
},
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
