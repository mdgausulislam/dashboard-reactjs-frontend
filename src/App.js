import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DashBoard from './Pages/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main d-flex'>
        <div className='sidebarWrapper'>
          <Sidebar />
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" exact={true} element={<DashBoard />} />
            <Route path="/dashboard" exact={true} element={<DashBoard />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
