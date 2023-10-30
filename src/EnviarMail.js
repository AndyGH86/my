import carta from '/Users/andersongh/react-app/my/src/carta (2).png';
import React from 'react';

const EnviarMail = () => {
    return (<>
    
      <div className="enviar-mail__cuerpo">
        <h1 className="fw-bold">Dental</h1>
        <h1 className="fw-bold">consultation</h1>
        <p>Best care dentistry has to offer. Our doctors use</p>
        <p>cutting-edge equipment to enhance your visit.</p>
        </div>
        <div className="enviar-mail__form">
        <form >
           <input className="rounded-pill border-0 p-3"
            placeholder="Your email"
            type="email"
            />
            <button className="enviar-mail__boton" type="submit"><img src={carta}/></button>
        
       </form>
      </div>
      
     
    </>)
  } 

  export default EnviarMail;