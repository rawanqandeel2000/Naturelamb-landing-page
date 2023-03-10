import * as React from 'react';
import { Nav, Navbar, NavDropdown} from "react-bootstrap";
import { nodeName } from 'rsuite/esm/DOMHelper';
import CategoriesFifthtlist from '../ListCategories/categories-fifthlist';
import './navbar.style.css';




let logo = 'icons/logo.png';

function navOptions(selectedOption,color){
    return(
        <>
            <Nav.Link style={{color:color}} href="/"  className={"nlink " + (selectedOption === 0 ? "selected-button-navbar wh" : "") }>Home</Nav.Link>
            <Nav.Link style={{color:color, "margin-top": -8}} href="/products" className={"nlink " + (selectedOption === 1 ? "selected-button-navbar wh" : "") }>
                        <NavDropdown title="Product"  style={{color: color}}>
                     <div class="dropdown dropend">
                          <button type="button" class="btn btn-primary dropdown-toggle  btn-drop" data-bs-toggle="dropdown">
                          Articoli Monouso
                          </button>
                          <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="/CategoriesFirstlist">Incontinenza</a></li>
                          <li><a class="dropdown-item" href="/Categoriesecondlist">Mascherine</a></li>
                          <li><a class="dropdown-item" href="/CategoriesThirdlist">Guanti</a></li>
                          <li><a class="dropdown-item" href="/CategoriesFourthlist">Altri prodotti Monouso</a></li>
                          </ul>
                      </div>
                     
                        <div class="dropdown dropend">
                            <button type="button" class="btn btn-primary dropdown-toggle   btn-drop" data-bs-toggle="dropdown">
                            Mobilita E Aiuti Tecniche
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/CategoriesFifthtlist">Ausili per bagno</a></li>
                            <li><a class="dropdown-item " href="/CategoriesSixthlist">Deambulatore</a></li>
                            </ul>
                        </div>

                        <div class="dropdown dropend">
                          <button type="button" class="btn btn-primary dropdown-toggle   btn-drop" data-bs-toggle="dropdown">
                          Cura Della Salute
                          </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/CategoriesSeventhlist">Riabilitazione</a></li>
                            <li><a class="dropdown-item " href="/CategoriesEighthlist">Igiene Personale</a></li>
                            </ul>
                        </div>

                        <div class="dropdown dropend">
                            <button type="button" class="btn btn-primary dropdown-toggle   btn-drop" data-bs-toggle="dropdown">
                            Tessile 
                            </button>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="/CategoriesNinthlist">Tessile per la terza et??</a></li>
                            </ul>
                        </div>
                            </NavDropdown>
                            </Nav.Link>
            <Nav.Link style={{color:color}} href="/about" className={"nlink " + (selectedOption === 2 ? "selected-button-navbar bg-white abo" : "") } >About us</Nav.Link>
            <Nav.Link style={{color:color}} href="/contact" className={"nlink " + (selectedOption === 3 ? "selected-button-navbar wh" : "") }  >Contact us</Nav.Link>
            
        </>
    ) 
}

export default function Navb(props){
    return(
            <Navbar  className="Nb">
                    <Navbar.Brand href="/" >
                        <img
                            src={logo}
                            width="358.38"
                            height="150.04"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="nava">
                        {navOptions(props.selectedOption,props.color)}
                        <Nav.Link  style={{color:props.color,paddingLeft:80,paddingRight:20}} href="#link">(929)953-8315</Nav.Link>
                        <NavDropdown title="EN" id="basic-nav-dropdown" style={{color:'white'}}>
                            <NavDropdown.Item href="#action/3.1">RU</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">FR</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">AR</NavDropdown.Item>
                        </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
    );



}