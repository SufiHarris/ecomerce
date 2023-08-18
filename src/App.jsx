import Nav from "./components/nav/Nav"
import Home from "./pages/Home"
import "./app.css"
import { BrowserRouter ,Route ,Routes } from "react-router-dom"
import Product from "./pages/Product"

function App() {


  return (
    <>
    <BrowserRouter >
        <Routes>
        <Route path="/" element={ <Nav/>}>
          < Route path="/"  element={<Home />} />
          < Route path="/productpage/:id"  element={<Product />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
