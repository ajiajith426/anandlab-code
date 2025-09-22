import React from 'react'
import { Link } from 'react-router-dom';
import award from '../../../assets/images/award.png'
export default function Accretions() {
  return (
    <section className="accrediation">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="common-heading">
                  <h2><span>NaBL </span>Accreditation</h2>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="acrdes-solution">
                  <p><img src={award} alt="" className="img-fluid"/> ADL was first accredited in 2001, and we were the first diagnostic laboratory in 
                    South India to gain NABL accreditation.
                    <span><Link to="/accreditation">Read More...</Link></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
