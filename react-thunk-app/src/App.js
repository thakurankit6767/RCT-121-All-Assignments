import './App.css'
import {Routes,Route} from "react-router-dom"
import { Navbar } from './Components/Navbar'
 import { Home} from './Components/Home'
import {  UserRegister } from './Components/UserRegister'
import { UserLogin} from './Components/UserLogin'

function App() {
 

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/register' element={<UserRegister/>}></Route>
        <Route path="/UserLogin" element={<UserLogin/>}></Route>
      </Routes>
    </div>
  )
}

export default App