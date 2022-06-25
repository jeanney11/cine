import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import "../Search/search.css";

function Search() {
  const navegacion = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      swal(<h5>Tiene que escribir una palabra</h5>);
    } else if (keyword.length < 4) {
      swal(<h5>Tiene que escribir mas de 4 caracteres</h5>);
    } else {
      e.currentTarget.keyword.value = "";
      navegacion(`/Result?keyword=${keyword}`);
    }
  };
  return (
    <div className="bodySearch">
      {/* boton search */}
      <div id="coverSearch">
        <form className="d-flex alig-items-center" onSubmit={submitHandler}>
          <div className="tb">
            <div className="td">
              <input
                className="form-control"
                type="text"
                name="keyword"
                placeholder="Search ..."
              />
            </div>
            <div className="td" id="s-cover">
              <button type="submit" className="btn btn-success  mx-3">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;

{
  /* <form className="d-flex alig-items-center" onSubmit={submitHandler}>
  
        <label className="form-label mb-0 mx-4 my-2">
          <input className="form-control" type="text" name="keyword" placeholder="Buscar.."/>
        </label>
          <button type="submit" className="btn btn-success  mx-3">Buscar</button>
        
      </form> */
}

/* function Search() {
    
    const submitHandler = (e) => {
        e.preventDefault();
        const keyword= e.currentTarget.keyword.value.trim()
        // const navegacion = useNavigate();

        if(keyword.length === 0){
           swal({text:"Tiene que escribir una palabra"})
        }else if (keyword.length <4){
            swal({text:"Tiene que escribir mas de 4 caracteres"})
        }else{
          e.currentTarget.keyword.value='';
          <Link to={`/Result?keyword=${keyword}`}></Link>
         
        }
    }

  return (
    <form className="d-flex alig-items-center" onSubmit={submitHandler}>
      <label className="form-label mb-0 mx-4 my-2">
        <input
          className="form-control"
          type="text"
          name="keyword"
          placeholder="Buscar.."
        />
      </label>
      <button type="submit" className="btn btn-success  mx-3">
        Buscar
      </button>
    </form> */

// <div className="bodySearch">
//   {/* boton search */}
//   <div id="coverSearch">
//     <form className="formSearch" method="get" action="" onSubmit={submitHandler}>
//       <div className="tb">
//         <div className="td">
//           <input className="inputSearch" type="text" placeholder="Search" required/>
//         </div>
//         <div className="td" id="s-cover">
//           <button className="buttonSearch" type="submit">
//             <div id="s-circle"></div>
//             <span></span>
//           </button>
//         </div>
//       </div>
//     </form>
//   </div>
// </div>
/*  );
}
export default Search; */
