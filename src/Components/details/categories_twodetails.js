import React from "react";
import Rating from 'react-rating';
import Navb from "../Navbar/navbar";
import './categories_details.css';

export const CategoriesDetails3 = () => {

  return (

    <div className="CategoriesDetails">
      <Navb/>
      <div className="row">
        <div className="col-sm-6 Categories">
          <span className="span-innertext"></span>
          <img src={"images/products/image-001.png"} alt="" className="img-Categories"/>

        </div>
        <div className="col-sm-6 Categories">

          <p className="prg-Categories">
            <p className="title-text">300C Mascherina chirurgica tipo IIR</p>
            <hr/>
            - Conformi: EN14683:2019 + AC:2019.<br/>
            - BEF ≥ 98%<br/>
            - Senza Lattice.<br/>
            - Dispositivo Medico classe 1<br/>
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

export const CategoriesDetail4 = () => {
  return (

    <div className="CategoriesDetails">
      <Navb/>
      <div className="row">
        <div className="col-sm-6 Categories">
          <span className="span-innertext"></span>
          <img src={"images/products/image-002.png"} alt="" className="img-Categories"/>

        </div>
        <div className="col-sm-6 Categories">

          <p className="prg-Categories">
            <p className="title-text">3000D Semimaschera fltrante FFP2</p>
            <hr/>
            - Protezione totale.<br/>
            - Misura: 60x90cm.<br/>
            - Assorbimento ultrarapido, Superfcie morbide,<br/>
            Ipoallergenica, Delicata sulla pelle. - Disponibile con o senza ali rimboccabi,
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

export const CategoriesDetail5 = () => {
  return (

    <div className="CategoriesDetails">
      <Navb/>
      <div className="row">
        <div className="col-sm-6 Categories">
          <span className="span-innertext"></span>
          <img src={"images/products/image-003.png"} alt="" className="img-Categories"/>

        </div>
        <div className="col-sm-6 Categories">

          <p className="prg-Categories">
            <p className="title-text">3000E Semimaschera fltrante FFP3</p>
            <hr/>
            - Conformi: EN149:2001 + A1:2009.,<br/>
            - BEF ≥ 99%<br/>
            - Senza Lattice.<br/>
            - Dispositivo di protezione individuale<br/>
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
