import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav({ isPaymentDone, setIsPaymentDone }) {
  // eslint-disable-next-line
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && `nav-black`}`}>
      <div className="nav-contents">
        <img
          onClick={() => navigate("/")}
          className="nav-logo"
          src="https://ottdock.com/images/OTTDock%20Logo1.png"
          alt="movie-streaming-catalogue"
        ></img>

        {isPaymentDone ? (
          <img
            onClick={() => navigate("/profile")}
            className="nav-avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          ></img>
        ) : (
          <img
            onClick={() => navigate("/profile")}
            className="nav-avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          ></img>
        )}
        
      </div>
    </div>
  );
}
export default Nav;
