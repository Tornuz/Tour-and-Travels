import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Main from './Components/Main/main';
import Footer from './Components/Footer/footer'


function App() {
  return (
    <div className="App">
      <Navbar />
       <Home />
       <Main />
      <Footer />
    </div>
  );
}

export default App;
