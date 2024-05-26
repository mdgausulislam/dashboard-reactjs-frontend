import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import DashBoard from './Pages/DashBoard/DashBoard';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<DashBoard />} />
        <Route path="/dashboard" exact={true} element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
