import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-11.webp";
import lab from "../../assets/images/lab.jpg";
import nurse from "../../assets/images/doc-nur.png";

export default function PreparingForHeathCheckup() {
  useEffect(() => {
    document.title = "Preparing For Heath Checkup";
    window.scroll(0, 0)
  }, []);
  return (

    <div>


      <section className='inner-banner'>
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="caption-details bnr-txt">
                  <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li> / </li>
                    <li> Patients </li>
                    <li> / </li>
                    <li> Preparing for Health Checkup </li>
                  </ul>
                  <h1>
                    Prepare yourself for <br></br>a correct lab result
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='prepareing-checkup'>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-7">
              <div className="rnge-prds text-left">
                <div className="common-heading">
                </div>
                <div className="common-title drk animated fadeInUp mb-3">
                  <h4>Test Preparation</h4>
                </div>
                <div className="common-para1 drk detilos-expl indication-details p-0">
                  <p className="animated fadeInUp">Prior to visiting our Lab, you may want to ask your physician the following questions:</p>
                  <ul>
                    <li>What test is being performed?</li>
                    <li>Why does the test need to be done?</li>
                    <li>What type of specimen is needed for testing (blood, saliva, urine, semen, stool, hair) When can I expect my test results?</li>
                    <li>How will the test results affect the course of my care?</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="legacy-mage text-center">
                <img src={lab} alt="call" className="img-fluid" /><br></br><br></br>
                <div className='cmn-buton'>
                  <p>
                    <Link to="/reach-us">Reach Us</Link>
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      <section className='testing-sector text-white'>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-5">

            </div>

            <div className="col-lg-7">
              <div className="rnge-prds text-left">
                <div className="common-title drk animated fadeInUp mb-3">
                  <h4> What to expect during your lab visit? </h4>
                </div>
                <div className="common-para1 drk detilos-expl indication-details p-0">
                  <b>Our staff will make the specimen collection process as safe, quick, and comfortable as possible while safeguarding your dignity and privacy.</b><br></br><br></br>
                  <h5>Scheduling appointments:</h5>
                  <p>Call 1800 425 1974 in advance to fix an appointment. The entire checkup may take about 3 to 4 hours, depending on the packages chosen. Hence, plan your day accordingly.  If you have diabetes (High blood sugars) / High blood pressure / heart disease or have suffered any illness or fever in the recent past, inform the customer care executives in advance.</p>
                  <p><b>Corporates</b>: All corporate clients are requested to bring the original referral letter from their office. For verification, kindly bring a valid photo ID card.</p>
                  <br /> <br />
                  <div className='cmn-buton'>
                    <p>
                      <Link to="/reach-us">Reach Us</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='prepareing-checkup'>
        <div className="container">
          <div className="row align-items-top">


            <div className="col-lg-5">
              <div className="legacy-mage text-center">
                <img src={nurse} alt="call" className="img-fluid" /><br></br><br></br>
                <div className='cmn-buton'>
                  <p>
                    <Link to="/reach-us">Reach Us</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="rnge-prds pl-3 text-left">
                <div className="common-title drk animated fadeInUp mb-3">
                  <h4>General Instructions</h4>
                </div>
                <div className="common-para1 drk detilos-expl indication-details p-0">
                  <ul>
                    <li>	No physical exercise 24 hours prior the test </li>
                    <li>	No alcohol consumption 24 hours prior the test </li>
                    <li>	No smoking for an hour prior the test </li>
                    <li>	10-15 minutes prior lab test, you should be seated and relaxed</li>
                    <li>	Inform about Insulin syringes drug / medication and nutritional supplements</li>
                    <li>	Medications
                      <ul className="corilcle">
                        <li>If you are on medication, kindly carry your medicines along with you.</li>
                        <li>If you are diabetic or hypertensive please take the scheduled medication on the day of the checkup after giving the blood and urine sample</li>
                      </ul>
                    </li>
                    <li>Instructions for women
                      <ul className="corilcle">
                        <li>Inform the customer care executive if you are pregnant or if you think you might be pregnant, as exposure to radiation (X-ray, mammogram, DXA) is not advisable during pregnancy.</li>
                        <li>Kindly do not undergo health checks during the monthly menstrual period. It is advised to have your wellness check about one week after the last day of menstruation.</li>
                      </ul>
                    </li>
                    <li>Dress code
                      <ul className="corilcle">
                        <li>Wear comfortable and casual clothes (preferably, half sleeve attire for men and women) that can be easily removable. Wear comfortable footwear as you will have to change them frequently while undergoing various tests.</li>
                        <li>Avoid wearing jewellery and metallic ornaments.</li>
                      </ul>
                    </li>
                    <li>Previous medical records
                      <ul className="corilcle">
                        <li>Please bring your previous medical records (1-3 year records) on the day of consultation</li>
                      </ul>
                    </li>
                    <li>Special Instructions  for Tread Mill Test
                      <ul className="corilcle">
                        <li>Male individuals undergoing the tread mill test are requested to shave their chest prior to the test</li>
                        <li>ECG has to be brought with the patient at the time of tread mill test</li>
                        <li>It is advisable to have light breakfast one hour prior to the tread mill test</li>
                        <li>If you are diagnosed / suspected to have a heart disease or you are more than 60 years of age, it is advised that you be accompanied by a responsible adult attender for TMT</li>
                      </ul>
                    </li>
                    <li>Eye: In case, you are wearing contact lenses/spectacles, please carry them for your detailed eye examination/tests</li>
                    <li>Audiometry: If you are using hearing aids, please carry them along on the day of examination</li>
                    <li>Ultrasound Scan
                      <ul className="corilcle">
                        <li>Please avoid high fat meal or snack and fried foods 4 to 6 hours prior to the scan</li>
                        <li>If you are diagnosed with gall bladder problems it is advisable to undergo the scan in fasting status</li>
                        <li>In case, you are diagnosed with renal or ovarian cysts or prostate enlargement in the past then please carry your old reports for serial monitoring and size charting on the day of the scan and consultation</li>
                      </ul>
                    </li>
                    <li>Dental: Please rinse your mouth with water prior to the examination</li>
                    <li>DXA Scan
                      <ul className="corilcle">
                        <li>Avoid calcium supplements & Vitamin D 24hrs before the test.</li>
                        <li>In case a patient has undergone Oral, Rectal / IV contrast scans - then DXA ( BMD test) can only be performed after one week (7days) after any one of these studies. </li>
                        <li>Tests WILL NOT be done on pregnant women.</li>
                        <li>Normal diet on the day of the test</li>
                        <li>Data from different machines cannot be compared or applied in determining if a significant change in BMD has occurred. The same machine must be used for follow up DXA scans to facilitate clinically useful comparisons.</li>
                        <li>Carry their old scan reports for the study</li>
                        <li>It is advisable to consult a doctor before undergoing the scan. </li>
                        <li>A valid prescription / Filled TRF from the referral doctor is a prerequisite for the study.</li>
                        <li>We currently don't have the facility for pediatric & whole body DXA studies. </li>
                        <li>Please note that DXA scan generally is indicated/ done in ( PFA the ISCD official positions/ guidelines on DXA scans )
                          <ul className="linecode">
                            <li>Women more than 65 years of age and men more than 70 years.</li>
                            <li>Perimenopausal women (&gt; 50yrs) with high risk factors like low body weight, prior fractures, condition associated with bone loss ( Eg: Cancers, Arthritis)</li>
                            <li>The Dexa Scan test is NOT indicated in young healthy adults</li>
                          </ul>
                        </li>
                        <li>Calcium tablets should not be taken in the 24 hours before the examination
                          Patients should wear comfortable, loose-fitting clothes with the avoidance of metal components such as zippers.
                        </li>
                        <li>If prior DEXA was done, the patient should be instructed to bring results.
                          For body composition studies, patients should be scanned in the morning after a 12-hour overnight fast for consistency.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>

  )
}
