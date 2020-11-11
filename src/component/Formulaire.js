import React from 'react'

function Formulaire(props){  
    return( 
        <React.Fragment>
         <div id ="contenu"> 
           <div className="formulaire" >
            <div className="container">
              <div>
                <h4 className="title">Subscribe</h4>
                <form>
                  <div className="omrs-input-group">
                    <label className="omrs-input-underlined">
                      <input required/>
                      <span className="omrs-input-label">First Name</span>
                      <span className="omrs-input-helper">over than 8 characters</span>
                      </label>
                <div className="omrs-input-group">
                    <label className="omrs-input-underlined">
                      <input required />
                      <span className="omrs-input-label">Last Name</span>
                      <span className="omrs-input-helper">over than 8 characters</span>
                    </label>
                  </div>
                      <div className="omrs-input-group">
                    <label className="omrs-input-underlined">
                      <input type="email" required />
                      <span className="omrs-input-label">Adress Email</span>
                      <span className="omrs-input-helper">sample@sample.com</span>
                    </label>
                  </div>
              <div className="omrs-input-group">
                    <label className="omrs-input-underlined">
                      <input type="password" required/>
                      <span className="omrs-input-label">Password</span>
                      <span className="omrs-input-helper">Must be min. 8 characters contain a number and an uppercase letter</span>
                    </label>
                  </div>			
                  <button className="button2">
                    Sign up
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  </div>
                </form>
                </div>
               </div>
              </div>
            </div>

       </React.Fragment>
    
);
}
export default Formulaire ;
