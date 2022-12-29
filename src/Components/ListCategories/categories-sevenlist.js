import React from "react";
import './categories.css';
import Navb from "../Navbar/navbar";
import Rating from 'react-rating';
import {useNavigate} from "react-router-dom";

const CategoriesSeventhlist = () => {
  const navigate = useNavigate();
  return (
    <div className="Categories-Seventhlist">
      <Navb/>
      <div className="row">

        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetail56')}>
          <div className="box">
            <img src={"images/products/image-056.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">1101A  </span>
              Tavolino ausiliario inclinabile</span>
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
          onClick={() => navigate('/CategoriesDetail57')}>
          <div className="box">
            <img src={"images/products/image-057.png"} alt="" className="img-product"/>
            <span className="span-price">45€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">1101B  </span>
              Tavolino ausiliario
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
          onClick={() => navigate('/CategoriesDetail58')}>
          <div className="box">
            <img src={"images/products/image-063.png"} alt="" className="img-product"/>
            <span className="span-price">22€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">902  </span>
              Pedaliera pieghevole
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
          onClick={() => navigate('/CategoriesDetail59')}>
          <div className="box">
            <img src={"images/products/image-062.png"} alt="" className="img-product"/>
            <span className="span-price">$27€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">903  </span>
              Palline per riabilitazione
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
          onClick={() => navigate('/CategoriesDetail60')}>
          <div className="box">
            <img src={"images/products/image-064.png"} alt="" className="img-product"/>
            <span className="span-price">37€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">908  </span>
              Pedaliera in acciaio con mpugnature
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
          onClick={() => navigate('/CategoriesDetail61')}>
          <div className="box">
            <img src={"images/products/image-066.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">909  </span>
              Palline per riabilitazione
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
          onClick={() => navigate('/CategoriesDetail62')}>
          <div className="box">
            <img src={"images/products/image-058.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">911  </span>
              Fasce elastiche

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
          onClick={() => navigate('/CategoriesDetail63')}>
          <div className="box">
            <img src={"images/products/image-059.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">912  </span>
              Borsa acqua calda

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
          onClick={() => navigate('/CategoriesDetail64')}>
          <div className="box">
            <img src={"images/products/image-060.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">913  </span>
              Borsa ghiaccio
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
          onClick={() => navigate('/CategoriesDetail65')}>
          <div className="box">
            <img src={"images/products/image-061.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">914  </span>
              Gelatina riutilizzabile caldo</span>

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
          onClick={() => navigate('/CategoriesDetail66')}>
          <div className="box">
            <img src={"images/products/image-067.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">915  </span>
              Ghiaccio istantaneo
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
          onClick={() => navigate('/CategoriesDetail67')}>
          <div className="box">
            <img src={"images/products/image-068.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">916  </span>
              Ghiaccio Spray

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
          onClick={() => navigate('/CategoriesDetail68')}>
          <div className="box">
            <img src={"images/products/image-069.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">917  </span>
              Cuscino di farro cervicale
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
          onClick={() => navigate('/CategoriesDetail69')}>
          <div className="box">
            <img src={"images/products/image-070.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">918  </span>
              Cuscino termico
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
          onClick={() => navigate('/CategoriesDetail70')}>
          <div className="box">
            <img src={"images/products/image-071.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">919  </span>
              Cuscino termico cervicale
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
          onClick={() => navigate('/CategoriesDetail71')}>
          <div className="box">
            <img src={"images/products/image-072.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">920  </span>
              Scaldacollo e schiena

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
          onClick={() => navigate('/CategoriesDetail72')}>
          <div className="box">
            <img src={"images/products/image-073.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">921  </span>
              Scaldaletto materasso
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
          onClick={() => navigate('/CategoriesDetail73')}>
          <div className="box">
            <img src={"images/products/image-074.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">922  </span>
              Scaldapiedi elettrico</span>

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
export default CategoriesSeventhlist;
