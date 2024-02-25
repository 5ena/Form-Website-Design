import './App.css';
import { Routes,Route } from 'react-router-dom';
import GeneralForm from './componenets/GeneralForm';
import PortalForm from './componenets/PortalForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<GeneralForm/>}/>
        <Route path='/portal' element={<PortalForm/>}/>

      </Routes>

    </div>
  );
}

export default App;
