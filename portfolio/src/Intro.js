import React from "react";
import "./Intro.css";
import aboutImg from "./img/about.jpeg";
function Intro() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="intro component__space" id="Intro">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="intro__heading">About Me</h1>
            <div className="intro__meta">
              <p className="intro__text p__color">
              Hi, My name is Bipasha Das. ​I’ve recently done my Bachelors in Technology with Computer Science stream from Lovely Professional University with 8.14 CGPA. Also, I did my 12th & 10th from CBSE Board in the year 2019 and 2017 respectively. Though I am currently staying in Punjab – I was born and brought up in Assam, and did my schooling from there. Considering my family background details – we’re 4 members in the family.
              </p>
              <p className="intro__text p__color">
              I'm skilled at HTML, CSS, Javascript, React js, C, C++, Python. I have done 3 internships during my 3 years of graduation and currently I'm learning React Js. 
              </p>
              <p className="intro__text p__color">
              My short term goal is to get into a reputed company as Jr Software developer, And my long term goal is to be known as a reputed Sr Software Developer. 
              </p>
              <div className="intro__button d__flex align__items__center">
                
                  <button className="intro btn pointer">Download CV</button>
                
                <a href="#Contact">
                  <button className="intro btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default Intro;
