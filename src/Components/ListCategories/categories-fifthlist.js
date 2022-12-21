import React from "react";
import './categories.css';
import Rating from 'react-rating';
import Navb from "../Navbar/navbar";

import {useNavigate} from "react-router-dom";

const CategoriesFifthtlist = () => {
  const navigate = useNavigate();
  return (
    <div className="categories-firstlist">
      <Navb/>
      <div className="row">
        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetail18')}>
          <div className="box">
            <img src={"images/products/image-016.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">6001A
              </span>Sedia comoda pieghevole 4 in 1 Antiscivolo</span>
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
          onClick={() => navigate('/CategoriesDetail19')}>
          <div className="box">
            <img src={"images/products/image-017.png"} alt="" className="img-product"/>
            <span className="span-price">48€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">6002B
              </span>
              Sedia comoda pieghevole 4 in 1 con 4 ruote</span>
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
          onClick={() => navigate('/CategoriesDetail20')}>
          <div className="box">
            <img src={"images/products/image-018.png"} alt="" className="img-product"/>
            <span className="span-price">$1280</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">6003C
              </span>Sedia WC pieghevole antiscivolo</span>
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
          onClick={() => navigate('/CategoriesDetail21')}>
          <div className="box">
            <img src={"images/products/image-019.png"} alt="" className="img-product"/>
            <span className="span-price">$1280</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">6004D
              </span>
              Sedia WC portatile Antiscivolo</span>
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
          onClick={() => navigate('/CategoriesDetail22')}>
          <div className="box">
            <img src={"images/products/image-020.png"} alt="" className="img-product"/>
            <span className="span-price">$1280</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">7001A
              </span>Sedia comoda portatile Antiscivolo</span>
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
          onClick={() => navigate('/CategoriesDetail23')}>
          <div className="box">
            <img alt="" src={"images/products/image-021.png"} className="img-product"/>
            <span className="span-price">78€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">7002B
              </span>Sedia comoda da toilette 5 in 1</span>
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
          onClick={() => navigate('/CategoriesDetail24')}>
          <div className="box">
            <img src={"images/products/image-022.png"} alt="" className="img-product"/>
            <span className="span-price">$1280</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">7003C
              </span>Sedia a rotelle con vaso rimovibile</span>
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
          onClick={() => navigate('/CategoriesDetail25')}>
          <div className="box">
            <img src={"images/products/image-023.png"} alt="" className="img-product"/>
            <span className="span-price">$1280</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">8002A
              </span>Sedia doccia con ruote
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
          onClick={() => navigate('/CategoriesDetail26')}>
          <div className="box">
            <img src={"images/products/image-024.png"} alt="" className="img-product"/>
            <span className="span-price">$1280</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">101A
              </span>
              Sgabello per vasca Antiscivolo
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
          onClick={() => navigate('/CategoriesDetail27')}>
          <div className="box">
            <img alt="" src={"images/products/image-025.png"} className="img-product"/>
            <span className="span-price">$1280</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">
                103C
              </span>Sgabello per vasca antiscivolo

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
          onClick={() => navigate('/CategoriesDetail28')}>
          <div className="box">
            <img alt="" src={"images/products/image-026.png"} className="img-product"/>
            <span className="span-price">22,5 €</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">201A
              </span>Sedia per doccia Antiscivolo

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
          onClick={() => navigate('/CategoriesDetail29')}>
          <div className="box">
            <img src={"images/products/image-027.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">203C
              </span>
              Sedia per doccia Antiscivolo</span>
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
          onClick={() => navigate('/CategoriesDetail30')}>
          <div className="box">
            <img src={"images/products/image-028.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">301A
              </span>
              Sedia per doccia con Schienale</span>
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
          onClick={() => navigate('/CategoriesDetail31')}>
          <div className="box">
            <img src={"images/products/image-029.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">401A
              </span>
              Sedia per doccia con schienale</span>
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
          onClick={() => navigate('/CategoriesDetail32')}>
          <div className="box">
            <img src={"images/products/image-030.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">403E
              </span>
              Sedile per doccia con braccioli
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
          onClick={() => navigate('/CategoriesDetail33')}>
          <div className="box">
            <img src={"images/products/image-031.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">404D
              </span>
              Sedia per doccia a forma di U
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
          onClick={() => navigate('/CategoriesDetail34')}>
          <div className="box">
            <img alt="" src={"images/products/image-032.png"} className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">703C
              </span>
              Braccioli di appoggio per WC

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
          onClick={() => navigate('/CategoriesDetail35')}>
          <div className="box">
            <img src={"images/products/image-033.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">704D
              </span>
              Braccioli di appoggio per WC

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
          onClick={() => navigate('/CategoriesDetail36')}>
          <div className="box">
            <img src={"images/products/image-034.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">705E
              </span>
              Maniglie di appoggio per WC
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
          onClick={() => navigate('/CategoriesDetail37')}>
          <div className="box">
            <img alt="" src={"images/products/image-035.png"} className="img-product"/>
            <span className="span-price">13,5€/14.5€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">710A / 710B
              </span>
              Rialzo WC con sistema

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
          onClick={() => navigate('/CategoriesDetail39')}>
          <div className="box">
            <img alt="" src={"images/products/image-037.png"} className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">711A/711B
              </span>Rialzo WC con sistema
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
          onClick={() => navigate('/CategoriesDetail40')}>
          <div className="box">
            <img src={"images/products/image-038.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">712A</span>
              Rialzo WC con braccioli

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
          onClick={() => navigate('/CategoriesDetail41')}>
          <div className="box">
            <img src={"images/products/image-039.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">713A</span>
              Rialzo WC con braccioli senza

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
          onClick={() => navigate('/CategoriesDetail42')}>
          <div className="box">
            <img src={"images/products/image-040.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">607A</span>
              Impugnatura di sicurezza per
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
          onClick={() => navigate('/CategoriesDetail44')}>
          <div className="box">
            <img alt="" src={"images/products/image-044.png"} className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">700A / 700B
              </span>
              Maniglione per bagno
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
          onClick={() => navigate('/CategoriesDetail38')}>
          <div className="box">
            <img src={"images/products/image-036.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">608</span>
              Urinale per Uomo

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
          onClick={() => navigate('/CategoriesDetail43')}>
          <div className="box">
            <img src={"images/products/image-041.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">609
              </span>
              Urinale per Donna
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
          onClick={() => navigate('/CategoriesDetail44')}>
          <div className="box">
            <img src={"images/products/image-042.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">6010
              </span>
              Urinale Unisex
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

export default CategoriesFifthtlist;