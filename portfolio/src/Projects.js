import React from "react";
import "./Projects.css";
import Project1 from './img/project1.png';
import Project2 from './img/project2.jpg';
import Project3 from './img/project3.png';


function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
        If you undertake projects in mind, never leave for tomorrow,
        </p>
        <p className="heading p__color">
        I feel like every project I work on is a dream project, so long as I am learning.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Tip Calculator</h5>
                     <h2 className="project__text">A Tip Calculator is a calculator that calculates a tip based on the percentage of the total bill and amount paid.</h2>
                     <a href="https://github.com/bipasha20/Tip_Calculator.git" target="_blank" className="project__btn">Github Link</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Hex-code Generator</h5>
                     <h2 className="project__text">Generate hexadecimal color codes using true randomness, originating from atmospheric noise</h2>
                     <a href="https://github.com/bipasha20/Hexcode.git" target="_blank" className="project__btn">Github Link</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Online Tuckshop Management</h5>
                     <h2 className="project__text">Tuckshop is the easiest online ordering system available. It’s simple for parents to order and easy for schools to operate.</h2>
                     <a href="https://github.com/bipasha20/Online_Tuckshop_Management.git" target="_blank" className="project__btn">Github Link</a>
                     </div>
                 </div>
             </div>           
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn"><a href="https://github.com/bipasha20" target="_blank">My Github</a></button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
