import React, {Fragment} from 'react'; //importa libreria 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; //Se importa la libreria Router
import Login from "./Paginas/auth/login";

function App() {
  return (
    
    <Fragment>
        <Router>
          <Routes>
            <Route path='/' exact element= {<Login/>}/>

              
          </Routes>
        </Router>
    </Fragment>
        
  );
}

export default App;
