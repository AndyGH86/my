import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import odontologia from '/Users/andersongh/react-app/my/src/odontologia.jpg';
import Navbar from '/Users/andersongh/react-app/my/src/Navbar.js';
import EnviarMail from '/Users/andersongh/react-app/my/src/EnviarMail.js';




function App() {
  return (
    <>
      <div> 
        <Navbar />
        <EnviarMail />
      </div>
      </>
  );
}

export default App;
