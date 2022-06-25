import React from "react";
import '../Footer/footer.css'


function Footer(){

    return(
        <div className="bodyFooter">

<div className="page-wrapper">
    <div id="waterdrop"></div>
    <footer>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="row">

            <div className="col-md-3">
              <div className="footer-site-info">2022 © <a href="https://www.youtube.com/watch?v=pdr4IzBpacI&t=34s" target="_blank">Jeanney Claivel Reyes Z. </a></div>
            </div>

            

            <div className="col-md-3">
              <div id="footer-socials">
                <div className="socials inline-inside socials-colored">

                  <a href="https://www.facebook.com/" target="_blank" title="Facebook" className="socials-item">
                    <i className="fab fa-facebook-f facebook"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/jeanney-claivel-reyes-b6071520b/" target="_blank" title="Linkelin" className="socials-item">
                    <i className="fab fa-twitter twitter"></i>

                  </a>
                  <a href="https://api.whatsapp.com/send?phone=91154162440" target="_blank" title="Whatshap" className="socials-item">
                    <i className="fab fa-instagram instagram"></i>
                  </a>
                  <a href="https://github.com/jeanney11" target="_blank" title="GitHub" className="socials-item">
                    <i className="fab fa-youtube youtube"></i>
                  </a>
                  <a href="https://jclayrz11@gmail.com" target="_blank" title="Gmail" className="socials-item">
                    <i className="fab fa-telegram telegram"></i>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  </div>
  

        </div>
    );
}

export default Footer;