import { useEffect, useState } from "react";
import { Form } from "react-component-form";
import { Link, useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";
import AuthUser from "../../Helpers/AuthUser";
import axios from "axios";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import { toast } from "react-hot-toast";
import { Validate } from "../../Helpers";
import { useDispatch } from 'react-redux';
import { setTestCartList } from '../../Redux/Actions/TestAction';
import { setLoading } from "../../Redux/Actions/LoaderAction";
export default function GuestCheckOut() {
  const dispatch = useDispatch()
  const [cartTable, setCartTable] = useState([]);
  const [DateTime, setDateTime] = useState(false);
  const [Loading, setLoadingGif] = useState(false);
  const [datetimeData, setDatetimeData] = useState(null);


  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const Razorpay = useRazorpay();
  let navigate = useNavigate();

  const [BillingAddress, setBillingAddress] = useState({
    first_name: AuthUser()?.customer_details?.first_name,
    last_name: AuthUser()?.customer_details?.last_name,
    phone_number: AuthUser()?.customer_details?.email,
    address: AuthUser()?.customer_details?.phone_number,
    city_town: AuthUser()?.customer_details?.address,
    email: AuthUser()?.customer_details?.city_town,
    state: AuthUser()?.customer_details?.state,
    pin_code: AuthUser()?.customer_details?.pin_code,
    id: AuthUser()?.id,
  });

  var totalPrice = 0;

  const FormHandler = (e) => {
    setBillingAddress({ ...BillingAddress, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    setBillingAddress(JSON.parse(localStorage.getItem("user")).customer_details);
    setCartTable(JSON.parse(localStorage.getItem("CartTestList")));
    var AuthUserData = AuthUser();
    if (AuthUserData.first_name ?? false) {
      setBillingAddress(AuthUserData);
    }
  }, []);

  const handlePayment = async () => {
    if (BillingAddress === null) {
      toast.error('Please fill out the Billing Address !');
    }
    if (Validate(BillingAddress)) {
      setLoadingGif(true)

      axios.post(API_URL.UPDATE_BILLING_DETAILS, {
        ...BillingAddress,
        amount: totalPrice,
        datetime: datetimeData,
        id: AuthUser().id,
      }).then((response) => {
        setLoadingGif(false)
        if (response.data.status) {
          CheckOutPayment(response.data.data);
          dispatch(setLoading(false))
        }
      });
    }
  };

  const saveTheOrder = (data, type) => {
    axios.post(API_URL.SAVE_THE_ORDER, {
      razorpay_response: {
        status: type,
        data: data
      },
      user: AuthUser(),
      billingAddress: BillingAddress,
      products: cartTable,
      appoinment: DateTime,
      datetime: datetimeData,
      total_price: totalPrice
    }).then((response) => {
      if (response.data.status) {
        localStorage.removeItem("CartTestList");
        toast.success(response.data.message);
        dispatch(setTestCartList([]));
        // navigate('/thank-you')
        navigate('/payment-sucess')
      } else {
        toast.error(response.data.message);
      }
    })
  };
  const CheckOutPayment = (data) => {
    dispatch(setLoading(true))
    const options = {
      key: data.key,
      name: data.title,
      image: data.image,
      order_id: data.order_id,
      handler: function (response) {
        saveTheOrder(response, "PAID");
        if (DateTime == true) {
          axios.post('https://reports.anandlab.com/v3/SMS.asmx/SendWebhookSMS', {
            "mobile_no": BillingAddress.phone_number,
            "name": " " + BillingAddress.first_name,
            "refno": data.order_id,
            "api_key": "FC033590-B038-4CCD-BC8F-13BE890BF9F0"
          }).then((response) => {
            console.log(response.data)
          })
        }
      },
      prefill: {
        name: data.name,
        email: data.email,
        contact: parseInt(data.contact),
      },
      theme: {
        color: "#5d2c8f",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      saveTheOrder(response, 'FAILED');
    });
    rzp1.open();
  };
  return (
    <div>
      <section className="comon-testdetail-banner resp-rem-mrgn">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="bnr-txt text-left">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li> / </li>
                  <li>
                    <Link to="/for-patient">Checkout</Link>
                  </li>
                </ul>
                <h1>My Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-billfrm">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="billing-form">
                <div className="form-billing">
                  <Form>
                    <div className="frm-fields row clearfix">
                      <div className="col-lg-12 col-md-12 col-sm-12">
                        <h4 className="cont-frmhed">Billing Address</h4>
                        <div className="row">
                          <div className="form-data col-lg-6">
                            <label>First Name</label>
                            <input
                              className="input100"
                              type="text"
                              value={BillingAddress && BillingAddress.first_name}
                              name="first_name"
                              placeholder="Enter Your First Name"
                              onChange={(e) => FormHandler(e)}
                              required
                            />
                          </div>
                          <div className="form-data col-lg-6">
                            <label>Last Name</label>
                            <input
                              className="input100"
                              type="text"
                              name="last_name"
                              value={BillingAddress && BillingAddress.last_name}
                              placeholder="Enter Your Last Name"
                              required
                              onChange={(e) => FormHandler(e)}
                            />
                          </div>
                          <div className="form-data col-lg-6">
                            <label>E-mail Address</label>
                            <input
                              className="input100"
                              type="text"
                              name="email"
                              value={BillingAddress && BillingAddress.email}
                              placeholder="Enter Your E-mail ID"
                              required
                              onChange={(e) => FormHandler(e)}
                            />
                          </div>
                          <div className="form-data col-lg-6">
                            <label>Phone Number</label>
                            <input
                              className="input100"
                              type="tel"
                              pattern="/^\d{10}$/"
                              name="phone_number"
                              value={BillingAddress && BillingAddress.phone_number}
                              onChange={(e) => FormHandler(e)}
                              placeholder="Enter your Contact Number"
                              required
                            />
                          </div>
                          <div className="form-data col-lg-6">
                            <label>Address</label>
                            <input
                              className="input100"
                              type="text"
                              name="address"
                              value={BillingAddress && BillingAddress.address}
                              onChange={(e) => FormHandler(e)}
                              placeholder="Street No, Street Name"
                              required
                            />
                          </div>
                          <div className="form-data col-lg-6">
                            <label>City/Town</label>
                            <input
                              className="input100"
                              type="text"
                              name="city_town"
                              onChange={(e) => FormHandler(e)}
                              value={BillingAddress && BillingAddress.city_town}
                              placeholder="City/Town"
                              required
                            />
                          </div>
                          <div className="form-data col-lg-6">
                            <label>State</label>
                            <input
                              className="input100"
                              type="text"
                              name="state"
                              value={BillingAddress && BillingAddress.state}
                              onChange={(e) => FormHandler(e)}
                              placeholder="Select Your State"
                              required
                            />
                          </div>
                          <div className="form-data col-lg-6">
                            <label>PIN Code</label>
                            <input
                              className="input100"
                              type="text"
                              name="pin_code"
                              value={BillingAddress && BillingAddress.pin_code}
                              onChange={(e) => FormHandler(e)}
                              placeholder="Enter Your PIN Code"
                              required
                            />
                          </div>
                          <div className="col-lg-6">
                            <label>Appointment</label>
                            <label htmlFor="book_a_appoinment" className="form-control pt-2" style={{ height: '45px' }}>
                              <input type="checkbox" onChange={() => setDateTime(DateTime === true ? false : true)} id="book_a_appoinment" className="mr-2" />
                              <b>Book an Appointment</b>
                            </label>
                          </div>
                          {
                            DateTime === true ?
                              <div className="form-data col-lg-6">
                                <label>Date & Time</label>
                                <input type="datetime-local" name="datetime" onChange={(e) => setDatetimeData(e.target.value)} className="form-control" />
                              </div>
                              : null
                          }
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
                {/* <div className="coupon-form">
                    <Form>
                      <div className="frm-fields row clearfix">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <h4 className="cont-frmhed">Apply Coupon</h4>
                          <div className="row">
                            <div className="form-data col-lg-6">
                              <input
                                className="input100"
                                type="text"
                                name="name"
                                placeholder="Enter Your Coupon Code"
                                required
                              />
                              <Link to="">
                                <CgCloseO />
                              </Link>
                              <button type="button">Apply</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="total-carting availab-lity ca-rtloc">
                <h4>Cart Summary</h4>
                <div className="cart-listbox">
                  <div className="cat-itenslst">
                    <table className="table">
                      <tbody>
                        {cartTable.length
                          ? cartTable.map((item, i) => (
                            <tr
                              key={i}
                              amount={
                                (totalPrice += parseInt(item.TestPrice))
                              }
                            >
                              <th className="text-left">{item.TestName}</th>
                              <th className="text-right">
                                &#8377;{item.TestPrice}{" "}
                              </th>
                            </tr>
                          ))
                          : null}
                      </tbody>
                    </table>
                  </div>
                </div>
                <table className="table">
                  <tbody>
                    <tr>
                      <th className="text-left">Subtotal</th>
                      <th className="text-right">&#8377;{totalPrice}</th>
                    </tr>
                    {/* <tr>
                        <td className="text-left">Discount (-)</td>
                        <td className="text-right">- &#8377; 4655</td>
                      </tr> */}
                    {/* <tr>
                          <td className="text-left">Coupon Discount (-)</td>
                          <td className="text-right">- &#8377; 0</td>
                        </tr> */}
                    <tr>
                      <td className="text-left">
                        <b>Total</b>
                      </td>
                      <td className="text-right">
                        <b>&#8377;{totalPrice}</b>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {
                  DateTime === true ?
                    <b className="text-orange shadow-sm d-flex bg-lsight border p-3 rounded"><i className="fa fa-info-circle pr-2"></i><small>Additional charges for home collection is applicable</small></b>
                    : null
                }
                <div className="case text-left">
                  <p className="unavailableText">
                    {/* Currently unavailable for online booking, Thank you for your cooperation. */}
                    {/* <LoadingBtn loading={Loading} onClick={handlePayment} title="Make a Payment"/> */}
                    <a onClick={handlePayment} style={{ color: 'white' }}>Make Payment</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}