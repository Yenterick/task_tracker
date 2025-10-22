import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import TaskMenu from './pages/TaskMenu/TaskMenu.jsx';
import SpotlightTaskModal from './components/SpotlightTaskModal/SpotlightTaskModal.jsx';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/modal" element={<SpotlightTaskModal/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/taskMenu" element={<TaskMenu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
