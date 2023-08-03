
import './App.css'
import PassGen from './pages/PassGenerate'
import {Routes, Route} from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from './pages/login.jsx'
function App() {


  return (
    <div className='container-xl bg-windows-back w-screen text-white h-screen'>
        <Routes>
            < Route path={"/"} element={
                <div className='flex flex-col justify-center items-center h-screen'>
                    <PassGen/>
                </div>
            } />
            < Route path={"/register"} element={<Register/>} />
            < Route path={"/login"} element={<Login/>} />
        </Routes>

    </div>
  )
}

export default App

