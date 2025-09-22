import React, { useEffect } from "react";
import InnerCommonBanner from "./Sections/InnerCommonBanner";

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
                            <p className="mt-4 text-center text-purple page-para">To commemorate 50 years of our existence, it is our privilege to invite you
                                to join us for a series of hands-on and interactive workshops at
                                <b> Neuberg Anand Reference Laboratory, Bangalore</b> , in the month of May
                                2024.
                            </p>
                            <p className="mt-1 text-center text-purple page-para"> These workshops have been designed to address various aspects of
                                diagnostic medicine and cater to both practicing doctors and laboratory
                                professions alike.
                            </p>
                        </div>
                    </div>

                    <div className="row">
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



                    <div className="row">
                        <h3 className="text-center anand-50years-heading mx-auto mb-3">50 Golden Years CME Program</h3>
                    </div>
                </div>
            </section>

            <section className="day-1-section">
                <div className="container">
                    <div className="row">
                        <h3 className="heading text-white font-weight-normal">Day 1- <b className="bold">Saturday, 25th May 2024 </b></h3>

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
                                        <td className="left-heading">HIGH-TEA</td>
                                        <td className="right-heading">&nbsp;</td>
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
                                        <td className="left-heading">Panel discussion New test introduction <br />- Challenges and ways to overcome them</td>
                                        <td className="right-heading">NETWORKING & DINNER</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}