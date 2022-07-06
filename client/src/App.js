import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPlayer from './components/ListPlayer';
import CreatePlayer from './components/CreatePlayer';
import EditPlayer from './components/EditPlayer';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<ListPlayer/>}/>
        <Route path='/create' element={<CreatePlayer/>}/>
        <Route path='/edit' element={<EditPlayer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
