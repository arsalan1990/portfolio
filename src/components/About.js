import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" 
               style={{borderRadius:"80px", height:"150px", width:"150px"}}/>

            </div>

            <div className="nine columns main-col">

               {/* <h2>About Me</h2> */}
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>About Me</h2>
                  <p className="address">
       						<span>{resumeData.about}</span>
                         <a href="https://www.piaic.org/">PIAIC.</a> <br/>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}