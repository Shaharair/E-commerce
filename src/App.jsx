import RootLayout from "./Components/RootLayout"
import Home from "./Pages/Home"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Products from "./Pages/Products"
import ProductsDeteails from "./Pages/ProductsDeteails"
import Cart from "./Pages/Cart"
import Error from "./Pages/Error"
import Cheackout from "./Pages/Checkout"
import Contact from "./Pages/Contact"
import MyAccount from "./Pages/MyAccount"
import Singup from "./Pages/Singup"
import Loging from "./Pages/Loging"
import About from "./Pages/About"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/products/:id" element={<ProductsDeteails/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/cheackout" element={<Cheackout/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/myaccount" element={<MyAccount/>}></Route>
    <Route path="/loging" element={<Loging/>}></Route>
    <Route path="/singup" element={<Singup/>}></Route>
    <Route path="*" element={<Error/>}></Route>
  </Route>
))



function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
