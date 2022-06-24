import React from "react";
import "./navbar.css";
import Logo from "../Imagenes/logo.png";
import { Link as LinkRouter } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbarBody">
      <img src={Logo} alt="Cine" width={100} />

      <nav>
        <ul>
          <li>
          <LinkRouter to="/">
            <a className="btn btn-transparent dropdown">
              HOME
            </a>
          </LinkRouter>
          </li>
          {/* <li>
            <a href="#"></a>
          </li> */}
          <li>
          <LinkRouter to="/Favorite"><a className="btn btn-transparent" >
                 FAVORITE
                </a> </LinkRouter>
          </li>
          <li>
          <LinkRouter to="/SingIn"><a className="btn btn-transparent" >
                 Login
                </a> </LinkRouter>
          </li>
        </ul>
      </nav>

      {/* boton search */}
      <div id="coverSearch">
        <form className="formSearch" method="get" action="">
          <div class="tb">
            <div class="td">
              <input
                className="inputSearch"
                type="text"
                placeholder="Search"
                required
              />
            </div>
            <div class="td" id="s-cover">
              <button className="buttonSearch" type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>

{/* <nav class="navbar navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 */}



    </div>
  );
}

export default Navbar;
