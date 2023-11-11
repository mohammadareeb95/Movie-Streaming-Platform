import React, { useEffect, useState } from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PaidScreen from "./screens/PaidScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  let myStyle = {
    color: "white",
    height: "99vh",
    width: "99vw",
    display: "grid",
    placeItems: "center",
  };

  const [isPaymentDone, setIsPaymentDone] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />}></Route>
            <Route path="/paid" element={<PaidScreen />}></Route>
            <Route
              path="/"
              element={
                <Homescreen
                  isPaymentDone={isPaymentDone}
                  setIsPaymentDone={setIsPaymentDone}
                />
              }
            >
              {" "}
            </Route>
            <Route path="/payment" element={<PaymentScreen />}></Route>
            <Route
              path="*"
              element={<h1 style={myStyle}>Page not found</h1>}
            ></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
