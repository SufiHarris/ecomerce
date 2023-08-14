import Nav from "./components/nav/Nav"
import CardPage from "./pages/CardPage"
import "./app.css"
import { useEffect, useState } from "react"
import { BrowserRouter ,Route ,Routes } from "react-router-dom"
import SeconPage from "./pages/SeconPage"
function App() {
  const [number ,setNumber] = useState (localStorage.getItem("number") ? localStorage.getItem("number")  : 0 );

  useEffect (() => {
    const setLocalNumber = () => {
          localStorage.setItem("number" ,number);
    }
    setLocalNumber()
  } ,[number]);
  return (
    <>
    <BrowserRouter >
    <Nav number={number}/>
      <Routes>
      < Route path="/"  element={<CardPage number={number} setNumber={setNumber}/>} />
     
      < Route path="/productpage/:id"  element={<SeconPage/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
