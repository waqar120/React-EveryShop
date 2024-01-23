import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturDetail from './components/FeaturDetail';
import MenShop from './components/MenShop';
import Login from './components/Login';
import Home from './pages/Home';
import Signup from './components/SignUp';
import ShoppingCart from './components/ShoppingCart';
import ForgotPassword from './components/ForgotPassword';
import Data from './data';
import CartDetail from './components/CartDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/men' element={<MenShop gender="Men" data={Data.men} />} ></Route>
          <Route path='/women' element={<MenShop gender="Women" data={Data.women}/>} ></Route>
          <Route path='/kids' element={<MenShop gender="Kids" data={Data.kids}/>} ></Route>
          <Route path='/featuredetail' element={<FeaturDetail/>} ></Route>
          <Route path='/login' element={ <Login/>} ></Route>
          <Route path='/signup' element={ <Signup/>} ></Route>
          <Route path='/shoppingcart' element={ <ShoppingCart/>} ></Route>
          <Route path='/forgotpassword' element={ <ForgotPassword/>} ></Route>
          <Route path='/cartdetail' element={ <CartDetail/> }></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>    
    </div>
  );
}

export default App;
