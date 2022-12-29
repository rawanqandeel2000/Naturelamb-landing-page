import React from "react";
import './categories.css';
import Navb from "../Navbar/navbar";
import Rating from 'react-rating';
import {useNavigate} from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="categories">
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

        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetails6')}>
          <div className="box">
            <img src={"images/products/image-004.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">301GL  </span>
              Guanti in Lattice</span>
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
          onClick={() => navigate('/CategoriesDetails7')}>
          <div className="box">
            <img src={"images/products/image-005.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">301GV  </span>
              Guanti in Vinile senza polvere</span>
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
          onClick={() => navigate('/CategoriesDetails8')}>
          <div className="box">

            <img src={"images/products/image-006.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">301GN  </span>
              Guanti in Nitrile senza polvere</span>
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
          onClick={() => navigate('/CategoriesDetail9')}>
          <div className="box">
            <img alt="" src={"images/products/image-007.png"} className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302C  </span>
              Camice Impermeabile</span>
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
          onClick={() => navigate('/CategoriesDetail10')}>
          <div className="box">
            <img src={"images/products/image-008.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302D  </span>Camice monouso in TNT</span>
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
          onClick={() => navigate('/CategoriesDetail11')}>
          <div className="box">
            <img src={"images/products/image-009.png"} alt="" className="img-product"/>
            <span className="span-price ">35€
              <br/>0.035€/pz.</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302E  </span>
              Grembiule monouso</span>
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
          onClick={() => navigate('/CategoriesDetail12')}>
          <div className="box">
            <img src={"images/products/image-010.png"} alt="" className="img-product"/>
            <span className="span-price ">41€<br/>0.041€/pz.</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">30002F  </span>
              Bavaglio monouso per adulti</span>
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
          onClick={() => navigate('/CategoriesDetail13')}>
          <div className="box">
            <img src={"images/products/image-011.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302G  </span>
              Bavaglio medico monouso</span>
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
                emptySymbol={< i className = 'far' style = {{color:'#FFB300'}} >&#xf005;
              </i>}
                fullSymbol={< i className = 'fas' style = {{color:' #FFB300'}} >&#xf005;
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
              <span className="id-text">302I  </span>
              Copriscarpa in tessuto con elastico</span>
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
          onClick={() => navigate('/CategoriesDetail16')}>
          <div className="box">
            <img src={"images/products/image-014.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302J  </span>
              Copricapo monouso in TNT 8
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
          onClick={() => navigate('/CategoriesDetail17')}>
          <div className="box">
            <img src={"images/products/image-015.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">302K  </span>
              Coprimaterasso monouso</span>
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
          onClick={() => navigate('/CategoriesDetail18')}>
          <div className="box">
            <img src={"images/products/image-016.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">6001A  </span>
              Sedia comoda pieghevole 4 in 1 Antiscivolo</span>
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
          onClick={() => navigate('/CategoriesDetail19')}>
          <div className="box">
            <img src={"images/products/image-017.png"} alt="" className="img-product"/>
            <span className="span-price">48€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">6002B  </span>
              Sedia comoda pieghevole 4 in 1 con 4 ruote</span>
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
          onClick={() => navigate('/CategoriesDetail20')}>
          <div className="box">
            <img src={"images/products/image-018.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">6003C  </span>
              Sedia WC pieghevole antiscivolo</span>
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
          onClick={() => navigate('/CategoriesDetail21')}>
          <div className="box">
            <img src={"images/products/image-019.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">6004D  </span>
              Sedia WC portatile Antiscivolo</span>
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
          onClick={() => navigate('/CategoriesDetail22')}>
          <div className="box">
            <img src={"images/products/image-020.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">7001A  </span>
              Sedia comoda portatile Antiscivolo</span>
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
          onClick={() => navigate('/CategoriesDetail23')}>
          <div className="box">
            <img alt="" src={"images/products/image-021.png"} className="img-product"/>
            <span className="span-price">78€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">7002B  </span>
              Sedia comoda da toilette 5 in 1</span>
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
          onClick={() => navigate('/CategoriesDetail24')}>
          <div className="box">
            <img src={"images/products/image-022.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">7003C
              </span>Sedia a rotelle con vaso rimovibile</span>
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
          onClick={() => navigate('/CategoriesDetail25')}>
          <div className="box">
            <img src={"images/products/image-023.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">8002A  </span>
              Sedia doccia con ruote
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
          onClick={() => navigate('/CategoriesDetail26')}>
          <div className="box">
            <img src={"images/products/image-024.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">101A  </span>
              Sgabello per vasca Antiscivolo
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
          onClick={() => navigate('/CategoriesDetail27')}>
          <div className="box">
            <img alt="" src={"images/products/image-025.png"} className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">103C   </span>
              Sgabello per vasca antiscivolo
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
          onClick={() => navigate('/CategoriesDetail28')}>
          <div className="box">
            <img alt="" src={"images/products/image-026.png"} className="img-product"/>
            <span className="span-price">22,5 €</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">201A  </span>
              Sedia per doccia Antiscivolo
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
          onClick={() => navigate('/CategoriesDetail29')}>
          <div className="box">
            <img src={"images/products/image-027.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">203C  </span>
              Sedia per doccia Antiscivolo</span>
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
          onClick={() => navigate('/CategoriesDetail30')}>
          <div className="box">
            <img src={"images/products/image-028.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">301A  </span>
              Sedia per doccia con Schienale</span>
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
          onClick={() => navigate('/CategoriesDetail31')}>
          <div className="box">
            <img src={"images/products/image-029.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">401A  </span>
              Sedia per doccia con schienale</span>
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
          onClick={() => navigate('/CategoriesDetail32')}>
          <div className="box">
            <img src={"images/products/image-030.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">403E  </span>
              Sedile per doccia con braccioli
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
          onClick={() => navigate('/CategoriesDetail33')}>
          <div className="box">
            <img src={"images/products/image-031.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">404D  </span>
              Sedia per doccia a forma di U
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
          onClick={() => navigate('/CategoriesDetail34')}>
          <div className="box">
            <img alt="" src={"images/products/image-032.png"} className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">703C  </span>
              Braccioli di appoggio per WC

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
          onClick={() => navigate('/CategoriesDetail35')}>
          <div className="box">
            <img src={"images/products/image-033.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">704D  </span>
              Braccioli di appoggio per WC
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
          onClick={() => navigate('/CategoriesDetail36')}>
          <div className="box">
            <img src={"images/products/image-034.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">705E  </span>
              Maniglie di appoggio per WC
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
          onClick={() => navigate('/CategoriesDetail37')}>
          <div className="box">
            <img alt="" src={"images/products/image-035.png"} className="img-product"/>
            <span className="span-price">13,5€/14.5€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">710A / 710B  </span>
              Rialzo WC con sistema
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
          onClick={() => navigate('/CategoriesDetail39')}>
          <div className="box">
            <img alt="" src={"images/products/image-037.png"} className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">711A/711B  </span>
              Rialzo WC con sistema
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
          onClick={() => navigate('/CategoriesDetail40')}>
          <div className="box">
            <img src={"images/products/image-038.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">712A  </span>
              Rialzo WC con braccioli

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
          onClick={() => navigate('/CategoriesDetail41')}>
          <div className="box">
            <img src={"images/products/image-039.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">713A  </span>
              Rialzo WC con braccioli senza

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
          onClick={() => navigate('/CategoriesDetail42')}>
          <div className="box">
            <img src={"images/products/image-040.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">607A  </span>
              Impugnatura di sicurezza per
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
          onClick={() => navigate('/CategoriesDetail44')}>
          <div className="box">
            <img alt="" src={"images/products/image-044.png"} className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">700A / 700B  </span>
              Maniglione per bagno
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
          onClick={() => navigate('/CategoriesDetail38')}>
          <div className="box">
            <img src={"images/products/image-036.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">608  </span>
              Urinale per Uomo

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
          onClick={() => navigate('/CategoriesDetail43')}>
          <div className="box">
            <img src={"images/products/image-041.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">609  </span>
              Urinale per Donna
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
          onClick={() => navigate('/CategoriesDetail44')}>
          <div className="box">
            <img src={"images/products/image-042.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">6010  </span>
              Urinale Unisex
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
          onClick={() => navigate('/CategoriesDetail45')}>
          <div className="box">
            <img src={"images/products/image-045.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">3001B  </span>
              Deambulatore pieghevole light</span>
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
          onClick={() => navigate('/CategoriesDetail46')}>
          <div className="box">
            <img src={"images/products/image-046.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">1004D  </span>
              Deambulatore pieghevole stand
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
          onClick={() => navigate('/CategoriesDetail47')}>
          <div className="box">
            <img src={"images/products/image-047.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">1009  </span>
              Deambulatore Wehda

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
          onClick={() => navigate('/CategoriesDetail48')}>
          <div className="box">
            <img src={"images/products/image-048.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">1001A  </span>
              Deambulatore Pieghevole trasform
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
          onClick={() => navigate('/CategoriesDetail49')}>
          <div className="box">
            <img src={"images/products/image-049.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">3004H  </span>
              Deambulatore trasformabile

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
          onClick={() => navigate('/CategoriesDetail50')}>
          <div className="box">
            <img src={"images/products/image-050.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">1005E  </span>
              Deambulatore Active

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
          onClick={() => navigate('/CategoriesDetail51')}>
          <div className="box">
            <img src={"images/products/image-054.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">3005E  </span>
              Deambulatore Pieghevole

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
          onClick={() => navigate('/CategoriesDetail52')}>
          <div className="box">
            <img src={"images/products/image-055.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">305E1  </span>
              Deambulatore con 2 ruote 360
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
          onClick={() => navigate('/CategoriesDetail53')}>
          <div className="box">
            <img src={"images/products/image-051.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">3005F  </span>
              Deambulatore con 4 ruote

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
          onClick={() => navigate('/CategoriesDetail54')}>
          <div className="box">
            <img src={"images/products/image-052.png"} alt="" className="img-product"/>
            <span className="span-price">22€</span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">802B  </span>
              Deambulatore pieghevole antiscivolo
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
          onClick={() => navigate('/CategoriesDetail55')}>
          <div className="box">
            <img src={"images/products/image-053.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">804D  </span>
              Deambulatore Pieghevole a 2ruote
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
              Gelatina riutilizzabile caldo/</span>

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

        <div
          className="col-sm-3  propuct"
          onClick={() => navigate('/CategoriesDetail79')}>
          <div className="box">
            <img src={"images/products/image-081.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303C / 303D </span>
              Pigiama intero sanitario con
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
          onClick={() => navigate('/CategoriesDetail80')}>
          <div className="box">
            <img src={"images/products/image-083.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303E  </span>
              Camicie
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
          onClick={() => navigate('/CategoriesDetail81')}>
          <div className="box">
            <img src={"images/products/image-084.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303F  </span>
              Bavaglino Impermeabile
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
          onClick={() => navigate('/CategoriesDetail82')}>
          <div className="box">
            <img src={"images/products/image-085.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303G  </span>
              Traverse assorbenti riutilizzabili

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
          onClick={() => navigate('/CategoriesDetail83')}>
          <div className="box">
            <img src={"images/products/image-086.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303J  </span>
              Coprimaterasso impermeabile</span>

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
          onClick={() => navigate('/CategoriesDetail84')}>
          <div className="box">
            <img src={"images/products/image-087.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">303K  </span>
              Coprimaterasso in polietilene
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
          onClick={() => navigate('/CategoriesDetail85')}>
          <div className="box">
            <img src={"images/products/image-088.png"} alt="" className="img-product"/>
            <span className="span-price"></span>
          </div>
          <div className="inner-box">
            <span className="text-inner">
              <span className="id-text">30003N  </span>
              Copricuscini in polietilene
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

export default Categories;
