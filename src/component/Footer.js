import React from 'react'

function Footer(props){  
    return( 
        <React.Fragment>
 <footer id="global-footer" > 
      <div id="footer">
        <a href="www.facebook.com"><span>Facebook</span></a>  
        <a href="www.twitter.com"><span>Twitter</span></a>
        <a href="www.google.com"><span>Google+</span></a>
        <a href="www.guithub.com"><span>Github</span></a>
        <a href="#"><span>CodePen</span></a>
      </div>
        <p   id="copyright"> site design / logo &copy;2020 Stack Exchange Inc; user contributions licensed </p>
      
      <a href="#Top"> <img src="./images/TOP.png"  /> </a>
     
    </footer>
        </React.Fragment>
    )
}
export default Footer ;