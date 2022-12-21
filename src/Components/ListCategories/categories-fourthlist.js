import React from "react";
import './categories.css';
import Navb from "../Navbar/navbar";
import Rating from 'react-rating';
import {useNavigate} from "react-router-dom";

const CategoriesFourthlist = () => {
  const navigate = useNavigate();
  return (
    <div className="categories-firstlist">
      <Navb/>
      <div className="row">
        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetail9')}>
          <div className="box">
            <img alt="" src={"images/products/image-007.png"} className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302C</span>
              Camice Impermeabile</span>
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
          onClick={() => navigate('/CategoriesDetail10')}>
          <div className="box">
            <img src={"images/products/image-008.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302D
              </span>Camice monouso in TNT</span>
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
          onClick={() => navigate('/CategoriesDetail11')}>
          <div className="box">
            <img src={"images/products/image-009.png"} alt="" className="img-product"/>
            <span className="span-price ">35€
              <br/>0.035€/pz.</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302E</span>
              Grembiule monouso</span>
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
          onClick={() => navigate('/CategoriesDetail12')}>
          <div className="box">
            <img src={"images/products/image-010.png"} alt="" className="img-product"/>
            <span className="span-price ">41€<br/>0.041€/pz.</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">30002F</span>
              Bavaglio monouso per adulti</span>
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
          onClick={() => navigate('/CategoriesDetail13')}>
          <div className="box">
            <img src={"images/products/image-011.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302G
              </span>Bavaglio medico monouso</span>
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
          onClick={() => navigate('/CategoriesDetail14')}>
          <div className="box">
            <img src={"images/products/image-012.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302H
              </span>Copriscarpa in Polipropilene</span>
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
          onClick={() => navigate('/CategoriesDetail15')}>
          <div className="box">
            <img src={"images/products/image-013.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302I
              </span>
              Copriscarpa in tessuto con elastico</span>
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
          onClick={() => navigate('/CategoriesDetail16')}>
          <div className="box">
            <img src={"images/products/image-014.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302J
              </span>
              Copricapo monouso in TNT 8
            </span>
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
          onClick={() => navigate('/CategoriesDetail17')}>
          <div className="box">
            <img src={"images/products/image-015.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302K
              </span>
              Coprimaterasso monouso</span>
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
export default CategoriesFourthlist;