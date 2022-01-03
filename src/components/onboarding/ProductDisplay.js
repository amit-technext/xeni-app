import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDisplay = () => {
  const [product, setProduct] = useState(null);
  // const [price, setPrice] = useState(null);
  // console.log(product.data);
  const productOptions = {
    method: 'GET',
    url: 'https://api.stripe.com/v1/products',
    headers: { Authorization: 'Bearer sk_test_DuSG6ZnqiAFAngTiep2WnmsH' }
  };
  const priceOptions = {
    method: 'GET',
    url: 'https://api.stripe.com/v1/prices',
    headers: { Authorization: 'Bearer sk_test_DuSG6ZnqiAFAngTiep2WnmsH' }
  };

  useEffect(() => {
    axios
      .request(productOptions)
      .then(({ data }) => {
        setProduct(data);
        console.log(data.data);
      })
      .catch(error => {
        console.error(error);
      });
    axios
      .request(priceOptions)
      .then(function ({ data }) {
        // setPrice(data);
        console.log('price', data.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleRequest = () => {
    const options = {
      method: 'POST',
      url: 'http://localhost:4242/createcs',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      data: {
        customer_email: 'provideyouremail@em.com',
        line_items: [{ price: 'price_1JrhsSEp7iMlLK9IJuMVilnW', quantity: 1 }],
        payment_method_types: ['card'],
        mode: 'payment',
        success_url: 'http://localhost:3000/payment-practice',
        cancel_url: 'http://localhost:3000/payment-practice'
      }
    };
    axios
      .request(options)
      .then(function ({ data }) {
        window.location.href = data.toString();
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <section>
      {product &&
        product.data.map(item => (
          <>
            <div key={item.id} className="product">
              <img src={item.images[0]} alt="The cover of stripe product" />
              <div className="description">
                <h3>{item.name}</h3>
                <h5>{item.description}</h5>
              </div>
            </div>
            <button onClick={() => handleRequest(item.id)}>Checkout</button>
          </>
        ))}
    </section>
  );
};
export default ProductDisplay;
