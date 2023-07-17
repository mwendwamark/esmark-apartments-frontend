import React from "react";
import "../Styles/Home.css";
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
          <button>
            Get Started  -            
            <FontAwesomeIcon icon={faArrowRight} />{" "}
          </button>
        </header>
        <footer className="Home-footer">
          <div className="footer-content">
            <p class>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas perferendis a rem, consectetur odit animi autem temporibus consequatur! Ipsam voluptas minima in expedita voluptatibus magni iure aliquam, animi laborum corrupti aspernatur sit voluptatem odit?
            </p>
            <div className="footer-links">
              <p>Help</p>
              <a href="discord">Location</a>
              <br />
              <a href="discord">Services</a>
              <br />
              <a href="discord">Pricing</a>
              <br />
              <a href="discord">About us</a>
              <br />
              <a href="discord">Terms and Contitions</a>
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
            {/* <p>&copy; 2023 Esmark Apartments | All rights reserved.</p>
            <p>
              made wtih love{" "}
              <FontAwesomeIcon icon={faHeart} style={{ color: "#f01414" }} /> by
              Mark
            </p> */}
          </div>
        </footer>
      </div>
    </>
  );
}
export default Home;
