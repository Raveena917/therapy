import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Landingpage from './pages/Landingpage';
import Specialist from './pages/Specialist';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/landingpage' element={<Landingpage/>}/>
      <Route path='/specialist' element={<Specialist/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
