
import './App.css';
import Checkout from './pages/Checkout/Checkout';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Checkout/>
      <Footer/>
    </div>
  );
}

export default App;
