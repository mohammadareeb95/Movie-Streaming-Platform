import React, { useState } from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, updateUser } from "../features/counter/userSlice";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState(false);

  const handlePayNow = () => {
    // Code to handle the "Pay Now" action, e.g., show payment modal
    navigate("/payment");
  };

  const handlePaymentDone = () => {
    // Code to handle the payment completion, e.g., update payment status
    // Call this function after the payment is done successfully
    dispatch(updateUser({ paymentStatus: true }));
  };

  // const handlePaymentDone = () => {
  //   // Update the payment status in the Redux store
  //   dispatch(updateUser({ ...user, paymentStatus: true }));
  //   setPaymentStatus(true);
  // };

  // function ProfileScreen() {
  //   const user = useSelector(selectUser);
  //   const navigate = useNavigate();

  //   const handlePayNow = () => {
  //     // Code to handle the "Pay Now" action, e.g., show payment modal
  //     navigate("/payment");
  //   };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="logo"
          ></img>
          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>Plans</h3>

              <div className="profileScreen-plan">
                <h4>Basic Plan: Rs. 149/month </h4>
                {user.paymentStatus ? (
                  <button className="profileScreen-paid">Paid</button>
                ) : (
                  <button
                    onClick={() => handlePayNow(handlePaymentDone)}
                    className="profileScreen-payNow"
                  >
                    Pay Now
                  </button>
                )}
                {/* <button onClick={handlePayNow} className="profileScreen-payNow">
                  Pay Now
                </button> */}
              </div>

              <div className="profileScreen-plan">
                <h4>Premium Plan: Rs. 249/month</h4>
                <button onClick={handlePayNow} className="profileScreen-payNow">
                  Pay Now
                </button>
              </div>
              <div className="profileScreen-plan">
                <h4>Premium Plan: Rs. 2499/year</h4>
                <button onClick={handlePayNow} className="profileScreen-payNow">
                  Pay Now
                </button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen-signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
