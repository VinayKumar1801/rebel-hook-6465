

import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Checkout from './pages/Checkout/Checkout';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      {/* <Login/> */}
      <Navbar/>
      <Home/>
      {/* <Checkout/> */}
      <Footer/>
    </div>
  );
}

export default App;
