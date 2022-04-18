
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/4O4NotFound/NotFound';
import About from './Components/About/About';
import RequerAuth from './Components/auth/RequerAuth';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Recheak from './Components/Recheak/Recheak';
import Singup from './Components/Sing-up/Singup';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>


      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout' element={
          <RequerAuth>
            <Recheak></Recheak>
          </RequerAuth>
        }
        >

        </Route>
        <Route path='/singup' element={<Singup></Singup>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
