import React from "react";
import "./Academics.css";
import ten from './img/10th.jpg';
import twelve from './img/12th.jpg';
import Btech from './img/btech.jpg';

function Academics() {
  return (
    <div className="academics component__space" id="Academics">
      <div className="heading">
        <h1 className="heading">Academics Details</h1>
        <p className="heading p__color">
        Education is one thing no one can take away from you.

        </p>
        <p className="heading p__color">
        You learn something every day if you pay attention.
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={ten} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Academics__meta absolute">
                         <h5 className="project__text">2016-2017</h5>
                         <h4 className="project__text">Kendriya Vidyalaya Panchgram</h4>
                         <h4 className="project__text">85.50%</h4>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={twelve} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Academics__meta absolute">
                         <h5 className="project__text">2018-2019</h5>
                         <h4 className="project__text">Kendriya Vidyalaya Panchgram</h4>
                         <h4 className="project__text">77.20%</h4>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Btech} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Academics__meta absolute">
                         <h5 className="project__text">2019-2023</h5>
                         <h4 className="project__text">Lovely Professional University</h4>
                         <h4 className="project__text">81.40%</h4>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Academics;
