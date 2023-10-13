import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { About,
    Cart,
    Checkout,
    Error,
    HomeLayout,
    Landing,
    Login,
    Orders,
    Products,
    Register,
    SingleProduct
   } from './pages'

import {ErrorElement} from './components'

//Loaders
import { loader as landingLoader, loader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'
//ends loaders
   const router = createBrowserRouter([
    {
      path:'/',
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          errorElement: <ErrorElement />,
          loader: landingLoader
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "checkout",
          element: <Checkout />
        },
        {
          path: "cart",
          element: <Cart />
        },
        {
          path: "orders",
          element: <Orders />
        },
        {
          path: "products",
          element: <Products />
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoader
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />
    },
     {
      path: "/register",
      element: <Register />,
      errorElement: <Error />
    }
   ])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
