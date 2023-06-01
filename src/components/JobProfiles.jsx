import React, { useState } from 'react';

export default function jobProfiles() {
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);
	const jobProfiles = {
		designation: "",
		experience: "",
		jobTitle: "",
		description: "",
		location: "",
		jobType: "",
		category: "",
	  };
	  
	  const bdm = Object.create(jobProfiles);
	  bdm.designation = "business development manager";
	  bdm.experience = "02 years experience";
	  bdm.jobTitle = "business development manager - 2Y experience";
	  bdm.description =
		"We are looking for a BD Manager who is passionate about technology and has the prowess to build strong relationships";
	  bdm.location = "Mumbai";
	  bdm.jobType = "Full-Time";
	  bdm.category = "Business Development";
	  
	  const unityDeveloper = Object.create(jobProfiles);
	  unityDeveloper.designation = "Unity Developer";
	  unityDeveloper.experience = "01 years experience";
	  unityDeveloper.jobTitle = "Unity Developer - 1Y experience";
	  unityDeveloper.description =
		"We are looking for a talented unity developer to join our design team.";
	  unityDeveloper.location = "Mumbai";
	  unityDeveloper.jobType = "Full-Time";
	  unityDeveloper.category = "Design and Development";
	  
	  const webDevIntern = Object.create(jobProfiles);
	  webDevIntern.designation = "Web Developer Intern";
	  webDevIntern.experience = "Fresher";
	  webDevIntern.jobTitle = "Web Developer Intern - Fresher";
	  webDevIntern.description =
		"We are seeking a talented Web Developer Intern to join our team. ";
	  webDevIntern.location = "Mumbai";
	  webDevIntern.jobType = "Intern";
	  webDevIntern.category = "Design and Development";
	  
	  const jobProfilesArray = [];
	  
	  jobProfilesArray.push(bdm, unityDeveloper, webDevIntern);
	  document.getElementById("slct2").addEventListener("change", (e) => {
		console.log(e.target);
		jobProfilesArray.filter((jobProfile) => {
		  return jobProfile.category == e.target;
		});
	  });
	  function createJobProfiles() {}
	  
	  console.log(jobProfilesArray, "array");
	return (
		<>
			<section style={{paddingTop:"4.5%"}} className="margins">
			<div style={{marginBottom: "2%"}}>
				<span className="positionsTitle">Open Positions</span>
				<span className="positionsTitle" style={{opacity:"40%"}}>(06)</span>
			</div>

			<div className="row" style={{marginBottom: "3%"}}>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <span className={{inputTitle}}>Search for a title...</span>
        <input
          className="inputCss"
          type="text"
          placeholder="Search for a job title..."
        />
      </div>
      <div className="col-4 onlyDesk">
        <span className="inputTitle">Location:</span>
        <br />
        <button className="btn exploreBtn" style="margin-left: 0;">Any</button>
        <button className="btn exploreBtn">Mumbai</button>
        <button className="btn exploreBtn">Lucknow</button>
      </div>
      <div className="col-4 onlyDesk" style="padding-left: 1.7%;">
        <span className="inputTitle">Category:</span>
        <br />
      
        <label className="select" for="slct">
          <select id="slct2" required="required">
            <option value="Design and Development" selected="selected"
              >Design and Development</option
            >

            <option value="Business Development">Business Development</option>
            <option value="contentWriter">Content Writer</option>
            <option value="graphicDesigner">Graphic Designer</option>
          </select>
        </label>
      </div>
    </div>

    <div classNam="row onlyMob">
      <label className="select" for="slct">
        <select id="slct" required="required">
          <option value="" disabled="disabled" selected="selected"
            >Location :any</option
          >
          <option value="#">Mumbai</option>
          <option value="#">Lucknow</option>
          
        </select>
      </label>
    </div>

	<div className="row onlyMob" style={{marginBottom: "4%"}}>
      <label className="select" for="slct">
        <select id="slct3" required="required">
          <option value="" selected="selected">Design and Development</option>
          <option value="#">Business Development</option>
          <option value="#">Content Writer</option>
          <option value="#">Graphic Designer</option>
        </select>
      </label>
    </div>

	  <div className="row">
     
          <div className="col-4 flip-card">
            <div className="flip-card-inner">
              <div className="card">
                <div className="eyeDiv btn">
                  <img src={closeEye} className="eye" loading="lazy" alt="" />
                </div>

                <div className="cardContent">
                  <span>{}</span>
                </div>
                <div className="bottomDiv">
                  <span>{jobProfiles.experience}</span>
                </div>
              </div>
              <div className="flip-card-back">
                <div className="backContent">
                  <h3>{jobProfiles.jobTitle}</h3>
                  <span>{jobProfiles.description}</span>
                </div>
                <div className="location">
                  <img className="locIcon" src={locIcon} alt="" />
                  <span style={{marginRight: "10%"}}>{jobProfiles.location}</span>
                  <img style={{width: "8%"}} src={clock} alt="" loading="lazy" />
                  <span>{jobProfiles.jobType}</span>
                </div>
                <div className="bottomDivBack row">
                  <div className="col-6 blackBottom">
                    <img src={ps} alt="" />
                  </div>

                  <div className="col-5 btn">
                    <a href="/hiring-app/">Apply Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
     </div>


	
			</section>
		 
		</>
	);
}
