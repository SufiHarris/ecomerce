import Nav from "./components/nav/Nav"
import CardPage from "./pages/CardPage"
import "./app.css"
import { useEffect, useState } from "react"
import { BrowserRouter ,Route ,Routes } from "react-router-dom"
import SeconPage from "./pages/SeconPage"
import axios from "axios"
import LoadingSpinner from "./components/Spinner"
function App() {
  const [number ,setNumber] = useState(localStorage.getItem("number") ? parseInt(localStorage.getItem("number")) : 0);
  const [data ,setData] = useState([]);
  const [isLoading ,setLoading ] = useState(false);
  const [search ,setSearch] = useState("");
  useEffect(() => {
     setLoading(true);
    const getData = async () => {
    
    const response = await axios.get("https://fakestoreapi.com/products" );
    const data = response.data;
    setData(data);
    setLoading(false);
    }
getData();
},[])
  useEffect (() => {
    const setLocalNumber = () => {
          localStorage.setItem("number" ,number);
    }
    setLocalNumber();
  } ,[number]);


  function onClick () {
    setNumber((number) => number+1);
    console.log(number)
  }
  if(isLoading)  return <div className='spinner-container'><LoadingSpinner /></div>
  return (
    <>
    <BrowserRouter >
    <Nav number={number} search={search} setSearch={setSearch}/>
      <Routes>
      < Route path="/"  element={<CardPage data={data.filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))} onClick={onClick}/>} />
      < Route path="/productpage/:id"  element={<SeconPage onClick={onClick}/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
