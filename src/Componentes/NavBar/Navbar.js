import React from "react";
import "./navbar.css";
import Logo from "../Imagenes/logo.png";
import { Link, Link as LinkRouter } from "react-router-dom";
import swal from "sweetalert";
import Search from '../Search/Search.js';


function Navbar() {

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword= e.currentTarget.keyword.value.trim()
    
    if(keyword.length === 0){
       swal(<h5>Tiene que escribir una palabra</h5>)
    }else if (keyword.length <4){
        swal(<h5>Tiene que escribir mas de 4 caracteres</h5>)
    }else{
      e.currentTarget.keyword.value='';
     <Link>(`/resultados?keyword=${keyword}`)</Link>
    }
}

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
          <li>
          <LinkRouter to="/Favorito"><a className="btn btn-transparent" >
                 FAVORITE
                </a> </LinkRouter>
          </li>
          {/* <li>
          <LinkRouter to="/SingIn"><a className="btn btn-transparent" >
                 Login
                </a> </LinkRouter>
          </li> */}
        </ul>
      </nav>

      <Search/>
    </div>
  );
}

export default Navbar;
