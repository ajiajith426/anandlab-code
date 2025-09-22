import React from 'react'
import manualtheraphy from "../../../assets/images/excersice-therapy.jpg"
import clkimg from "../../../assets/images/clock.png"
import padimg from "../../../assets/images/pad.png"

export default function AboutService() {
  return (
    <section className="about-services">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
            <div className="special-instruction">
                <h3>About Exercise Therapy</h3>
                <p>Set of condition specific exercises</p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                    Types of Exercises 
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                    Indications
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a className="nav-link" id="contra-tab" data-toggle="tab" href="#contra" role="tab" aria-controls="contra" aria-selected="false">
                    Contraindications
                    </a>
                  </li>  
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <div className="detilos-expl indication-details">
                    <ul>
                      <li>
                      Strenthening Exercises - using Manual Resisitance
                      </li>
                      <li>
                      Stretching Exercises   
                      </li>
                      <li>
                      Home Exercises
                      </li>
                      <li>
                      Free Execises
                      </li>
                    </ul>
                  </div>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="detilos-expl indication-details">
                    <ul>
                      <li>
                      All conditions
                      </li>
                    </ul>
                  </div>
                  </div> 
                  <div className="tab-pane fade" id="contra" role="tabpanel" aria-labelledby="contra-tab">
                  <div className="detilos-expl indication-details">
                    <ul>
                      <li>
                      Open wounds
                      </li>
                      <li>
                      Fever
                      </li>
                      <li>
                      Acute injuries
                      </li>
                    </ul>
                  </div>
                  </div> 
                </div>
              </div>

                </div>
                <div className="col-lg-4 mt-4">
                <img src={manualtheraphy} alt="call" className="img-fluid" />
                </div>
            </div>
            <div className="row">
              <div className="note-duration">
                    <div className="col-lg-8">
                      <div className="flyer-box">
                      <img src={padimg} alt="call" className="img-fluid" /> 
                      <h4>Note</h4>
                      <p>To prevent recurrence of pain exercises should be done regularly even after the pain subsides</p>
                      </div>
                      <div className="flyer-box">
                      <img src={clkimg} alt="call" className="img-fluid" /> 
                      <h4>Duration</h4>
                      <p>15-30 minutes</p>
                      </div>
                    </div>
              </div>
            </div>
        </div>
    </section>
  )
}
