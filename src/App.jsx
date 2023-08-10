// Style
import './App.css'
// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// react-router-dom
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// Layout
import ProductLayout from './layout/ProductLayout'
import RootLayout from './layout/RootLayout'

// helper
import Product from './pages/helper/Product'
import ProductDetail from './pages/helper/ProductDetail'


function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout></RootLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
        <Route path="product" element={<ProductLayout></ProductLayout>}>
                <Route index element={<Product></Product>}></Route>
                <Route path=':id' element={<ProductDetail></ProductDetail>}></Route>
        </Route>
      </Route>
    )
  )
 

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
