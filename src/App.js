
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './Components/4O4NotFound/NotFound';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>

    </div>
  );
}

export default App;
