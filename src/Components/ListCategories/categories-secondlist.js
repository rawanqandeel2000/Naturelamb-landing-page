import React from "react";
import './categories.css';
import Navb from "../Navbar/navbar";
import Rating from 'react-rating';
import {useNavigate} from "react-router-dom";

const CategoriesSecondlist = () => {
  const navigate = useNavigate();
  return (

    <div className="categories-firstlist">
      <Navb/>
      <div className="row">

        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetails3')}>
          <div className="box">

            <img src={"images/products/image-001.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">300C  </span>
              Mascherina chirurgica tipo IIR</span>
            <div className="">

              <Rating
                emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >&#xf005;
              </i>}
                fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >&#xf005;
              </i>}/>
            </div>
          </div>
        </div>

        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetail4')}>
          <div className="box">

            <img src={"images/products/image-002.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">3000D  </span>
              Semimaschera fltrante FFP2</span>
            <div className="">

              <Rating
                emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >&#xf005;
              </i>}
                fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >&#xf005;
              </i>}/>
            </div>
          </div>
        </div>

        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetail5')}>
          <div className="box">
            <img alt="" src={"images/products/image-003.png"} className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">3000E  </span>
              Semimaschera fltrante FFP3</span>
            <div className="">

              <Rating
                emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >&#xf005;
              </i>}
                fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >&#xf005;
              </i>}/>
            </div>
          </div>
        </div>

      </div>
    </div>

  );
}

export default CategoriesSecondlist;