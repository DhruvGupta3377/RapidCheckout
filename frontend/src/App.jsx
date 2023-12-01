import Home from "./pages/Home"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Cart from "./pages/Cart"
import RootWrapper from "./pages/RootWrapper"
import ErrorPage from "./pages/ErrorPage"
import ProductsInfo from "./pages/ProductsInfo"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import BarcodeScanner from "./pages/BarcodeScanner"
import SearchViaBarcode from "./pages/SearchViaBarcode"
import "../styles/mainstyle.css"
import AboutUs from "./pages/AboutUs"

const router = createBrowserRouter([
  {path : '/', element : <RootWrapper/>, children:[
    {path : '/signup', element : <SignUp/>},
    {path : '/signin', element : <SignIn/>},
    {path : '/', element : <Home/>},
    {path : '/cart', element : <Cart/>},
    {path : '/products/:id', element :<ProductsInfo/>},
    {path : '/barcode', element: <BarcodeScanner/>},
    {path : '/search-barcode/:barcode', element: <SearchViaBarcode/>},
    {path : '/aboutus', element : <AboutUs/>}
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
