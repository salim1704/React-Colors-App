import {ColorsList} from './pages';
import { Routes, Route } from 'react-router-dom'; 
import './App.css'

function App() {


  return (
    <div>
    <Routes>
      <Route path="/colors" element = {<ColorsList/>}/>
    </Routes>
    </div>
  )
}

export default App
