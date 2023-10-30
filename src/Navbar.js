import muela from '/Users/andersongh/react-app/my/src/limpieza-dental.png';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Navbar = () => {
    return (<>
    <nav className="d-flex pl-2 mt-5 text-info">
      
    <div className= " row pl-2 text-left fw-bold fs-5">  
    <span className="col d-flex justify-content-end p-4" > <img src={muela}/></span>
    <span className="col p-2 mt-3"> 
    <p>Dental
       Care</p>
       </span>
    </div>
    <div className="dropdownUno mt-4">
    <button className="btn text-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Location
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
  <div className="dropdown mt-4">
    <button className="btn text-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Services
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
  <a className="btn text-info mt-4" href="#" role="button">Price</a>
  <button className="Navbar-button">Login</button>
  
  
  
  </nav>
  
    </>
    )
  } 

  export default Navbar;
  