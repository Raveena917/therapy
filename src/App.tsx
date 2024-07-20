import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Landingpage from './pages/Landingpage';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='landingpage' element={<Landingpage/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
