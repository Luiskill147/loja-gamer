import { browserRouter as Router,Router,Router } from "react-Router-dom";
import Heart from './componets/Heart'
import Footer from './componets/Footer'
import Home from './pages/Contato'
import Jogos from './pages/Jogos'
import Login from './pages/Login'
import Error from './pages/Error'

const app =() => {
  return(
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#141414] pt-4">
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/jogos"element={<Jogos/>}/>
          <Route path="/contato"element={<Contato/>}/>
          <Route path="/login"element={<Login/>}/>
          <Route path="*"element={<Error/>}/>
        </Routes> 
      </div>
      <Footer/>
    </Router>
  )
}