import React from "react";
import '../Footer/footer.css'


function Footer(){

    return(
        <div className="bodyFooter">

<div class="page-wrapper">
    <div id="waterdrop"></div>
    <footer>
      
      <div class="footer-bottom">
        <div class="container">
          <div class="row">

            <div class="col-md-3">
              <div class="footer-site-info">2020 © <a href="https://www.youtube.com/watch?v=pdr4IzBpacI&t=34s" target="_blank">Top HTML & CSS Program </a></div>
            </div>

            

            <div class="col-md-3">
              <div id="footer-socials">
                <div class="socials inline-inside socials-colored">

                  <a href="#" target="_blank" title="Facebook" class="socials-item">
                    <i class="fab fa-facebook-f facebook"></i>
                  </a>
                  <a href="#" target="_blank" title="Twitter" class="socials-item">
                    <i class="fab fa-twitter twitter"></i>

                  </a>
                  <a href="#" target="_blank" title="Instagram" class="socials-item">
                    <i class="fab fa-instagram instagram"></i>
                  </a>
                  <a href="#" target="_blank" title="YouTube" class="socials-item">
                    <i class="fab fa-youtube youtube"></i>
                  </a>
                  <a href="#" target="_blank" title="Telegram" class="socials-item">
                    <i class="fab fa-telegram telegram"></i>
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