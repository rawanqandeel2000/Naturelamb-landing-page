import React from "react";
import './categories.css';
import Rating from 'react-rating';
import Navb from "../Navbar/navbar";
import {useNavigate} from "react-router-dom";

let blk = 'images/products/slide2.png';
const CategoriesEighthlist = () => {
  const navigate = useNavigate();
  return (
    <div className="categories-eighthlist">
      <Navb/>
      <div className="row">
        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetail74')}>
          <div className="box">
            <img src={"images/products/image-076.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">IP1  </span>
              Spugna presaponata imbustata</span>
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
          onClick={() => navigate('/CategoriesDetail75')}>
          <div className="box">
            <img src={"images/products/image-077.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">IP2  </span>
              Manopola presaponata</span>
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
          onClick={() => navigate('/CategoriesDetail76')}>
          <div className="box">
            <img src={"images/products/image-078.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">IP3  </span>
              Manopola presaponata 2 latt</span>
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
          onClick={() => navigate('/CategoriesDetail77')}>
          <div className="box">
            <img src={"images/products/image-080.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">IP4  </span>
              Manopola lava pazienti in TNT
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
          onClick={() => navigate('/CategoriesDetail78')}>
          <div className="box">
            <img src={"images/products/image-079.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">IP5  </span>
              Salviette monouso assorbente
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

      </div>
    </div>
  );
}

export default CategoriesEighthlist;