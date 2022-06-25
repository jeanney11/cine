import React from "react";
import '../Login/signIn.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';


function SignIn(){

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // console.log(regexEmail.test(email));
    
        if (email === "" || password === "") {
          swal({text:"Los campos no pueden estar vacios", icon: "error"});
    
          return;
        }
        if (email !== "" && !regexEmail.test(email)) {
          swal(
            {text:"Debes escribir una direccion de correo electronico valida", icon:"error"}
          );
    
          return;
        }
        // if (email !== "challenge@alkemy.org" || password !== "react") {
        //   swAlert(<h2> Credenciales invalidas</h2>);
        //   return;
        // }

        axios.post("http://challenge-react.alkemy.org",{email, password})
      .then((res) => {
        swal(<h2> Perfecto, Ingresaste Correctamente</h2>);
        const tokenRecibido = res.data.token;
        
        sessionStorage.setItem("token", tokenRecibido);
        
    //    <Link>("/")</Link>;
      });
    };

    return(
        <>
        {/* // <div className="bodySignIn"> */}

    {/* <div className="backgroundSignIn">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form className="form" onClick={submitHandler}>
        <h3>Login Here</h3>

        <label>Email</label>
        <input type="text" placeholder="Email" name="email"/>

        <label for="password">Password</label>
        <input type="password" placeholder="Password" name="password"/>

        <button type="submit">Log In</button> */}

        {/* <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div> */}
    {/* </form> */}



        {/* </div> */}

       
        <div className="container ">
        <div className="row justify-content-end">
          <div className="col-8">
            <h2 className="titulo-login">Formulario de login</h2>
            <form className="row g-4" onSubmit={submitHandler}>
              <label className="form-label">
                <span className="correoE">Correo electrónico:</span>
                <br />
                <input className="correoe" type="text" name="email" />
                <br />
              </label>
              <br />
              <label>
                <span className="contrasena">Contraseña:</span>
                <br />
                <input className="correoe" type="password" name="password" />
                <br />
              </label>
              <br />
              <div className="d-grid gap-2 d-md-block">
                <button type="submit" className="btn btn-dark">
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
        
    );
}

export default SignIn