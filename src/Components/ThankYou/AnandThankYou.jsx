import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function AnandThankYou() {
  useEffect(() => {
    window.scroll(0, 0);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    // gtag("config", "AW-10841898141");
    gtag('config', 'G-8VQRMYBYFG');
  }, []);
  
  return (
    <>
      <Helmet>
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-10841898141"
        ></script> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8VQRMYBYFG"></script> 
      </Helmet>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          padding: "150px 0px 50px",
        }}
      >
        <img
          style={{ position: "absolute", top: 0, left: 0 }}
          src="https://i.pinimg.com/originals/12/4d/e3/124de3d1b5e12f1d8fcec1685e634361.gif"
          width="100%"
          alt=""
        />
        <div style={{ zIndex: 1 }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            width="150px"
            className="mb-4"
            alt="img"
          />
          <h1>Thank You</h1>
          <h3 style={{ color: "#1ecdb4" }} className="my-3">
            For spending your valuable time.{" "}
          </h3>
          <p className="mb-4">We will reach you soon...</p>
          <Link to="https://www.neubergdiagnostics.com/" style={{ color: "#fdb758" }}>
            <b>Go to Home</b> <i className="fa fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AnandThankYou;
