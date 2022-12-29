import * as React from 'react';
import './categories.css';
import Navb from "../Navbar/navbar";
import Rating from 'react-rating';
import {useNavigate} from "react-router-dom";

const CategoriesFirstlist = () => {
  const navigate = useNavigate();
  return (
    <div className="categories-firstlist">
      <Navb/>
      <div className="row">
        <div
          className="col-sm-3 propuct"
          onClick={() => navigate('/CategoriesDetailsOne')}>
          <div className="box">
            <img src={"images/products/image-000.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">INC01  </span>
              Traversa Salvaletto
            </span>
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
          onClick={() => navigate('/CategoriesDetailTwo')}>
          <div className="box">
            <img src={"images/products/image-000.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">INC01-A  </span>
              Traversa Salvaletto Wings
            </span>
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
          onClick={() => navigate('/CategoriesDetailThree')}>
          <div className="box">

            <img src={"images/products/image-000.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">INC-01A  </span>
              Traversa Salvaletto Maxi</span>
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

export default CategoriesFirstlist;