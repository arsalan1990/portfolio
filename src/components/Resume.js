import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                       <img src={item.url} target="_blank" alt=" " style={{width:"60px", marginRight:"15rem", float:"right"}}/>
                          <h3>{item.UniversityName}</h3> 
                          <p className="info">
                          {item.Degree}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>


        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <img src={item.url} target="_blank" alt=" " style={{width:"100px", marginBottom:"10px",marginTop:"-3rem", marginRight:"10rem", float:"right"}}/>
                          <p className="info">
                          {item.Designation}
                          <span>&bull;</span> <em className="date">{item.MonthOfJoining} {item.YearOfJoining}</em>
                          <span>-</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className=" ">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <div style={{display:"table", float:"left"}}>
                      {/* <span className={`${item.skillname.toLowerCase()}`}>   
                    </span><em>{item.skillname}</em> */}
                    <img src={item.url} target="_blank" alt=" " 
                    style={{width:"100px", padding:"10px"}} /> 
                       
                      </div>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}