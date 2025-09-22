import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../../Redux/Constant/ApiRoute";
import AuthUser from "../../../Helpers/AuthUser";
import Swal from "sweetalert2";
import { toast } from "react-hot-toast";

export default function Orders() {
  const [Orders, setOrders] = useState(null);
  const getMyOrders = () => {
    axios.get(API_URL.GET_MY_ORDERS + AuthUser().id).then((response) => {
      setOrders(response.data.data);
    });
  };
  const cancelOrder = (id,order_id) => {
    Swal.fire({
      title: "Are you sure?",
      allowOutsideClick: false,
      text: `want to cancel the Order (${order_id})`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "green",
      confirmButtonText: "Yes, proceed !",
    }).then((result) => {
      if (result.isConfirmed) {
        CancelOrderReason(id);
      }
    });
  };
  const CancelOrderReason = async (order_id) => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      allowOutsideClick: false,
      inputAttributes: {
        maxLength: 250,
      },
      inputLabel: "Reason for cancellation",
      inputPlaceholder: "Type your reason here...",
      confirmButtonColor: "#f7931e",
      confirmButtonText: "Submit",
      // cancelButtonColor: "#5b2584",
      showCancelButton: true,
    });

    if (text) {
      axios.post(API_URL.CANCEL_MY_ORDER + order_id,{
        cancel_order_reason : text
      }).then((response) => {
        if(response.data.status) {
          toast.success(response.data.message)
          getMyOrders()
        }
      });
    }
  };
  useEffect(() => {
    getMyOrders();
    document.title = "Account Information";
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div className="row m-0">
        {Orders !== null
          ? Orders.map((order) => {
              return (
                <div className="col-md-4 pl-0 pb-3">
                  <div className="card border">
                    <div className="card-header d-block">
                      <h6 className="card-subtitle mb-2 text-muted">Order ID</h6>
                      <b className="card-title m-0 text-dark">
                        {order.order_id}
                      </b> 
                    </div>
                    <div className="card-body pt-2">
                      <div className="my-2 mb-3 d-flex justify-content-between align-items-center">
                        Test Details
                        <OrderStatus status={order.order_status}/> 
                      </div>
                      <div
                        className="card-text"
                        style={{ height: "200px", overflow: "auto" }}
                      >
                        <ol className="list-group list-group-numbered">
                          {order.tests.map((test, i) => {
                            return (
                              <li className="list-group-item" key={i}>
                                <small>{test.TestName}</small>
                              </li>
                            );
                          })}
                        </ol>
                      </div>
                    </div>
                    <div className="card-footer ">
                      <div>
                        Order Amount : <b>RS . {order.order_amount ?? 0}</b>
                      </div>
                      {order.order_status !== "3" ? (
                        <>
                          <hr />
                          <button
                            onClick={() => cancelOrder(order.id,order.order_id)}
                            className="btn-outline-danger rounded"
                          >
                            <i className="fa fa-trash"></i> Cancel Order
                          </button>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}

const OrderStatus = (props) => {
  console.log(props.status)
  if(props.status === null || props.status === "0") {
    return (
      <span className="badge text-white status-badge bg-success">
        Booked
      </span>
    )
  }
  if(props.status === "3") {
    return (
      <span className="badge text-dark status-badge bg-warning">
        Cancel Requested
      </span>
    )
  }
  if(props.status === "4") {
    return (
      <span className="badge text-white status-badge bg-danger"> Order Cancelled </span>
    )
  }
  if(props.status === "5") {
    return (
      <span className="badge text-white status-badge bg-danger"> Request Denied</span>
    )
  }
  return null
}