import { BrowserRouter, Route, Routes } from "react-router-dom"
import AppStarter from "./pages/AppStarter"
import Home from "./pages/Home"
import CheckOut from "./pages/CheckOut"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {

  useEffect(()=>{
    AOS.init({
      offset : 100,
      duration : 800,
      easing : "ease-in-sine",
      delay : 100
    });
    AOS.refresh()
  },[])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppStarter />}>
            <Route path="/" index={true} element={<Home />}/>
            <Route path="/checkout"  element={<CheckOut />}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
