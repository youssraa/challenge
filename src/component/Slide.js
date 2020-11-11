import React from 'react'

function Slide(props){  
    return( 
        <React.Fragment>
  <div class="card">
                <div class="card_part card_part-one">
                </div>
           
                <div class="card_part card_part-two">           
                </div>            
     
                <div class="card_part card_part-three">
                </div>           
       
                <div class="card_part card_part-four">
                </div>           
            </div>
            <div id="present"> 
                <aside className="callout">
                  <b>Get Coding👀</b>
                 Once you’ve decided what kind of work you want to get into, you’ll need to start learning the languages required for you to get the job done.
              
                </aside>             
                <aside className="callout warning">
                  <b> Hold up, wait a minute. ☝🏾</b>
              
                 There are plenty of tools online to help you learn the skills you need by yourself and on your own time. That said, if you’re trying to learn something like coding alone, there won’t be anyone to help you if you get stuck.
                </aside>
              
                <aside className="callout success">
                  <b> Success. You did it! 👏🏾 </b>
              
                 If you’re serious about getting into web development, you may want to consider taking an online web developer bootcamp.
                By taking a full course, you’ll have more resources at your disposal. So, you’ll be able to master your new craft that much quicker.
                </aside>
              </div>
       
        </React.Fragment>
    )
}
export default Slide ;