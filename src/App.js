import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DashBoard from './Pages/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { createContext, useState } from 'react';
import Login from './Pages/Login/Login';


const MyContext = createContext();

function App() {

  const [isToggleSidebar, setisToggleSidebar] = useState(false)
  const [isLogin, setisLogin] = useState(false);
  const [isHiddenSidebarAndHeader, setisHiddenSidebarAndHeader] = useState(false);

  const values = {
    isToggleSidebar,
    setisToggleSidebar,
    isLogin,
    setisLogin,
    isHiddenSidebarAndHeader,
    setisHiddenSidebarAndHeader,

  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>

        {
          isHiddenSidebarAndHeader !== true && <Header />
        }

        <div className='main d-flex'>

          {
            isHiddenSidebarAndHeader !== true && <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle' : ''}`}>
              <Sidebar />
            </div>
          }

          <div className={`content ${isHiddenSidebarAndHeader === true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<DashBoard />} />
              <Route path="/dashboard" exact={true} element={<DashBoard />} />
              <Route path="/login" exact={true} element={<Login />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext }
