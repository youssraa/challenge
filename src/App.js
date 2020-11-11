import React from 'react'
import './App.css';
import Logo from './component/logo'
import Connect from './component/Connect'
import Formulaire from './component/Formulaire'
import Slide from './component/Slide';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row , Col} from 'react-bootstrap' ;
import Footer from './component/Footer'
  const listNav = [
   {
  navl  : "The internet ",
  href : "#" 
  },
  { 
  navl  : "what do you need to be a developer ?",
  href : "#" 
  }, 
{ navl : "SKILLS" ,
  href:"#" 
},

]
function App() {
    return (
  <React.Fragment>
   <div id="back"> 
    <Logo listNav={listNav} /> 
   <Row>
     <Col>
    <Connect />
    </Col>
    </Row>
    <Row>
      <Col>
    <Slide className="retoucheR"/>
    </Col>
    <Col>
    <Formulaire className="retoucheL"/>
    </Col>
    
    </Row>
    <Footer /> 
    </div>    
  </React.Fragment>
  );
}

export default App;
