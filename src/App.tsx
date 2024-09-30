import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Landingpage from './pages/Landingpage';
function App() {

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
