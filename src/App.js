import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Condunt from './components/Condunt';
import Programes from './components/Programes';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Condunt/>
      <Programes/>
      <Footer/> 
    </div>
  );
}

export default App;
