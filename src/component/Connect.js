import React from 'react'

function Connect(props){  
    return( 
        <React.Fragment>
       <nav id="connect">
      <div className="form__group">
  <form>
   <input type="email" className="form__input" id="name" placeholder="email" required="" />
   <label for="name" className="form__label">email</label>
   <input type="password" id="password" required placeholder="Password" class="form__input"/>
   <label for="password" className="form__label"  > Password:</label>
   <div class="wrapper">
       <button aria-required="true">
          Log in 
         <span></span>
         <span></span>
         <span></span>
         <span></span>
      </button>
   </div> 
  </form> 
</div> 
<div class="group">
 <input type="text" placeholder="Search.." class="search" />
 <input type="image" id="image" alt="search"
   src="..\images\search.png" />
</div>
</nav> 
<br/>
 <br/>
</React.Fragment>
    
);
}
export default Connect ;

