import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
import { useState, useEffect } from 'react';
import ProductList from "~/components/ProductList";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  const addCard = (productId) => {
    const product = products.find((pro) => pro.id == productId);
    if (product) {
      const productInCartIndex = carts.findIndex((pro) => pro.id == productId);
      if (productInCartIndex == -1) {
        setCarts([...carts, { ...product, amount: 1 }]);
      } else {
        const cartClone = [...carts];
        cartClone[productInCartIndex].amount += 1;
        setCarts(cartClone);
      }
    }
  };
  return (
    <Router>
      <Routes>
        {' '}
        {publicRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  {' '}
                  <Page />{' '}
                </Layout>
              }
            />
          );
        })}{' '}
      </Routes>{' '}
      <div className='container'>

        <ProductList
          products={products}
          addCard={addCard}
          // addNumber={addNumber}
          // removeNumber={removeNumber}
          count={count}
        />{" "}
      </div>{' '}
    </Router>
  );
}

export default App;
