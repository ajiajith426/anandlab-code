import React, { useEffect } from "react";
import InnerCommonBanner from "./Sections/InnerCommonBanner";
import Brochure from "../../assets/images/Golden-50-Years-CME.pdf";

export default function NeubergAnand50Years() {
    useEffect(() => {
        document.title = "Neuberg Anand 50 Years";
        window.scroll(0, 0)
    }, []);

    return (
        <>
            <section className="NeubergAnand50Years-page p-0">
                <InnerCommonBanner />

                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <p className="mt-4 text-center text-purple page-para px-3">We are thrilled to announce the Golden Jubilee Celebration of Neuberg Anand Reference Laboratory (NARL). Since 1974, we have been at the forefront of diagnostic excellence, and now, we invite you to join us in commemorating 50 remarkable years.
                            </p>
                        </div>
                    </div>

                    <div className="row director-row">
                        <div className="col-sm-6">
                            <div className="director-module">
                                <p> Dr.Jayaram N <br /> Director, NARL, NAALM</p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="director-module">
                                <p> Dr.Sujay Prasad <br /> Director, NARL, NAALM</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row mb-3 p-0">
                    <div className="col-sm-5 col-md-5 col-lg-3 p-0">
                        <div className="date-block pink-bg">
                            <h2>4<span>th</span> MAY</h2>
                            <h4>9 AM - 5 PM</h4>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-7 col-lg-9 p-0">
                        <div className="block-text-module d-flex align-items-center pink-light-bg">
                            <ul>
                                <li>Approach to immunohistochemistry
                                    <br />
                                    <span>- Staining & Interpretation</span>
                                </li>
                                <li>Diagnostic Approach to Anemias</li>
                                <li>Therapeutic drug monitoring using mass spectrometry</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 p-0">
                    <div className="col-sm-5 col-md-5 col-lg-3 p-0">
                        <div className="date-block purple-bg">
                            <h2>10<span>th</span>-11<span>th</span> MAY</h2>
                            <h4>9 AM - 5 PM</h4>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-7 col-lg-9 p-0">
                        <div className="block-text-module d-flex align-items-center purple-light-bg">
                            <ul>
                                <li>Cytogenetics Workshop</li>
                                <li>Karyotyping and FISH Techniques in Diagnostics</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 p-0">
                    <div className="col-sm-5 col-md-5 col-lg-3 p-0">
                        <div className="date-block voilet-bg">
                            <h2>11<span>th</span> MAY</h2>
                            <h4>9 AM - 5 PM</h4>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-7 col-lg-9 p-0">
                        <div className="block-text-module d-flex align-items-center voilet-light-bg">
                            <ul>
                                <li>Theory & practice of  diagnosis of latent tuberculosis</li>
                                <li>Quality in Diagnostics
                                    <span>- It is not rocket science (VIRTUAL)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mb-3 p-0">
                    <div className="col-sm-5 col-md-5 col-lg-3 p-0">
                        <div className="date-block blue-bg">
                            <h2>18<span>th</span> MAY</h2>
                            <h4>9 AM - 5 PM</h4>
                        </div>
                    </div>
                    <div className="col-sm-7 col-md-7 col-lg-9 p-0">
                        <div className="block-text-module d-flex align-items-center blue-light-bg">
                            <ul>
                                <li>Approach to and Interpretation of Serum Protein Electrophoresis
                                    and Immunofixaiton</li>
                                <li>Flow Cytometric Approach to Primary Immunodeficiency Disorders</li>
                            </ul>
                        </div>
                    </div>
                </div> */}

                    {/* <div className="row py-5 mt-3">
                    <div className="col-sm-6 custom-border-right d-flex">
                        <div className="page-para text-center text-purple w-80 m-auto">
                            <p><b>Registration Fee:</b></p>

                            <p className="text-center mb-3">For the 2 day workshop on
                                “Karyotyping and FISH techniques in diagnostics”: <b>Rs 1180</b> (Rs.1000+18%GST) .
                            </p>

                            <p>For all other workshops: <b>Rs. 590</b> (Rs.500+ 18% GST)</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="page-para text-center text-purple">
                            <p><b>How to Register:</b> </p>
                            <p>Please send an email to</p>
                            <a href="mail-to:dakshayani.s@naalm.com" className="purple-btn">dakshayani.s@naalm.com </a>
                            <p>to confirm availability of your workshop of choice.</p>
                        </div>
                    </div>
                </div> */}
                    {/* <div className="row">
                        <h3 className="text-center anand-50years-heading mx-auto mb-4 mt-5">50 Golden Years CME Program</h3>
                    </div> */}
                </div>
            </section>

            {/* <section className="day-1-section">
                <div className="container">
                    <div className="row">
                        <h3 className="heading text-white font-weight-normal">Day 1- <b className="bold"> Saturday, 25th May 2024</b></h3>

                        <div className="event-table">
                            <table>
                                <thead>
                                    <th colSpan={3} className="theading-heading">Session 1 : <b className="bold">14:00 to 16:00</b></th>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="left-heading">WELCOME ADDRESS</td>
                                        <td className="right-heading">Dr. Jayaram N</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading">Enjoying the journey towards “Zero Error”</td>
                                        <td className="right-heading">Dr. Manisha Sandeep Patwardhan</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading">Maximizing the utility of routine laboratory tests- Case based examples</td>
                                        <td className="right-heading">Department of Hematology</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading">Keynote Address- “Fifty Years of Medical Laboratory Services In India-Glimpses” </td>
                                        <td className="right-heading">Dr. Thuppil Venkatesh</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading pb-4">HIGH-TEA</td>
                                        <td className="right-heading pb-4">&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="event-table mt-5">
                            <table>
                                <thead>
                                    <th colSpan={3} className="theading-heading">Session 2 : <b className="bold">16:30 to 19:10</b></th>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="left-heading">Smt. Susheela Ramaprasad
                                            Oration - <br /> "Community welfare and the NGO" </td>

                                        <td className="right-heading">Dr. R Balasubramaniam</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading">"Artificial Intelligence in the
                                            laboratory -Triumphs and Tribulations"</td>
                                        <td className="right-heading">Dr. Manisha Sandeep Patwardhan</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading pb-4">Panel discussion New test introduction <br />- Challenges and ways to overcome them</td>
                                        <td className="right-heading pb-4">NETWORKING & DINNER</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            <section className="day-2-section">
                <div className="container">
                    <div className="row">
                        <h3 className="heading text-white font-weight-normal">Day 2- <b className="bold">Sunday, 26th May 2024 </b></h3>

                        <div className="event-table">
                            <table>
                                <thead>
                                    <th colSpan={3} className="theading-heading">Session 3 : <b className="bold"> 09:00 to 11:30</b></th>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="left-heading">Update in Bladder Pathology</td>
                                        <td className="right-heading">Dr. Sujay Prasad</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading">The normal GI endoscopic biopsy</td>
                                        <td className="right-heading">Prof. S Datta Gupta</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading">Managing customer expectations through process excellence</td>
                                        <td className="right-heading">Dr. Jayaram N</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading">TEA BREAK</td>
                                        <td className="right-heading pb-4">&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="event-table mt-5">
                            <table>
                                <thead>
                                    <th colSpan={3} className="theading-heading">Session 4 : <b className="bold">11:30 to 13:40</b></th>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="left-heading">SYMPOSIUM- Myeloma end to end solutions <br />provided by the laboratory</td>

                                        <td className="right-heading">Dr. Sujay Prasad</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading">FOCUS-”Primary Immunodeficiency”- <br />
                                            The role of a clinical & laboratory jugalbandi</td>
                                        <td className="right-heading">Dr. Avanthvikas</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading pb-4">Concluding Remarks & Vote of Thanks</td>
                                        <td className="right-heading pb-4">Dr. Sujay Prasad</td>
                                    </tr>
                                    <tr>
                                        <td className="left-heading">LUNCH</td>
                                        <td className="right-heading pb-4">&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="program-details-section pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="bolder text-center mx-auto text-purple heading">PROGRAM DETAILS <a href={Brochure} target="_blank" className="brochure-btn d-block">Download Brochure</a></h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="program-details-bg px-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-7">
                            <div className="program-details-list py-4">
                                <h5>Who should attend?</h5>
                                <p>Lab Directors, Pathologists, Biochemists, Faculty <br /> and PG students of Pathology</p>

                                <h5>Maximum number of participants</h5>
                                <p>80 (First come first serve basis)</p>

                                <h5>Date & Time</h5>
                                <p>Day 1- 25th May |  2 PM TO 7 PM <br />
                                    Day 2-26th May |  9 AM TO 2 PM</p>

                                <h5>Registration Fee</h5>
                                <p>Rs.1180/- (Rs.1000 + 18% GST ) </p>

                                <div>
                                    <p className="text-black mb-0">Payment Details:</p>
                                    <p className="mb-0">Bank : <span className="program-purple-text">HDFC BANK LTD, MG Road, Bengaluru</span></p>
                                    <p className="mb-0">Account No : <span className="program-purple-text">50200022407969</span></p>
                                    <p className="mb-0"> className="mb-0"IFSC Code : <span className="program-purple-text">HDFC0000076</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 py-4 program-coordinators-section bg-white">
                            <div className="text-center pt-4">
                                <h3 className="mx-auto program-coordinators-heading">PROGRAM COORDINATORS</h3>

                                <h4 className="program-purple-text font-weight-lighter mt-5">Dr. KNC Murthy</h4>
                                <p className="program-yellow-text bold mb-4 mt-2">kncmurthy@naalm.com</p>

                                <h4 className="program-purple-text font-weight-lighter mt-5">Ms. Dakshayani S</h4>
                                <p className="program-yellow-text bold mb-4 mt-2">dakshayani.s@naalm.com</p>

                                <h4 className="program-purple-text font-weight-lighter mt-5">Mr. Nandeesh M</h4>
                                <p className="program-yellow-text bold">nandeeshm@neubergdiagnosics.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="register-now-section">
                <div className="container">
                    <div className="row text-center">
                        <h3 className="bolder text-center mx-auto text-purple heading">REGISTRATION PROCESS</h3>
                        <h5 className="program-purple-text bold mb-4 text-center">Please click ‘Register now’ to register online. Payment can be made either through bank transfer or UPI (details in registration form)</h5>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSes2gR0nAdAZrDoq_aPC-n7tBroslXrjFrvlzFnPm-TP94FMg/viewform" target="_blank" className="orange-btn d-inline-block m-auto">Register Now</a>
                    </div>
                </div>
            </section>
        </>
    );
}