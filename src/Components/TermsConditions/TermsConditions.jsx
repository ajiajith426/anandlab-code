import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import bannerimage from "../../assets/images/inner-banner-2.jpg";

export default function TermsConditions() {
  useEffect(() => {
    document.title = "Terms & Conditions";
    window.scroll(0, 0)
  }, []);
  return (

    <div>

      <section className='inner-banner'>
        <img src={bannerimage} alt="call" className="img-fluid" />
        <div className="inner-caption">
          <div className="container">
            <div className="row">
              <div className="caption-details bnr-txt">
                <ul>
                  <li><Link to='/'> Home </Link></li>
                  <li> / </li>
                  <li> Terms & Conditions </li>
                </ul>
                <h1>
                  Can be started over night, But It<br></br> takes years to build an Institution.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='people-function phsiyo-therphy'>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common-heading">
                <h2> <span className='inlne'>Terms &</span> Conditions</h2>
              </div>
              <p>PLEASE READ THIS TERMS OF SERVICE AGREEMENT CAREFULLY. BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.</p>
              <p>This Terms of Service Agreement (the "Agreement") governs your use of this website, [https://www.anandlab.com/]. This Agreement includes, and incorporates by this reference, the policies and guidelines referenced below. Anand Diagnostic Laboratory reserves the right to change or revise the terms and conditions of this Agreement at any time by posting any changes or a revised Agreement on this Website. Anand Diagnostic Laboratory will alert you that changes or revisions have been made by indicating on the top of this Agreement the date it was last revised. The changed or revised Agreement will be effective immediately after it is posted on this Website. Your use of the Website following the posting any such changes or of a revised Agreement will constitute your acceptance of any such changes or revisions. Anand Diagnostic Laboratory encourages you to review this Agreement whenever you visit the Website to make sure that you understand the terms and conditions governing use of the Website. This Agreement does not alter in any way the terms or conditions of any other written agreement you may have with Anand Diagnostic Laboratory for other products or services. If you do not agree to this Agreement (including any referenced policies or guidelines), please immediately terminate your use of the Website. If you would like to print this Agreement, please click the print button on your browser toolbar.</p>
              <div className="special-instruction pol-icy mb-2">
                <h3>Products/Service</h3>
              </div>
              <p><strong>Terms of Offer: </strong> This Website offers certain Products/Services. By placing an enquiry for Products/service through this Website, you agree to the terms set forth in this Agreement.</p>
              <p><strong>Customer Solicitation: </strong> Unless you notify our call center reps or direct Anand Diagnostic Laboratory sales reps, service executives, while they are calling you, of your desire to opt out from further direct company communications and solicitations, you are agreeing to continue to receive further emails and call solicitations Anand Diagnostic Laboratory  and its designated in house or third party call team(s).</p>
              <p>Opt Out Procedure: We provide 3 easy ways to opt out of from future solicitations.</p>
              <div className="detilos-expl indication-details policeis-migrate">
                <ul>
                  <li>You may use the opt-out link found in any email solicitation that you may receive.</li>
                  <li>You may also choose to opt out, via sending your email address to: [hc@anandlab.com].</li>
                </ul>
              </div>
              <p><strong>Proprietary Rights:</strong> Anand Diagnostic Laboratory  has proprietary rights and trade secrets in the Products. You may not copy, reproduce, resell or redistribute any Product manufactured and/or distributed by Anand Diagnostic Laboratory . Anand Diagnostic Laboratory  also has rights to all trademarks and trade dress and specific layouts of this webpage, including calls to action, text placement, images and other information.</p>
              <div className="special-instruction pol-icy mb-2">
                <h3>Website</h3>
              </div>
              <p>Content, Intellectual Property, Third Party Links: This Website also offers information and marketing materials along with information, both directly and through indirect links to third-party websites. Anand Diagnostic Laboratory  does not always create the information offered on this Website; instead the information is often gathered from other sources. Unauthorized use of the material may violate copyright, trademark, and/or other laws. You acknowledge that your use of the content on this Website is for personal, noncommercial use. Any links to third-party websites are provided solely as a convenience to you. Anand Diagnostic Laboratory  does not endorse the contents on any such third-party websites. Anand Diagnostic Laboratory  is not responsible for the content of or any damage that may result from your access to or reliance on these third-party websites. If you link to third-party websites, you do so at your own risk.<br /><br />
                Use of Website: Anand Diagnostic Laboratory  is not responsible for any damages resulting from use of this website by anyone. You will not use the Website for illegal purposes. You will (1) abide by all applicable local, state, national, and international laws and regulations in your use of the Website (including laws regarding intellectual property), (2) not interfere with or disrupt the use and enjoyment of the Website by other users, (3) not resell material on the Website, (4) not engage, directly or indirectly, in transmission of "spam", chain letters, junk mail or any other type of unsolicited communication, and (5) not defame, harass, abuse, or disrupt other users of the Website<br /><br />
                License: By using this Website, you are granted a limited, non-exclusive, non-transferable right to use the content and materials on the Website in connection with your normal, noncommercial, use of the Website. You may not copy, reproduce, transmit, distribute, or create derivative works of such content or information without express written authorization from Anand Diagnostic Laboratory  or the applicable third party (if third party content is at issue).<br /><br />
                Posting: By posting, storing, or transmitting any content on the Website, you hereby grant Anand Diagnostic Laboratory  a perpetual, worldwide, non-exclusive, royalty-free, assignable, right and license to use, copy, display, perform, create derivative works from, distribute, have distributed, transmit and assign such content in any form, in all media now known or hereinafter created, anywhere in the world. Anand Diagnostic Laboratory  does not have the ability to control the nature of the user-generated content offered through the Website. You are solely responsible for your interactions with other users of the Website and any content you post. Anand Diagnostic Laboratory  is not liable for any damage or harm resulting from any posts by or interactions between users. Anand Diagnostic Laboratory  reserves the right, but has no obligation, to monitor interactions between and among users of the Website and to remove any content.</p>
              <div className="special-instruction pol-icy mb-2">
                <h3>Disclaimer of Warranties</h3>
              </div>
              <p>Your use of this website and/or products is at your sole risk. The website and products are offered on an "as is" and "as available" basis. Without limiting the generality of the foregoing, Anand Diagnostic Laboratory  makes no warranty:</p>
              <div className="detilos-expl indication-details policeis-migrate">
                <ul>
                  <li>That the information provided on this website is accurate, reliable, complete, or timely.</li>
                  <li>That the links to third-party websites are to information that is accurate, reliable, complete, or timely.</li>
                  <li>No advice or information, whether oral or written, obtained by you from this website will create any warranty not expressly stated herein.</li>
                  <li>As to the results that may be obtained from the use of the products or that defects in products will be corrected.</li>
                  <li>Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you.</li>
                </ul>
              </div>
              <div className="special-instruction pol-icy mb-2">
                <h3>Indemnification</h3>
              </div>
              <p>You will release, indemnify, defend and hold harmless Anand Diagnostic Laboratory  and any of its contractors, agents, employees, officers, directors, shareholders, affiliates and assigns from all liabilities, claims, damages, costs and expenses, including reasonable attorneys' fees and expenses, of third parties relating to or arising out of (1) this Agreement or the breach of your warranties, representations and obligations under this Agreement; (2) the Website content or your use of the Website content; (3) the Products or your use of the Products (including Trial Products); (4) any intellectual property or other proprietary right of any person or entity; (5) your violation of any provision of this Agreement; or (6) any information or data you supplied to Anand Diagnostic Laboratory . When Anand Diagnostic Laboratory  is threatened with suit or sued by a third party, Anand Diagnostic Laboratory  may seek written assurances from you concerning your promise to indemnify Anand Diagnostic Laboratory ; your failure to provide such assurances may be considered by Anand Diagnostic Laboratory  to be a material breach of this Agreement. Anand Diagnostic Laboratory  will have the right to participate in any defense by you of a third-party claim related to your use of any of the Website content or Products, with counsel of Anand Diagnostic Laboratory  choice at its expense. Anand Diagnostic Laboratory  will reasonably cooperate in any defense by you of a third-party claim at your request and expense. You will have sole responsibility to defend Anand Diagnostic Laboratory  against any claim, but you must receive Anand Diagnostic Laboratory  prior written consent regarding any related settlement. The terms of this provision will survive any termination or cancellation of this Agreement or your use of the Website or Products.</p>
              <div className="special-instruction pol-icy mb-2">
                <h3>Agreement to be bound</h3>
              </div>
              <p>By using this Website or ordering Products, you acknowledge that you have read and agree to be bound by this Agreement and all terms and conditions on this Website.</p>
              <div className="special-instruction pol-icy mb-2">
                <h3>General</h3>
              </div>
              <p>Force Majeure: Anand Diagnostic Laboratory  will not be deemed in default here under or held responsible for any cessation, interruption or delay in the performance of its obligations hereunder due to earthquake, flood, fire, storm, natural disaster, act of God, war, terrorism, armed conflict, labor strike, lockout, or boycott.<br /><br />
                Cessation of Operation: Anand Diagnostic Laboratory  may at any time, in its sole discretion and without advance notice to you, cease operation of the Website and distribution of the Products.<br /><br />
                Entire Agreement: This Agreement comprises the entire agreement between you and Anand Diagnostic Laboratory  and supersedes any prior agreements pertaining to the subject matter contained herein.<br /><br />
                Effect of Waiver: The failure of Anand Diagnostic Laboratory  to exercise or enforce any right or provision of this Agreement will not constitute a waiver of such right or provision. If any provision of this Agreement is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties' intentions as reflected in the provision, and the other provisions of this Agreement remain in full force and effect.<br /><br />
                Governing Law, Jurisdiction: This Website originates from the [Chennai, Tamil Nadu]. This Agreement will be governed by the laws of the State of [Tamil Nadu] without regard to its conflict of law principles to the contrary. Neither you nor Anand Diagnostic Laboratory  will commence or prosecute any suit, proceeding or claim to enforce the provisions of this Agreement, to recover damages for breach of or default of this Agreement, or otherwise arising under or by reason of this Agreement, other than in courts located in State of [Tamil Nadu]. By using this Website or enquiring about Products, you consent to the jurisdiction and venue of such courts in connection with any action, suit, proceeding or claim arising under or by reason of this Agreement. You hereby waive any right to trial by jury arising out of this Agreement and any related documents.<br /><br />
                Statute of Limitation: You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the Website or Products or this Agreement must be filed within one (1) year after such claim or cause of action arose or be forever barred.<br /><br />
                Waiver of Class Action Rights: By entering into this agreement, you hereby irrevocably waive any right you may have to join claims with those of other in the form of a class action or similar procedural device. Any claims arising out of, relating to, or connection with this agreement must be asserted individually.<br /><br />
                Termination: Anand Diagnostic Laboratory  reserves the right to terminate your access to the Website if it reasonably believes, in its sole discretion, that you have breached any of the terms and conditions of this Agreement. Following termination, you will not be permitted to use the Website and Anand Diagnostic Laboratory  may, in its sole discretion and without advance notice to you, cancel any outstanding orders for Products. If your access to the Website is terminated, Anand Diagnostic Laboratory  reserves the right to exercise whatever means it deems necessary to prevent unauthorized access of the Website. This Agreement will survive indefinitely unless and until Anand Diagnostic Laboratory chooses, in its sole discretion and without advance to you, to terminate it.<br /><br />
                BY USING THIS WEBSITE OR ORDERING PRODUCTS FROM THIS WEBSITE YOU AGREE TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS OF THIS AGREEMENT.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
