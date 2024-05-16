import RootLayout from "./Components/RootLayout"
import Home from "./Pages/Home"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Products from "./Pages/Products"


let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
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
