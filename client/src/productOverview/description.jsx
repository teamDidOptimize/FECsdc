import React from 'react';

const Description = (props) => {
  return (
    <div className="description-container">
      <div className="product-slogan">Product Slogan. {props.product.slogan}</div>
      <div className="product-des">{props.product.description}</div>
    </div>
  );
};

export default Description;