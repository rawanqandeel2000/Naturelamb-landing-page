import React from "react";
import './categories.css';
import Navb from "../Navbar/navbar";
import Rating from 'react-rating';
import {useNavigate} from "react-router-dom";

const CategoriesThirdlist = () => {
  const navigate = useNavigate();
  return (

    <div className="categories">
      <Navb/>
      <div className="row">
        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetails6')}>
          <div className="box">
            <img src={"images/products/image-004.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">301GL</span>
              Guanti in Lattice</span>
            <div className="">
              <Rating
                emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >& #xf005;
              </i>}
                fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >& #xf005;
              </i>}/>
            </div>
          </div>
        </div>

        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetails7')}>
          <div className="box">
            <img src={"images/products/image-005.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">301GV</span>
              Guanti in Vinile senza polvere</span>
            <div className="">

              <Rating
                emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >& #xf005;
              </i>}
                fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >& #xf005;
              </i>}/>
            </div>
          </div>
        </div>

        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetails8')}>
          <div className="box">

            <img src={"images/products/image-006.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">301GN
              </span>Guanti in Nitrile senza polvere</span>
            <div className="">

              <Rating
                emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >& #xf005;
              </i>}
                fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >& #xf005;
              </i>}/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CategoriesThirdlist;