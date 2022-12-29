import React from "react";
import Rating from 'react-rating';
import Navb from "../Navbar/navbar";
import './categories_details.css';

export const CategoriesDetailsOne = () => {
  return (

    <div className="CategoriesDetails">
      <Navb/>
      <div className="row">
        <div className="col-sm-6 Categories">
          <span className="span-innertext"></span>
          <img src={"images/products/image-000.png"} alt="" className="img-Categories"/>

        </div>
        <div className="col-sm-6 Categories">

          <p className="prg-Categories">
            <p className="title-text">INC01 Traversa Salvaletto</p>
            <hr/>
            - Protezione totale
            <br/>
            - Misura: 60x60cm.<br/>
            - Assorbimento ultrarapido, Superfcie morbide,<br/>
            Ipoallergenica, Delicata sulla pelle.<br/>
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

export const CategoriesDetailTwo = () => {
  return (

    <div className="CategoriesDetails">
      <Navb/>
      <div className="row">
        <div className="col-sm-6 Categories">
          <span className="span-innertext"></span>
          <img src={"images/products/image-000.png"} alt="" className="img-Categories"/>

        </div>
        <div className="col-sm-6 Categories">

          <p className="prg-Categories">
            <p className="title-text">INC01-A Traversa Salvaletto Wings</p>
            <hr/>
            - Protezione totale.<br/>
            - Misura: 60x90cm.<br/>
            - Assorbimento ultrarapido, Superfcie morbide,<br/>
            Ipoallergenica, Delicata sulla pelle. - Disponibile con o senza ali rimboccabi
            <br/>
          </p>
          <div className="text-dt">
            <Rating
              emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >&#xf005;</i>}
              fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >&#xf005;</i>}/>
          </div>
        </div>
      </div>
    </div>

  );
}

export const CategoriesDetailThree = () => {
  return (

    <div className="CategoriesDetails">
      <Navb/>
      <div className="row">
        <div className="col-sm-6 Categories">
          <span className="span-innertext"></span>
          <img src={"images/products/image-000.png"} alt="" className="img-Categories"/>

        </div>
        <div className="col-sm-6 Categories">

          <p className="prg-Categories">
            <p className="title-text">INC-01A Traversa Salvaletto Maxi</p>
            <hr/>
            - Protezione totale.<br/>
            - Misura: 90x90cm / 80x180 cm.<br/>
            - Assorbimento ultrarapido,<br/>
            Superfcie morbide, Ipoallergenica, Delicata sulla pelle.
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
