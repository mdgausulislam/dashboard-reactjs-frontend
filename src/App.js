import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DashBoard from './Pages/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { createContext, useEffect, useState } from 'react';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ProductUpload from './Pages/ProductUpload/ProductUpload';


const MyContext = createContext();

function App() {

  const [isToggleSidebar, setisToggleSidebar] = useState(false)
  const [isLogin, setisLogin] = useState(true);
  const [isHiddenSidebarAndHeader, setisHiddenSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {

    if (themeMode === true) {
      document.body.classList.remove("dark")
      document.body.classList.add('light')
      localStorage.setItem('themeMode', 'light')
    }
    else {
      document.body.classList.remove("light")
      document.body.classList.add('dark')
      localStorage.setItem('themeMode', "dark")
    }

  }, [themeMode])

  const values = {
    isToggleSidebar,
    setisToggleSidebar,
    isLogin,
    setisLogin,
    isHiddenSidebarAndHeader,
    setisHiddenSidebarAndHeader,
    themeMode,
    setThemeMode
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
              <Route path="/signUp" exact={true} element={<SignUp />} />
              <Route path="/products/details" exact={true} element={<ProductDetails />} />
              <Route path="/products/uploads" exact={true} element={<ProductUpload />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext }
