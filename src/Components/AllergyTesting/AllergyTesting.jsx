import React, { useEffect, useState } from "react";
import Sliders from "react-slick";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { FormResponse } from "../../Helpers/FormResponse";
import { useDispatch } from "react-redux";
import { setLoading } from "../../Redux/Actions/LoaderAction";
import whyAnand1 from "../../assets/images/why-anand-1.png";
import whyAnand2 from "../../assets/images/why-anand-2.png";
import whyAnand3 from "../../assets/images/why-anand-3.png";
import whyAnand4 from "../../assets/images/why-anand-4.png";
import howItWorks1 from "../../assets/images/how-it-works-1.png";
import howItWorks2 from "../../assets/images/how-it-works-2.png";
import howItWorks3 from "../../assets/images/how-it-works-3.png";
import howItWorks4 from "../../assets/images/how-it-works-4.png";
import allergyTest1 from "../../assets/images/allergy-test-1.png";
import allergyTest2 from "../../assets/images/allergy-test-2.png";
import allergyTest3 from "../../assets/images/allergy-test-3.png";
import allergyTest4 from "../../assets/images/allergy-test-4.png";
// import allergyBanner from "../../assets/images/allergy_banner.png";
import allergyBanner from "../../assets/images/allergy-new.png";
import commitmentIcon1 from "../../assets/images/commitment-icon-1.png";
import commitmentIcon2 from "../../assets/images/commitment-icon-2.png";
import commitmentIcon3 from "../../assets/images/commitment-icon-3.png";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ReCAPTCHA from 'react-google-recaptcha';


export default function AllergyTesting() {
  const [open, setOpen] = useState(true);
  const [Loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleRecaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setRecaptchaValue(value);
  };

  const gtmScript1 = document.createElement("script");
  gtmScript1.async = true;
  gtmScript1.src = "https://www.googletagmanager.com/gtag/js?id=AW-10841898141";

  const gtmScript2 = document.createElement("script");
  gtmScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10841898141');
    `;

  const gtmScript3 = document.createElement("script");
  gtmScript3.innerHTML = `
      gtag('config', 'AW-10841898141/8FEGCJn-otAZEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
  `;

  const gtmScript5 = document.createElement("script");
  gtmScript5.innerHTML = `
      gtag('config', 'AW-10841898141/GDwECMeVpv0YEJ356LEo', {
        'phone_conversion_number': '+918035287579'
      });
  `;

  const gtmScript8 = document.createElement("script");
  gtmScript8.innerHTML = `
       gtag('config', 'AW-10841898141/QgvjCPu13tMZEJ356LEo', {
    'phone_conversion_number': '+918035287579'
      });
  `;

  const gtmScript4 = document.createElement("script");
  gtmScript4.innerHTML = `
    function gtag_report_conversion(url) {
      var callback = function () {
        if (typeof(url) != 'undefined') {
          window.location = 'https://www.anandlab.com/anand-at-home-thank-you';
        }
      };
      gtag('event', 'conversion', {
          'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo',
          'event_callback': callback
      });
      return false;
    }`;

  // Append the script tags to the head of the document
  document.head.appendChild(gtmScript1);
  document.head.appendChild(gtmScript2);
  document.head.appendChild(gtmScript3);
  document.head.appendChild(gtmScript4);
  document.head.appendChild(gtmScript5);
  document.head.appendChild(gtmScript8);

  // Define the gtag_report_conversion function
  const gtag_report_conversion = (url) => {
    const callback = () => {
      if (typeof (url) !== 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
      'send_to': 'AW-10841898141/Qa7oCKKE9ZoZEJ356LEo',
      'event_callback': callback
    });
  };

  const extractParamsFromURL = (url) => {
    const params = new URLSearchParams(url.split('?')[1]);
    const extractedParams = {};

    for (const [key, value] of params.entries()) {
      extractedParams[key] = value;
    }

    return extractedParams;
  };

  const currentURL = window.location.href;
  const extractedParams = extractParamsFromURL(currentURL);

  const notesValue = Object.entries(extractedParams).map(([key, value]) => `${key}=${value}`).join('&');

  // Convert JavaScript object to JSON string
  const notesDataString = JSON.stringify(notesValue);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required(),
        mobile: Yup.string()
          .matches(/^[6-9]\d{9}$/)
          .required(),
        email: Yup.string().required(),
      })
    ),
  });

  const contactUsFrom = (formData) => {
    if (recaptchaValue) {
      setLoading(true);

      formData.page = "ALLERGY TESTING";
      formData.page_url = window.location.href;
      formData.notes = notesDataString;
      // console.log(notesDataString);

      gtag_report_conversion('https://www.anandlab.com/anand-at-home-thank-you');

      axios.post(API_URL.LANDING_PAGES_FORM, formData)
        .then((res) => {
          // FormResponse()
          navigate("/anand-at-home-thank-you");
          setLoading(false);
          reset();
          setOpen(!open);
        })
        .catch((error) => {
          console.error("Error in Reach Us API:", error);
          setLoading(false); // Make sure to handle loading state even in case of errors
        });
      // console.log('Form submitted successfully');
    } else {
      // Handle the case where reCAPTCHA validation failed
      console.log('Please complete the reCAPTCHA');
      alert('Please check reCAPTCHA');
    }
  };



  // const dispatch = useDispatch();

  // const onSubmit = (data) => {
  //   dispatch(setLoading(true));

  //   var formdata = new FormData();
  //   formdata.append("name", data.name);
  //   formdata.append("page_url", window.location.href);
  //   formdata.append("email", data.email);
  //   formdata.append("mobile", data.mobile);
  //   formdata.append("company_name", data.company_name);
  //   formdata.append("designation", data.designation);
  //   formdata.append("address", data.address);
  //   formdata.append("message", data.message);

  //   var requestOptions = {
  //     method: "POST",
  //     body: formdata,
  //     redirect: "follow",
  //   };

  //   fetch(API_URL.HEALTHCHECKUP_FOR_EMPLOYEES, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.Errors === false) {
  //         reset();
  //         dispatch(setLoading(false));
  //         FormResponse();
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // };
  useEffect(() => {
    document.title = "Home collection for Allergy tests";
    window.scroll(0, 0);

    if (window.location.pathname.includes('Bengaluru')) {
      document.head.appendChild(gtmScript4);
      document.head.appendChild(gtmScript5);
      document.head.appendChild(gtmScript8);
    }
  }, []);



  var consumeing = {
    slidesToScroll: 1,
    infinite: true,
    slidesToShow: 3,
    focusOnSelect: true,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="book-our-heading">BOOK HOME COLLECTION FOR </span>
          <span className="health-check-heading">&nbsp;ALLERGY TESTS</span>
        </div>

        <div className="book-health-form-container">
          <div className="left-form h-100">
            <div className="left-side-form-container">
              <form onSubmit={handleSubmit(contactUsFrom)}>
                <input type="hidden" name="AdTypes" {...register("AdTypes")} />
                {/* <input type="hidden" name="channelType" {...register("channelType")} />
                <input type="hidden" name="location" {...register("location")} />
                <input type="hidden" name="content" {...register("content")} />
                <input type="hidden" name="gclid" {...register("gclid")} /> */}
                <div className="form-container">
                  <h5 className="get-callback-heading">GET A CALLBACK</h5>
                  {errors?.name ? (
                    <small className="text-danger">
                      {errors?.name?.message}
                    </small>
                  ) : (
                    ""
                  )}
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Enter Your Name"
                    className={`name-number-inp ${errors?.name ? "input-error" : ""}`}
                  />
                  {errors?.mobile ? (
                    <small className="text-danger">
                      {"Mobile is a invalid field"}
                    </small>
                  ) : (
                    ""
                  )}
                  <input
                    {...register("mobile")}
                    type="tel"
                    placeholder="Enter Your Mobile Number"
                    className={`name-number-inp ${errors?.mobile ? "input-error" : ""}`}
                  />
                  {errors?.email ? (
                    <small className="text-danger">
                      {"Email is a invalid field"}
                    </small>
                  ) : (
                    ""
                  )}
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Enter Your Email"
                    className={`name-number-inp ${errors?.email ? "input-error" : ""}`}
                  />


                  <ReCAPTCHA
                    sitekey="6Lf_BRIqAAAAAOD6XxxBdBiNnV0EuYM0Hsg1wp_M" // Replace with your actual site key
                    onChange={handleRecaptchaChange}
                    className="text-left my-1"
                  />

                  <div className="radio-inputs-container">
                    {/* <p>
                      Please enter your details and we will reach out to you as
                      soon as we can.
                    </p> */}
                    {errors?.message ? (
                      <div>
                        {/* <small className="text-danger">
                          {"Choose any one!"}
                        </small> */}
                      </div>
                    ) : (
                      ""
                    )}
                    {/* <label>
                    <input
                      type="radio"
                      id="test1"
                      value="Contact me by home visit"
                      name="radio-group"
                      {...register("message")}
                    />
                    Home Visit
                  </label>

                  <label>
                    <input
                      type="radio"
                      id="test2"
                      value="Contact me at lab test"
                      name="radio-group"
                      {...register("message")}
                    />
                    Lab Test
                  </label>

                  <label>
                    <input
                      type="radio"
                      id="test3"
                      value="Contact me by callback"
                      name="radio-group"
                      {...register("message")}
                    />
                    <span>Request Callback</span>
                  </label> */}
                  </div>

                  {Loading === true ? (
                    <button
                      type="submit"
                      disabled
                      className="btn-primary btn-flx-full"
                    >
                      <CgSpinner className="fa-spin mr-2" />
                      Loading ...
                    </button>
                  ) : (
                    <button type="submit" className="submit-connect-form">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="right-img">
            <img src={allergyBanner} alt="" className="dhoni-img-form" />
          </div>
        </div>
      </div>

      <div className="discover-allergy">
        <h4 className="section-heading allergic-section-heading">
          Discover what you are allergic to, from the comfort of your home!
        </h4>
        <p>
          Allergies can range from mild to life-threatening. Our goal is to help
          you identify your allergens so you can lead a healthier, more
          comfortable life. Trust Neuberg for your allergy testing needs.
        </p>
      </div>

      <div className="why-anand-allergy-testing">
        <h4 className="section-heading">What We Test For</h4>
        <div className="why-anand-info-container">
          <div className="allergy-test-container-upper">
            <div className="info-container">
              <img src={allergyTest1} alt="" className="allergy-type-icon" />
              <div className="allergy-types">
                <p>Environmental Allergens</p>
                <span>Such as pollen, dust, and pet dander.</span>
              </div>
            </div>
            <div className="info-container">
              <img src={allergyTest2} alt="" className="allergy-type-icon" />
              <div className="allergy-types">
                <p>Food Allergies</p>
                <span>Including nuts, dairy, soy, and more.</span>
              </div>
            </div>
          </div>
          <div className="allergy-test-container-upper">
            <div className="info-container">
              <img src={allergyTest3} alt="" className="allergy-type-icon" />
              <div className="allergy-types">
                <p>Insect Allergies</p>
                <span>Bee stings, and other insect-related allergens.</span>
              </div>
            </div>
            <div className="info-container">
              <img src={allergyTest4} alt="" className="allergy-type-icon" />
              <div className="allergy-types">
                <p>Other Common</p>
                <span>Allergens Like latex and certain medications.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">Food Allergy Panel </span>
          <p className="text-center text-dark">Allfpelisa</p>
        </div>
      </div>

      <div className="tax-saver-parent-container py-4">
        <div className="tax-saver-check-container">
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Cow's milk</li>
                <li>Milk powder</li>
                <li>Pea</li>
                <li>Coffee</li>
                <li>Yogurt</li>
                <li>Peanut</li>
                <li>Almond</li>
                <li>Tomato</li>
                <li>Spinach</li>
                <li>Onion</li>
                <li>Potato</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>White Mushroom</li>
                <li>Coconut</li>
                <li>Mustard seed</li>
                <li>Orange</li>
                <li>Grape</li>
                <li>Pear</li>
                <li>Apple</li>
                <li>Garlic</li>
                <li>Red pepper</li>
                <li>Ginger</li>
                <li>Wheat flour</li>
              </ul>
            </div>
          </div>
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Rice</li>
                <li>Soya bean</li>
                <li>ChickPea</li>
                <li>Mung bean</li>
                <li>Chicken</li>
                <li>Eggyolk</li>
                <li>Beef</li>
                <li>Lamb meat</li>
                <li>Crab</li>
                <li>Egg White</li>
                <li>Shrimp/Prawn</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Cucumber</li>
                <li>Eggplant</li>
                <li>Pigeon Pea</li>
                <li>Oat</li>
                <li>Oat flour</li>
                <li>Maize flour</li>
                <li>Rohu</li>
                <li>a-lactalbumin</li>
                <li>ß-lactoglobulin</li>
                <li>Codfish</li>
                <li>Gluten</li>
                <li>Chocolate <br />Cocoa- Elisa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-section-container">
          <div className="actual-price-section-button yellow-big-btn">
            <span>
              {/* <br /> */}
              Price
            </span>
            <button className="actual-price-btn">₹6500 </button>
            {/* <p className="empty-div-cut"></p> */}
          </div>
          {/* <div className="offer-price-section-button"> */}
          {/* <span>
              COUPON
              <br /> CODE
            </span> */}
          {/* <button className="offer-price-btn">ALLFPELISA </button> */}
          {/* </div> */}
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">Allergy NonVeg-Extensive</span>
          <p className="text-center text-dark">A0287</p>
        </div>
      </div>

      <div className="tax-saver-parent-container py-4">
        <div className="tax-saver-check-container">
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Codfish</li>
                <li>Crab</li>
                <li>Shrimp</li>
                <li>Pork</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Eggyolk</li>
                <li>Chicken</li>
                <li>Beef</li>
                <li>Lobster</li>
              </ul>
            </div>
          </div>
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Mutton</li>
                <li>Egg White</li>
                <li>Tuna</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Salmon</li>
                <li>Blue Mussel</li>
                <li>Plaice</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-section-container">
          <div className="actual-price-section-button yellow-big-btn">
            <span>
              {/* <br /> */}
              Price
            </span>
            <button className="actual-price-btn">₹6000 </button>
            {/* <p className="empty-div-cut"></p> */}
          </div>
          {/* <div className="offer-price-section-button"> */}
          {/* <span>
              COUPON
              <br /> CODE
            </span> */}
          {/* <button className="offer-price-btn">A0287 </button> */}
          {/* </div> */}
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">Allergy Veg-Extensive</span>
          <p className="text-center text-dark">Vegextens</p>
        </div>
      </div>

      <div className="tax-saver-parent-container py-4">
        <div className="tax-saver-check-container">
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Milk</li>
                <li>Wheat</li>
                <li>Peanut</li>
                <li>Soybean</li>
                <li>Orange</li>
                <li>Apple</li>
                <li>Banana</li>
                <li>Peach</li>
                <li>Kiwi</li>
                <li>Melon</li>
                <li>Pineapple</li>
                <li>Oat</li>
                <li>Gluten</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Corn</li>
                <li>Rice</li>
                <li>Barley</li>
                <li>Strawberry</li>
                <li>Mango</li>
                <li>Grape</li>
                <li>Lemon</li>
                <li>Pear</li>
                <li>Papaya</li>
                <li>Coconut</li>
                <li>
                  Red Kidney <br />
                  Bean
                </li>
                <li>White Bean</li>
              </ul>
            </div>
          </div>
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Hazel Nut</li>
                <li>Almond</li>
                <li>Pecannut</li>
                <li>Walnut</li>
                <li>Cashew Nut</li>
                <li>Pistachio</li>
                <li>Spinach</li>
                <li>Cabbage</li>
                <li>Tomato</li>
                <li>Carrot</li>
                <li>Lentil</li>
                <li>
                  Aubergine <br />
                  Eggplant
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Green pepper</li>
                <li>
                  Paprika sweet
                  <br /> pepper
                </li>
                <li>Basil</li>
                <li>ChickPea</li>
                <li>Olive</li>
                <li>Potato</li>
                <li>Yeast</li>
                <li>Garlic</li>
                <li>Onion</li>
                <li>Pea</li>
                <li>Mustard</li>
                <li>
                  Cheese, <br />
                  Cheddar
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-section-container">
          <div className="actual-price-section-button yellow-big-btn">
            <span>
              {/* <br /> */}
              Price
            </span>
            <button className="actual-price-btn">₹18000 </button>
            {/* <p className="empty-div-cut"></p> */}
          </div>
          {/* <div className="offer-price-section-button"> */}
          {/* <span>
              COUPON
              <br /> CODE
            </span> */}
          {/* <button className="offer-price-btn">VEGEXTENS </button> */}
          {/* </div> */}
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">Allergy Nuts Panel</span>
          <p className="text-center text-dark">A0290</p>
        </div>
      </div>

      <div className="tax-saver-parent-container py-4">
        <div className="tax-saver-check-container">
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Peanut</li>
                <li>Hazel Nut</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Almond</li>
                <li>Pecannut</li>
              </ul>
            </div>
          </div>
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Cashew Nut</li>
                <li>Pistachio</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Walnut</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-section-container">
          <div className="actual-price-section-button yellow-big-btn">
            <span>
              {/* <br /> */}
              Price
            </span>
            <button className="actual-price-btn">₹3400 </button>
            {/* <p className="empty-div-cut"></p> */}
          </div>
          {/* <div className="offer-price-section-button"> */}
          {/* <span>
              COUPON
              <br /> CODE
            </span> */}
          {/* <button className="offer-price-btn">A0290 </button> */}
          {/* </div> */}
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">Allergy Inhalants </span>
          <p className="text-center text-dark">Allinheli</p>
        </div>
      </div>

      <div className="tax-saver-parent-container py-4">
        <div className="tax-saver-check-container">
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Mugwort</li>
                <li>Cocklebur</li>
                <li>Rough Pigweed</li>
                <li>Carnation flower</li>
                <li>Bermuda Grass</li>
                <li>Timothy grass</li>
                <li>Johnson Grass</li>
                <li>Cultivated Rye</li>
                <li>Cultivated Corn</li>
                <li>
                  Cladosporium <br />
                  herbarum
                </li>
                <li>
                  Aspergillus <br />
                  fumigatus
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Cat (Epithelia)</li>
                <li>Piegeon Feathers</li>
                <li>
                  Dog <br />
                  (Epithelia +Dander)
                </li>
                <li>Chicken Feathers</li>
                <li>
                  American <br />
                  Cockroach
                </li>
                <li>Cotton (Treated)</li>
                <li>
                  Alternaria <br />
                  Alternata
                </li>
                <li>Candida albicans</li>
                <li>Sheep's Wool</li>
                <li>Sunflower</li>
              </ul>
            </div>
          </div>
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Penicillium Notatum</li>
                <li>Mucor Racemosus</li>
                <li>Rhizopus nigricans</li>
                <li>Curvularia Lunata</li>
                <li>Trichophyton M.</li>
                <li>
                  Interpretation-
                  <br />
                  Allergy
                </li>
                <li>Mesquite</li>
                <li>Eucalyptus</li>
                <li>Beef</li>
                <li>Straw dust</li>
                <li>Goosefoot</li>
                <li>Jute</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Lamb meat</li>
                <li>Crab</li>
                <li>Egg White</li>
                <li>Shrimp/Prawn</li>
                <li>Codfish</li>
                <li>Rohu</li>
                <li>a-lactalbumin</li>
                <li>ß-lactoglobulin</li>
                <li>
                  Interpretation-
                  <br />
                  Allergy
                </li>
                <li>
                  Dermatophagoides <br />
                  pteronyssinus
                </li>
                <li>
                  Dermatophagoides <br />
                  farinae
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-section-container">
          <div className="actual-price-section-button yellow-big-btn">
            <span>
              {/* <br /> */}
              Price
            </span>
            <button className="actual-price-btn">₹6500 </button>
            {/* <p className="empty-div-cut"></p> */}
          </div>
          {/* <div className="offer-price-section-button"> */}
          {/* <span>
              COUPON
              <br /> CODE
            </span> */}
          {/* <button className="offer-price-btn">ALLINHELI </button> */}
          {/* </div> */}
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">Allergy Rhinitis Panel</span>
          <p className="text-center text-dark">Allgy70</p>
        </div>
      </div>

      <div className="tax-saver-parent-container py-4">
        <div className="tax-saver-check-container">
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>
                  Cat epi & <br />
                  Dander
                </li>
                <li>Horse Dander</li>
                <li>
                  Dermatophagoides <br />
                  farinae
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  Alternaria <br />
                  Tenuis
                </li>
                <li>Cockroach i6</li>
                <li>
                  Dermatophagoides <br />
                  pteronyssinus
                </li>
              </ul>
            </div>
          </div>
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>
                  House Dust <br />
                  Mite
                </li>
                <li>
                  Aspergillus <br />
                  fumigatus
                </li>
                <li>
                  Aspergillus <br />
                  niger
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Dog Dander</li>
                <li>Bermuda Gras</li>
                <li>
                  Common <br />
                  Ragweed
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-section-container">
          <div className="actual-price-section-button yellow-big-btn">
            <span>
              {/* <br /> */}
              Price
            </span>
            <button className="actual-price-btn">₹6000 </button>
            {/* <p className="empty-div-cut"></p> */}
          </div>
          {/* <div className="offer-price-section-button"> */}
          {/* <span>
              COUPON
              <br /> CODE
            </span> */}
          {/* <button className="offer-price-btn">ALLGY70 </button> */}
          {/* </div> */}
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">Allergy Dander Panel</span>
          <p className="text-center text-dark">Allgy69</p>
        </div>
      </div>

      <div className="tax-saver-parent-container py-4">
        <div className="tax-saver-check-container">
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Cat epi & Dander</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Dog Dander</li>
              </ul>
            </div>
          </div>
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Horse Dander</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Cow Dander</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-section-container">
          <div className="actual-price-section-button yellow-big-btn">
            <span>
              {/* <br /> */}
              Price
            </span>
            <button className="actual-price-btn">₹1500 </button>
            {/* <p className="empty-div-cut"></p> */}
          </div>
          {/* <div className="offer-price-section-button"> */}
          {/* <span>
              COUPON
              <br /> CODE
            </span> */}
          {/* <button className="offer-price-btn">ALLGY69 </button> */}
          {/* </div> */}
        </div>
      </div>

      <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">
            Allergy-House Dust Mite Check
          </span>
          <p className="text-center text-dark">A0292</p>
        </div>
      </div>

      <div className="tax-saver-parent-container py-4">
        <div className="tax-saver-check-container">
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>
                  Dermatophagoides <br />
                  pteronyssinus
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  Dermatophagoides <br />
                  farinae
                </li>
              </ul>
            </div>
          </div>
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>
                  House Dust <br />
                  Mite
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Cockroach</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="price-section-container">
          <div className="actual-price-section-button yellow-big-btn">
            <span>
              {/* <br /> */}
              Price
            </span>
            <button className="actual-price-btn">₹3000 </button>
            {/* <p className="empty-div-cut"></p> */}
          </div>
          {/* <div className="offer-price-section-button"> */}
          {/* <span>
              COUPON
              <br /> CODE
            </span> */}
          {/* <button className="offer-price-btn">A0292 </button> */}
          {/* </div> */}
        </div>
      </div>

      {/* <div className="book-captain-health-container">
        <div className="check-health-heading-container">
          <span className="health-check-heading">Allergy Drug</span>
            <p className="text-center text-dark">Allfpelisa</p>
          </div>
      </div>

      <div className="tax-saver-parent-container">
        <div className="tax-saver-check-container">
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>Cephalosporin</li>
                <li>Gentamycin</li>
                <li>Piroxycam</li>
                <li>Ibuprofen</li>
                <li>Diclofenac</li>
                <li>Oxacillin</li>
                <li>
                  Lidocaine /<br />
                  Xylocaine
                </li>
                <li>Paracetamol</li>
                <li>Ciprofloxacin</li>
                <li>Amoxycillin</li>
                <li>Ambroxol</li>
                <li>Tetanus-toxoide</li>
                <li>Ampicillin</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Doxycycline</li>
                <li>Pyrazolone</li>
                <li>Tetracycline</li>
                <li>Erythromycin</li>
                <li>Trimethoprim</li>
                <li>Cloxacillin</li>
                <li>Streptomycin</li>
                <li>Insulin (Human)</li>
                <li>Metronidazole</li>
                <li>Prednisolone</li>
                <li>Benzocaine</li>
                <li>Chloramphenicol</li>
                <li>Prilocaine</li>
                <li>Cefalotin</li>
              </ul>
            </div>
          </div>
          <div className="allergy-items-layer-container">
            <div>
              <ul>
                <li>
                  5-Aminosalicylic <br />
                  acid
                </li>
                <li>
                  Acetylsalicylic <br />
                  Acid
                </li>
                <li>Bupivacain</li>
                <li>Carbocain</li>
                <li>Clavulanic acid</li>
                <li>Cortison</li>
                <li>Dexamethasone</li>
                <li>Dipyron/Metamizole</li>
                <li>L-Tyroxine</li>
                <li>Mepivacain</li>
                <li>Neomycin</li>
                <li>Sulfamethoxazole</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>vitamin B6.</li>
                <li>Tobramycin</li>
                <li>Penicilloyl V</li>
                <li>Penicilloyl G</li>
                <li>Lincomycin</li>
                <li>Clindamycin</li>
                <li>Cefuroxime</li>
                <li>
                  Interpretation-
                  <br />
                  Allergy
                </li>
                <li>
                  Cyanocobalamin <br />
                  Vitamin B12
                </li>
                <li>
                  Theophylline /<br />
                  Aminophylline
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}



      <div className="why-anand-allergy-testing pt-5">
        <h4 className="section-heading">
          Why Choose Neuberg Anand Allergy Testing?
        </h4>
        <div className="why-anand-info-container allergy-testing-why-info">
          <div className="internal-info-container-upper">
            <div className="info-container">
              <img src={whyAnand1} alt="" />
              <p>
                Convenient Home Collection : No need to visit a clinic. We come
                to you!
              </p>
            </div>
            <div className="info-container">
              <img src={whyAnand2} alt="" />
              <p>
                Comprehensive Testing Identifies common allergens including
                mold, pet dander, bee stings, and various foods
              </p>
            </div>
          </div>
          <div className="internal-info-container-upper">
            <div className="info-container">
              <img src={whyAnand3} alt="" />
              <p>
                Expert Analysis : Our tests are conducted by healthcare
                professionals, ensuring accurate results.
              </p>
            </div>
            <div className="info-container">
              <img src={whyAnand4} alt="" />
              <p>
                Fast and Reliable Results : Quick turnaround with clear,
                understandable reports.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="preparing-your-test-container">
        <h4 className="section-heading">Preparing for Your Test</h4>
        <ul>
          <li>Avoid certain medications as advised</li>
          <li>Continue with asthma medications if applicable</li>
          <li>No special preparation required for home collection</li>
        </ul>
      </div>



      <div className="how-it-works-container">
        <h4 className="section-heading">How It Works</h4>
        <div className="howit-works-info-container">
          <div className="how-it-works-box">
            <img src={howItWorks1} alt="" />
            <p>
              Share your <br />
              details with us
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howItWorks2} alt="" />
            <p>
              Schedule the test <br />
              at your home
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howItWorks3} alt="" />
            <p>
              Our representative <br />
              would visit your home
            </p>
          </div>
          <div className="how-it-works-box">
            <img src={howItWorks4} alt="" />
            <p>
              Get your <br />
              reports online
            </p>
          </div>
        </div>
      </div>

      <div className="our-commitment-container">
        <h4 className="section-heading">Our Commitment</h4>

        <div className="insider-comm-box">
          <div className="commitment-info-container">
            <div className="commitment-info">
              <img src={commitmentIcon2} alt="" />
              <h4>Safety First</h4>
              <p>Ensuring a safe and comfortable testing process.</p>
            </div>
            <div className="commitment-info">
              <img src={commitmentIcon3} alt="" />
              <h4>Quality Care</h4>
              <p>
                Our team is dedicated to providing personalized care and
                support.
              </p>
            </div>
            <div className="commitment-info">
              <img src={commitmentIcon1} alt="" />
              <h4>Educational Resources</h4>
              <p>Offering guidance on allergy management and prevention.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
