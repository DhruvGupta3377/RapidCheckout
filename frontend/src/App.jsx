import Home from "./pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Profile from "./pages/Profile"
import DealsOfTheDay from "./pages/DealsOfTheDay"
import Cart from "./pages/Cart"
import RootWrapper from "./pages/RootWrapper"
import ErrorPage from "./pages/ErrorPage"
import ProductsInfo from "./pages/ProductsInfo"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
// import BarcodeSearch from "./pages/BarcodeSearch"
import BarcodeScanner from "./pages/BarcodeScanner"

const router = createBrowserRouter([
  {path : '/', element : <RootWrapper/>, children:[
    {path : '/signup', element : <SignUp/>},
    {path : '/signin', element : <SignIn/>},
    {path : '/', element : <Home/>},
    {path : '/cart', element : <Cart/>},
    {path : '/doday', element : <DealsOfTheDay/>},
    {path : '/profile', element : <Profile/>},
    {path : '/products/:id', element :<ProductsInfo/>},
    {path : '/barcode', element: <BarcodeScanner/>}
  ],
  errorElement: <ErrorPage/>
}
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
