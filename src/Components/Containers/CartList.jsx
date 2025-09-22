import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setTestCartList } from "../../Redux/Actions/TestAction";
import emptyCart from "../.././assets/images/cart_empty.png";
import { API_URL } from "../../Redux/Constant/ApiRoute";
import axios from "axios";

export default function CartList() {
  const gtagReportConversion = (url, eventId) => {
    const callback = () => {
      if (typeof (url) !== 'undefined') {
        window.location = url;
      }
    };
    window.gtag('event', 'conversion', {
      'send_to': eventId,
      'event_callback': callback
    });

    return false;
  };

  const handleBeginCheckout = () => {
    // alert('handleBeginCheckout');
    gtagReportConversion('/checkout', 'AW-10841898141/vYldCObjl7MZEJ356LEo');
  };

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const [CartTable, setCartTable] = useState([]);
  const [testTotal, setTestTotal] = useState(0);
  const dispatch = useDispatch();
  const fetchCartList = () => {
    var AuthID = JSON.parse(localStorage.getItem('user')).id;
    axios.post(`${API_URL.CUSTOMER_CART_ITEMS}/${AuthID}`).then((response) => {
      if (response.data.length) {
        if (localStorage.getItem("CartTestList") == undefined || localStorage.getItem("CartTestList") == null) {
          localStorage.setItem("CartTestList", JSON.stringify(response.data))
          dispatch(setTestCartList(response.data));
        }
        setCartTable(response.data);
      } else {
        if (localStorage.getItem("CartTestList") != undefined && localStorage.getItem("CartTestList") != null) {
          setCartTable(JSON.parse(localStorage.getItem("CartTestList")))
        }
      }
    })
  }

  useEffect(() => {
    try {
      if (JSON.parse(localStorage.getItem('user')).id) {
        fetchCartList()
      }
    } catch (error) {
      if (localStorage.getItem("CartTestList")) {
        setCartTable(JSON.parse(localStorage.getItem("CartTestList")));
      }
    }
    var testListFromCart = JSON.parse(localStorage.getItem("CartTestList"));
    if (testListFromCart != null) {
      var CalculateTotalTestPrice = 0;
      testListFromCart.map((item) => {
        if (item.TestPrice !== undefined) {
          CalculateTotalTestPrice += item.TestPrice
        }
      })
      localStorage.setItem("cartItemTotal", CalculateTotalTestPrice);
      setTestTotal(CalculateTotalTestPrice);
    }
  }, []);

  const removeCartItem = (index, cart_id) => {
    try {
      if (JSON.parse(localStorage.getItem('user')).id) {
        axios.post(API_URL.REMOVE_TO_CART + cart_id);
      }
    } catch (error) {
      setCartTable(JSON.parse(localStorage.getItem("CartTestList")));
    }
    CartTable.splice(index, 1);
    localStorage.setItem("CartTestList", JSON.stringify([...CartTable]));
    setCartTable([...CartTable]);
    dispatch(setTestCartList(JSON.parse(localStorage.getItem("CartTestList"))));
    var CalculateTotalTestPrice = 0;
    CartTable.map((item) => {
      if (item.TestPrice !== undefined) {
        CalculateTotalTestPrice += item.TestPrice
      }
    })
    localStorage.setItem("cartItemTotal", CalculateTotalTestPrice);
    setTestTotal(CalculateTotalTestPrice);

    toast.error("Item has been Removed!");
  };
  return (
    <>
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
                    <Link to="/for-patient">My Cart</Link>
                  </li>
                </ul>
                <h1>My Cart</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {CartTable.length !== 0 ? (
        <section className="total-carting pt-3">
          <div className="container">
            <div className="row">
              {
                window.innerWidth > 980
                  ?
                  <div className="cart-ing table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Package/Test</th>
                          <th className="text-right">Type</th>
                          <th className="text-right">Unit Price(₹)</th>
                          <th className="text-right">Net Price</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CartTable.map((item, index) => (
                          <tr key={index}>
                            <th scope="row">{item.TestName}</th>
                            <td className="text-right">
                              {item.IsPackage === "Yes" ? <span className="px-2 py-1 badge badge-success"><i className="fa fa-flask" aria-hidden="true"></i> Package </span> : <span className="px-2 py-1 badge badge-primary"><i className="fa fa-flask" aria-hidden="true"></i> Test </span>}
                            </td>
                            <td className="text-right">
                              &#8377;{item.TestPrice}
                            </td>
                            <td className="text-right">
                              &#8377; {item.TestPrice}
                            </td>
                            <td className="text-center clr-chng">
                              <Link to="">
                                <RiDeleteBinLine
                                  className="text-danger"
                                  onClick={() => removeCartItem(index, item.cart_id)}
                                />
                              </Link>
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td className="text-right" colSpan={3}><b style={{ fontSize: '16px' }}>Total</b></td>
                          <td className="text-right"><b style={{ fontSize: '16px' }}>₹ {testTotal}</b></td>
                          <td>
                            <div className="case m-0 text-center">
                              <p>
                                <Link to="/checkout" onClick={handleBeginCheckout}>Checkout</Link>
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  :
                  <div className="col-12">
                    <div className="only-mobileresponsive">
                      <div className="col-lg-12 p-0 ">
                        <ul className="list-group">
                          {CartTable.map((item, index) => (
                            <li className="list-group-item" key={index}>
                              <h6>
                                {item.IsPackage === "Yes" ?
                                  <small className="px-2 py-1 badge badge-success"><i className="fa fa-flask" aria-hidden="true"></i> Package </small> :
                                  <small className="px-2 py-1 badge badge-primary"><i className="fa fa-flask" aria-hidden="true"></i> Test </small>}
                              </h6>
                              <h6 className="my-2">{item.TestName}</h6>
                              <div className="d-flex w-100 justify-content-between">
                                <p className="m-0"><b>₹ {item.TestPrice} </b></p>
                                <button className="btn-light border-0 outline-0 rounded pt-2" style={{ cursor: 'pointer' }}>
                                  <RiDeleteBinLine
                                    className="text-danger"
                                    onClick={() => removeCartItem(index, item.cart_id)}
                                  />
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="availab-lity ca-rtloc mt-3">
                      <h4>Total Amount</h4>
                      <table className="table">
                        <tbody>
                          <tr>
                            <th className="text-left">Subtotal</th>
                            <th className="text-right">&#8377;{testTotal}</th>
                          </tr>
                          <tr>
                            <td className="text-left">
                              <b>Total</b>
                            </td>
                            <td className="text-right">
                              <b>&#8377;{testTotal}</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="case text-right">
                        <p>
                          <Link to="/" onClick={handleBeginCheckout}>Checkout</Link>
                        </p>
                      </div>
                    </div>
                    <div className="case">
                      <p className="d-flex justify-content-center">
                        <Link to="/for-patient">Add More Test</Link>
                        <Link className="bg-trsnper" to="/packages">
                          Add More Package
                        </Link>
                      </p>
                    </div>
                  </div>
              }
            </div>
          </div>
        </section>
      ) : (
        <div style={{ backgroundColor: "#f9f9f9" }} className="text-center">
          <div className="case rounded-0">
            <img src={emptyCart} alt="Cart is Empty" className="my-5" />
            <p>
              <Link to="/for-patient">Add Test</Link>
              <Link className="bg-trsnper" to="/packages">
                Add Package
              </Link>
            </p>
          </div>
          <hr className="w-75 mx-auto my-0" />
        </div>
      )}
    </>
  );
}
