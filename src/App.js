import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DashBoard from './Pages/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { createContext, useState } from 'react';


const MyContext = createContext();

function App() {

  const [isToggleSidebar, setisToggleSidebar] = useState(false)

  const values = {
    isToggleSidebar,
    setisToggleSidebar

  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <div className='main d-flex'>
          <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Sidebar />
          </div>
          <div className={`content ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<DashBoard />} />
              <Route path="/dashboard" exact={true} element={<DashBoard />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext }
