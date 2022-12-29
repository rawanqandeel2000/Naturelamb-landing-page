import * as React from 'react';
import { Row, Col } from 'antd';
import './products.homepage.style.css';
import {useNavigate} from "react-router-dom";
export default function ProductsHome() {
    const navigate = useNavigate();
    return (
        <>
            <Row className="products-section">
                <img src='/images/home/products-icons/left.png' alt='' className='semi-circle-products-left' />
              
                <Col span={13}>
                <img src='/images/home/Client Image.png' alt='' className='img-group' />
                </Col>
                <Col span={11}>
                    <button className='products-home-page-word' onClick={() => navigate('/Products')}>Products</button>
                    <h1 className='subheading-products-home'>Canes & Walking Sticks</h1>
                    <p className='products-text'>
                        Visit our walking sticks page to know our product with more
                        history, we have a wide variety of colours, cuffs and materials.
                    </p>
                    <div className='products-image-person-home'>
                        <img src="/images/home/products-icons/person.png" alt='' />
                        <span>Canes & Walking Sticks</span>
                    </div>
                    <div>
                        <img src='/images/home/products-icons/arrow.png' alt='' />
                    </div>
                    <hr className='hr-line-products' />
                </Col>
                <img src='/images/home/about-us-icons/right.png' alt='' className='semi-circle-products' />
            </Row>
        </>
    );
}