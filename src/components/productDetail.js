import React from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../fetcher';
import styled from 'styled-components';

const ProductDescription =  styled.div`
    grid-column: 1 / span 3;
    `;
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
const ProductDetail = () => {

    const [product, setProduct] = React.useState({ errorMessage: '', data: {}})
    const {productId} = useParams();

    React.useEffect(() =>{
        const fetchData = async () => {
          const responseObject = await getProductById(productId);
          setProduct(responseObject);
        }
        fetchData();
    
    
      },[productId]
      )
const createMarkup = () => {
  return { __html: product.data?.detail}
}

  return (
    <div>

    <article>
        <ProductTitle>
            {product.data.title}
        </ProductTitle>
        <figure ProductImageContainer>
            <ProductImageContainer >
                <ProductImageContainerImage src={product.data.detailImg} alt={product.data.title}/>
            </ProductImageContainer>
        </figure>
        <CategoryProductFinance > 
            <CategoryProductFinancePrice>
                {product.data.price}
            </CategoryProductFinancePrice>
            <CategoryProductInfoStock >
                <label>Stock:{product.data.stock}</label>
            </CategoryProductInfoStock>
            <CategoryProductAction >
                {/* <button onClick={() => navigate(`products/${id}`)}>View Products</button> */}
                <button>Add to Basket</button>
            </CategoryProductAction>
        </CategoryProductFinance>
        <ProductDescription dangerouslySetInnerHTML = {createMarkup()}>      
          </ProductDescription>
    </article>


    </div>
  )
}

export default ProductDetail