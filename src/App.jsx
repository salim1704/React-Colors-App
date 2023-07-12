
import {Home} from './pages';
import './App.css';
import {Routes,Route} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      
      <Routes>
        
          <Route path ='/' element={<Home />}/>
          
          
          <Route path ='*' element={<h1>Not Found</h1>}/>
          
      </Routes>
    </div>
  )
}

export default App