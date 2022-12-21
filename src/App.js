import * as React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Views/Home/home.view";
import About from "./Views/About/about.view";
import Contact from "./Views/Contactus/contact.view";
import Products from "./Views/Products/products.view";
import Categories from "./Components/ListCategories/categories"
import ProductDetails from "./Views/ProductDetails/product-details.view";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import CategoriesFirstlist from "./Components/ListCategories/categories-firstlist";
import Categoriesecondlist from "./Components/ListCategories/categories-secondlist";
import CategoriesThirdlist from "./Components/ListCategories/Categories-thirdlist";
import CategoriesFourthlist from "./Components/ListCategories/categories-fourthlist";
import CategoriesFifthtlist from "./Components/ListCategories/categories-fifthlist";
import CategoriesSixthlist from "./Components/ListCategories/categories-sixthlist";
import CategoriesSeventhlist from "./Components/ListCategories/categories-sevenlist";
import CategoriesEighthlist from "./Components/ListCategories/categories-eighthlist";
import CategoriesNinthlist from "./Components/ListCategories/categories-ninthlist";
import {CategoriesDetailsOne, CategoriesDetailThree, CategoriesDetailTwo} from "./Components/details/categories_firstdetails";
import {CategoriesDetails3, CategoriesDetail4, CategoriesDetail5} from "./Components/details/categories_twodetails";
import {CategoriesDetails6, CategoriesDetails7, CategoriesDetails8} from "./Components/details/categories_threedetails";
import {
  CategoriesDetail10,
  CategoriesDetail11,
  CategoriesDetail12,
  CategoriesDetail13,
  CategoriesDetail14,
  CategoriesDetail15,
  CategoriesDetail16,
  CategoriesDetail17,
  CategoriesDetail9
} from "./Components/details/categories_fourdetails";
import {
  CategoriesDetail18,
  CategoriesDetail19,
  CategoriesDetail20,
  CategoriesDetail21,
  CategoriesDetail22,
  CategoriesDetail23,
  CategoriesDetail24,
  CategoriesDetail25,
  CategoriesDetail26,
  CategoriesDetail27,
  CategoriesDetail28,
  CategoriesDetail29,
  CategoriesDetail30,
  CategoriesDetail31,
  CategoriesDetail32,
  CategoriesDetail33,
  CategoriesDetail34,
  CategoriesDetail35,
  CategoriesDetail36,
  CategoriesDetail37,
  CategoriesDetail38,
  CategoriesDetail39,
  CategoriesDetail40,
  CategoriesDetail41,
  CategoriesDetail42,
  CategoriesDetail43,
  CategoriesDetail44
} from "./Components/details/categories_fivedetails";

import {
  CategoriesDetail45,
  CategoriesDetail46,
  CategoriesDetail47,
  CategoriesDetail48,
  CategoriesDetail49,
  CategoriesDetail50,
  CategoriesDetail51,
  CategoriesDetail52,
  CategoriesDetail53,
  CategoriesDetail54,
  CategoriesDetail55
} from "./Components/details/categories_sixdetails";
import {
  CategoriesDetail56,
  CategoriesDetail57,
  CategoriesDetail58,
  CategoriesDetail59,
  CategoriesDetail60,
  CategoriesDetail61,
  CategoriesDetail62,
  CategoriesDetail63,
  CategoriesDetail64,
  CategoriesDetail65,
  CategoriesDetail66,
  CategoriesDetail67,
  CategoriesDetail68,
  CategoriesDetail69,
  CategoriesDetail70,
  CategoriesDetail71,
  CategoriesDetail72,
  CategoriesDetail73
} from "./Components/details/categories_sevendetails";
import {CategoriesDetail74, CategoriesDetail75, CategoriesDetail76, CategoriesDetail77, CategoriesDetail78} from "./Components/details/categories_eightdetails";
import {
  CategoriesDetail79,
  CategoriesDetail80,
  CategoriesDetail81,
  CategoriesDetail82,
  CategoriesDetail83,
  CategoriesDetail84,
  CategoriesDetail85
} from "./Components/details/categories_ninedetails";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/about" element={< About />}/>
        <Route path="/contact" element={< Contact />}/>
        <Route path="/Products" element={< Categories />}/>

        <Route path="/CategoriesFirstlist" element={< CategoriesFirstlist />}/>
        <Route path="/Categoriesecondlist" element={< Categoriesecondlist />}/>
        <Route path="/CategoriesThirdlist" element={< CategoriesThirdlist />}/>
        <Route path="/CategoriesFourthlist" element={< CategoriesFourthlist />}/>
        <Route path="/CategoriesFifthtlist" element={< CategoriesFifthtlist />}/>
        <Route path="/CategoriesSixthlist" element={< CategoriesSixthlist />}/>
        <Route path="/CategoriesSeventhlist" element={< CategoriesSeventhlist />}/>
        <Route path="/CategoriesEighthlist" element={< CategoriesEighthlist />}/>
        <Route path="/CategoriesNinthlist" element={< CategoriesNinthlist />}/>
        <Route path="/products/:id" element={< ProductDetails />}/>

        <Route path="/CategoriesDetailsOne" element={< CategoriesDetailsOne />}/>
        <Route path="/CategoriesDetailTwo" element={< CategoriesDetailTwo />}/>
        <Route path="/CategoriesDetailThree" element={< CategoriesDetailThree />}/>

        <Route path="/CategoriesDetails3" element={< CategoriesDetails3 />}/>
        <Route path="/CategoriesDetail4" element={< CategoriesDetail4 />}/>
        <Route path="/CategoriesDetail5" element={< CategoriesDetail5 />}/>

        <Route path="/CategoriesDetails6" element={< CategoriesDetails6 />}/>
        <Route path="/CategoriesDetails7" element={< CategoriesDetails7 />}/>
        <Route path="/CategoriesDetails8" element={< CategoriesDetails8 />}/>

        <Route path="/CategoriesDetail9" element={< CategoriesDetail9 />}/>
        <Route path="/CategoriesDetail10" element={< CategoriesDetail10 />}/>
        <Route path="/CategoriesDetail11" element={< CategoriesDetail11 />}/>
        <Route path="/CategoriesDetail12" element={< CategoriesDetail12 />}/>
        <Route path="/CategoriesDetail13" element={< CategoriesDetail13 />}/>
        <Route path="/CategoriesDetail14" element={< CategoriesDetail14 />}/>
        <Route path="/CategoriesDetail15" element={< CategoriesDetail15 />}/>
        <Route path="/CategoriesDetail16" element={< CategoriesDetail16 />}/>
        <Route path="/CategoriesDetail17" element={< CategoriesDetail17 />}/>

        <Route path="/CategoriesDetail18" element={< CategoriesDetail18 />}/>
        <Route path="/CategoriesDetail19" element={< CategoriesDetail19 />}/>
        <Route path="/CategoriesDetail20" element={< CategoriesDetail20 />}/>
        <Route path="/CategoriesDetail21" element={< CategoriesDetail21 />}/>
        <Route path="/CategoriesDetail22" element={< CategoriesDetail22 />}/>
        <Route path="/CategoriesDetail23" element={< CategoriesDetail23 />}/>
        <Route path="/CategoriesDetail24" element={< CategoriesDetail24 />}/>
        <Route path="/CategoriesDetail25" element={< CategoriesDetail25 />}/>
        <Route path="/CategoriesDetail26" element={< CategoriesDetail26 />}/>
        <Route path="/CategoriesDetail27" element={< CategoriesDetail27 />}/>
        <Route path="/CategoriesDetail28" element={< CategoriesDetail28 />}/>
        <Route path="/CategoriesDetail29" element={< CategoriesDetail29 />}/>
        <Route path="/CategoriesDetail30" element={< CategoriesDetail30 />}/>
        <Route path="/CategoriesDetail31" element={< CategoriesDetail31 />}/>
        <Route path="/CategoriesDetail32" element={< CategoriesDetail32 />}/>
        <Route path="/CategoriesDetail33" element={< CategoriesDetail33 />}/>
        <Route path="/CategoriesDetail34" element={< CategoriesDetail34 />}/>
        <Route path="/CategoriesDetail35" element={< CategoriesDetail35 />}/>
        <Route path="/CategoriesDetail36" element={< CategoriesDetail36 />}/>
        <Route path="/CategoriesDetail37" element={< CategoriesDetail37 />}/>
        <Route path="/CategoriesDetail38" element={< CategoriesDetail38 />}/>
        <Route path="/CategoriesDetail39" element={< CategoriesDetail39 />}/>
        <Route path="/CategoriesDetail40" element={< CategoriesDetail40 />}/>
        <Route path="/CategoriesDetail41" element={< CategoriesDetail41 />}/>
        <Route path="/CategoriesDetail42" element={< CategoriesDetail42 />}/>
        <Route path="/CategoriesDetail43" element={< CategoriesDetail43 />}/>
        <Route path="/CategoriesDetail44" element={< CategoriesDetail44 />}/>

        <Route path="/CategoriesDetail45" element={< CategoriesDetail45 />}/>
        <Route path="/CategoriesDetail46" element={< CategoriesDetail46 />}/>
        <Route path="/CategoriesDetail47" element={< CategoriesDetail47 />}/>
        <Route path="/CategoriesDetail48" element={< CategoriesDetail48 />}/>
        <Route path="/CategoriesDetail49" element={< CategoriesDetail49 />}/>
        <Route path="/CategoriesDetail50" element={< CategoriesDetail50 />}/>
        <Route path="/CategoriesDetail51" element={< CategoriesDetail51 />}/>
        <Route path="/CategoriesDetail52" element={< CategoriesDetail52 />}/>
        <Route path="/CategoriesDetail53" element={< CategoriesDetail53 />}/>
        <Route path="/CategoriesDetail54" element={< CategoriesDetail54 />}/>
        <Route path="/CategoriesDetail55" element={< CategoriesDetail55 />}/>

        <Route path="/CategoriesDetail56" element={< CategoriesDetail56 />}/>
        <Route path="/CategoriesDetail57" element={< CategoriesDetail57 />}/>
        <Route path="/CategoriesDetail58" element={< CategoriesDetail58 />}/>
        <Route path="/CategoriesDetail59" element={< CategoriesDetail59 />}/>
        <Route path="/CategoriesDetail60" element={< CategoriesDetail60 />}/>
        <Route path="/CategoriesDetail61" element={< CategoriesDetail61 />}/>
        <Route path="/CategoriesDetail62" element={< CategoriesDetail62 />}/>
        <Route path="/CategoriesDetail63" element={< CategoriesDetail63 />}/>
        <Route path="/CategoriesDetail64" element={< CategoriesDetail64 />}/>
        <Route path="/CategoriesDetail65" element={< CategoriesDetail65 />}/>
        <Route path="/CategoriesDetail66" element={< CategoriesDetail66 />}/>
        <Route path="/CategoriesDetail67" element={< CategoriesDetail67 />}/>
        <Route path="/CategoriesDetail68" element={< CategoriesDetail68 />}/>
        <Route path="/CategoriesDetail69" element={< CategoriesDetail69 />}/>
        <Route path="/CategoriesDetail70" element={< CategoriesDetail70 />}/>
        <Route path="/CategoriesDetail71" element={< CategoriesDetail71 />}/>
        <Route path="/CategoriesDetail72" element={< CategoriesDetail72 />}/>
        <Route path="/CategoriesDetail73" element={< CategoriesDetail73 />}/>

        <Route path="/CategoriesDetail74" element={< CategoriesDetail74 />}/>
        <Route path="/CategoriesDetail75" element={< CategoriesDetail75 />}/>
        <Route path="/CategoriesDetail76" element={< CategoriesDetail76 />}/>
        <Route path="/CategoriesDetail77" element={< CategoriesDetail77 />}/>
        <Route path="/CategoriesDetail78" element={< CategoriesDetail78 />}/>

        <Route path="/CategoriesDetail79" element={< CategoriesDetail79 />}/>
        <Route path="/CategoriesDetail80" element={< CategoriesDetail80 />}/>
        <Route path="/CategoriesDetail81" element={< CategoriesDetail81 />}/>
        <Route path="/CategoriesDetail82" element={< CategoriesDetail82 />}/>
        <Route path="/CategoriesDetail83" element={< CategoriesDetail83 />}/>
        <Route path="/CategoriesDetail84" element={< CategoriesDetail84 />}/>
        <Route path="/CategoriesDetail85" element={< CategoriesDetail85 />}/>

      </Routes>

    </div>

  );
}
