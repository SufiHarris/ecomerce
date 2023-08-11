import Nav from "./components/nav/Nav"
import CardPage from "./pages/CardPage"
import "./app.css"
import { useEffect, useState } from "react"
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
      <Nav number={number}/>
      <CardPage number={number} setNumber={setNumber}/>
    </>
  )
}

export default App
