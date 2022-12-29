import React from "react";
import Rating from 'react-rating';

import Navb from "../Navbar/navbar";
import './categories_details.css';

let product = 'images/products/image-004.png';
let product2 = 'images/products/image-005.png';
let product3 = 'images/products/image-006.png';

export const CategoriesDetails6 = () => {

  return (

    <div className="CategoriesDetails">
      <Navb/>
      <div className="row">
        <div className="col-sm-6 Categories">
          <span className="span-innertext"></span>
          <img src={"images/products/image-004.png"} alt="" className="img-Categories"/>

        </div>
        <div className="col-sm-6 Categories">

          <p className="prg-Categories">
            <p className="title-text">301GL Guanti in Lattice</p>
            <hr/>
            - EN455 – AQL 1.5, DPI89/686/CE:<br/>
            EN420, EN 347<br/>
            - Dispositivo medico classe 1, Dispositivo di protezione individuale CAT III<br/>
            - Taglie: S, M, L<br/>
            - Confezione: 100 pezzi<br/>
            - Disponibile con polvere e senza polvere
          </p>
          <div className="text-dt">
            <Rating
              emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >&#xf005;
            </i>}
              fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >&#xf005;
            </i>}/>
          </div>

        </div>

      </div>
    </div>

  );
}

export const CategoriesDetails7 = () => {
  return (

    <div className="CategoriesDetails">
      <Navb/>
      <div className="row">
        <div className="col-sm-6 Categories">
          <span className="span-innertext"></span>
          <img src={"images/products/image-005.png"} alt="" className="img-Categories"/>

        </div>
        <div className="col-sm-6 Categories">

          <p className="prg-Categories">
            <p className="title-text">301GV Guanti in Vinile senza polvere</p>
            <hr/>
            - EN455 – AQL 1.5, DPI89/686/CE:<br/>
            EN420, EN 347<br/>
            - Dispositivo medico classe 1, Dispositivo di protezione individuale CAT I<br/>
            - Taglie: S, M, L<br/>
            - Confezione: 100 pezzi.<br/>
            - Disponibile con polvere e senza polvere
            <br/>
          </p>
          <div className="text-dt">
            <Rating
              emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >&#xf005;
            </i>}
              fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >&#xf005;
            </i>}/>
          </div>
        </div>
      </div>
    </div>

  );
}

export const CategoriesDetails8 = () => {
  return (

    <div className="CategoriesDetails">
      <Navb/>
      <div className="row">
        <div className="col-sm-6 Categories">
          <span className="span-innertext"></span>
          <img src={"images/products/image-006.png"} alt="" className="img-Categories"/>

        </div>
        <div className="col-sm-6 Categories">

          <p className="prg-Categories">
            <p className="title-text">301GN Guanti in Nitrile senza polvere</p>
            <hr/>
            - EN455 – AQL 1.5, DPI89/686/CE:<br/>
            EN420, EN 347<br/>
            - Dispositivo medico classe 1, Dispositivo di protezione individuale CAT III<br/>
            - Taglie: S, M, L<br/>
            - Confezione: 100 pezzi<br/>
            <br/>
          </p>
          <div className="text-dt">
            <Rating
              emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >&#xf005;
            </i>}
              fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >&#xf005;
            </i>}/>
          </div>
        </div>
      </div>
    </div>

  );
}
