import './App.css';
import React from 'react';
import { getCategories } from './fetcher';
import ProductDetail from './components/productDetail';
import Basket from './components/basket';
import CheckOut from './components/checkout';
import Category from './components/Category';
import { 
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Layout from './components/Layout';

function App() {
  const [categories, setCategories] = React.useState({ errorMessage: '', data: []})

  React.useEffect(() =>{
    const fetchData = async () => {
      const responseObject = await getCategories();
      setCategories(responseObject);
    }
    fetchData();


  },[]
  )

  // const handleCategoryClick = id => {
  //   const fetchData = async () => {
  //     const responseObject = await getProducts(id);
  //     setProducts(responseObject);
  //   }
  //   fetchData();

  // }
  


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout categories={categories} />}>
      <Route path='/basket' element={<Basket />} />
      <Route path='/checkout' element={<CheckOut />} />
      <Route path='/products/:productId' element={<ProductDetail />} />
      <Route path='/categories/:categoryId' element={<Category />} />
      </Route>
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
