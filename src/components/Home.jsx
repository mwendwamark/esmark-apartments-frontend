import React from "react";
import "../Styles/Home.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faDiscord,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <div className="home-container">
        <header className="Home-header">
          <h1>
            <span>Es</span>mark <span> A</span>partments
          </h1>{" "}
          <img
            src="https://img.freepik.com/free-vector/building-concept-illustration_114360-4469.jpg?size=626&ext=jpg"
            alt="image"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sunt
            ad consequatur molestias temporibus veritatis harum, sit tempora
            dolorem saepe eum. Nostrum eveniet ex unde dignissimos eos possimus
            ratione debitis.
          </p>
          <Link to="/login">
            <button>
              Get Started
              <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </Link>
        </header>
        <footer className="Home-footer">
          <div className="footer-content">
            {/* {" "}
            <h2>Esmark Apartments</h2> */}
            <p className="footer-content-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              perferendis a rem, consectetur odit animi autem temporibus
              consequatur! Ipsam voluptas minima in expedita voluptatibus magni
              iure aliquam, animi laborum corrupti aspernatur sit voluptatem
              odit?
            </p>
          </div>
          <div className="help-footer-links">
            <p>Help</p>
            <a href="/location">Location</a>
            <a href="/services">Services</a>
            <a href="/pricing">Pricing</a>
            <a href="/aboutus">About us</a>
          </div>
          <div className="support-footer-links">
            <p>Support</p>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/conditions">Terms and Contitions</a>
            <a href="/houses">Houses</a>
          </div>
          <div className="social-icons">
            <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.facebook.com/login">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://github.com/login">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
          </div>
          <div className="made-with-love">
            <p>&copy; 2023 Esmark Apartments | All rights reserved.</p>
            <p>
              made wtih love{" "}
              <FontAwesomeIcon icon={faHeart} style={{ color: "#f01414" }} /> by
              Mark
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Home;
