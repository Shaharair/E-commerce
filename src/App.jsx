import RootLayout from "./Components/RootLayout"
import Home from "./Pages/Home"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Products from "./Pages/Products"
import ProductsDeteails from "./Pages/ProductsDeteails"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/products/:id" element={<ProductsDeteails/>}></Route>
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
