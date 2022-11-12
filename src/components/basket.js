import React , { useContext}from 'react'
import styled from 'styled-components'
import { CartContext } from "../contexts/catContext"

const Basket = () => {
  const { getItems } = useContext(CartContext)


  const renderCart = () => {
    const cartItmes =  getItems();
    if (cartItmes.length > 0) {
      return cartItmes.map((p) => (

        <div>{p.title}</div>
      ));
    }
    else {
      return <div>The basket is currently empty</div>
    }

  }
  return (
    <BasketContainer>
      <BasketTitle>Shopping Basket</BasketTitle>
      <BasketButton>Checkout</BasketButton>
      <BasketTable>
        <BasketHeader>
          <h4>Items</h4>
          <h4>Quantity</h4>
          <h4>Price</h4>
        </BasketHeader>
        <BasketHeaderLine />
        <BasketHeader>
          {renderCart()}
        </BasketHeader>
        <BasketHeaderLine />
        <BasketButton>Clear</BasketButton>
        <BasketTotal>Total: $ 0</BasketTotal>
      </BasketTable>
    </BasketContainer>
    )
}

export default Basket

const BasketContainer = styled.div`
display: grid;
grid-template-rows: 0.25fr 1fr 0.25fr;
grid-template-columns: 1fr 1fr 0.1fr;
padding: 20px

`;


const BasketTable = styled.div`
display: grid;
grid-template-rows: 1fr 1fr 1fr 1fr;
column-gap: 20px;
padding-left: 10px

`;

const BasketHeader = styled.div`
display: grid;
grid-template-columns: 1fr 0.5fr 0.5fr;

`;

const BasketHeaderLine = styled.hr`
margin-bottom: 20px;
border: 1px solid gray;

`;

const BasketTitle = styled.h2`
grid-column: 1 / span 2;
padding-bottom: 20px;

`;
const BasketQty = styled.h3`
font-size: 18px;
font-weight: bold;
display:grid;
grid-template-columns: 0.1fr 0.05fr 0.1fr 0.1fr;

`;

const BasketPrice = styled.h3`
  font-size: 20px;
  font-weight: bold;
`;

const BasketTotal = styled.h2`
  justify-self: end;
`;




const BasketButton = styled.button`
  border-radius: 8px;
  height: 40px;
`;