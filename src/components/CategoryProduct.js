import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../contexts/catContext';

const  CategoryProduct= ({id,title, detailImg, price, stock}) =>{
    const navigate = useNavigate();
    const { addProduct } = useContext(CartContext)
  return (
    <article>
        <ProductTitle>
            <Link to ={`/products/${id}`}> {title}</Link>
        </ProductTitle>
        <figure ProductImageContainer>
            <ProductImageContainer >
                <ProductImageContainerImage src={detailImg} alt={title}/>
            </ProductImageContainer>
        </figure>
        <CategoryProductFinance > 
            <CategoryProductFinancePrice>
                {price}
            </CategoryProductFinancePrice>
            <CategoryProductInfoStock >
                <label>Stock:{stock}</label>
            </CategoryProductInfoStock>
            <CategoryProductAction >
                <button onClick={() => navigate(`/products/${id}`)}>View Products</button>
                <button onClick={() => addProduct({id,title, price})}> Add to Basket</button>
            </CategoryProductAction>
        </CategoryProductFinance>
    </article>
  )
}




const ProductTitle =  styled.div`
    grid-column: 1 / span 3;
    color: darkslategray;
    font-weight: bold;
    font-size: 1.5em;
    padding-left: 10px;
`;

const ProductImageContainer = styled.div`

padding:10px;
width:60%;
`;

const ProductImageContainerImage = styled.img`
width: 100%;
height:100%;
`;

const CategoryProductFinance = styled.figure`
color: darkslategray;
font-size: 2em;
font-weight: bold;
padding-top: 10px;
`;

const CategoryProductFinancePrice = styled.div`
color: darkslategray;
font-size: 2em;
font-weight: bold;
padding-top: 10px;
`;
const CategoryProductInfoStock = styled.div`
color: darkslategray;
font-size: 2em;
font-weight: bold;
padding-top: 10px;
`;

const CategoryProductAction = styled.div`
color: darkslategray;
font-size: 2em;
font-weight: bold;
padding-top: 10px;
`;

export default CategoryProduct;
