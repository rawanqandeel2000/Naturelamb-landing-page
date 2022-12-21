import React from "react";
import './categories.css';
import Navb from "../Navbar/navbar";
import Rating from 'react-rating';
import {useNavigate} from "react-router-dom";

const CategoriesNinthlist = () => {
  const navigate = useNavigate();
  return (

    <div className="categories-ninthlist">
      <Navb/>
      <div className="row">
        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetail79')}>
          <div className="box">
            <img src={"images/products/image-081.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303C / 303D
              </span>Pigiama intero sanitario con
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
          onClick={() => navigate('/CategoriesDetail80')}>
          <div className="box">
            <img src={"images/products/image-083.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303E</span>
              Camicie
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
          onClick={() => navigate('/CategoriesDetail81')}>
          <div className="box">
            <img src={"images/products/image-084.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303F</span>
              Bavaglino Impermeabile
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
          onClick={() => navigate('/CategoriesDetail82')}>
          <div className="box">
            <img src={"images/products/image-085.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303G</span>
              Traverse assorbenti riutilizzabili

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
          onClick={() => navigate('/CategoriesDetail83')}>
          <div className="box">
            <img src={"images/products/image-086.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303J</span>
              Coprimaterasso impermeabile</span>

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
          onClick={() => navigate('/CategoriesDetail84')}>
          <div className="box">
            <img src={"images/products/image-087.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303K</span>
              Coprimaterasso in polietilene
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
          onClick={() => navigate('/CategoriesDetail85')}>
          <div className="box">
            <img src={"images/products/image-088.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">30003N</span>
              Copricuscini in polietilene
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
      </div>
    </div>
  );
}
export default CategoriesNinthlist;
