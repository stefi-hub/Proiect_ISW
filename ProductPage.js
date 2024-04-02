import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import standsImg from './img/stands.jpg';
import headphonesImg from './img/headphones.jpg';
import pedalboardImg from './img/pedalboard.jpg';
import stringsImg from './img/strings.jpg';
import bagImg from './img/bag.jpg';
import chargerImg from './img/charger.jpg';
import electric from './img/electric.jpg';
import acoustic from './img/acoustic.jpg';
import clasic from './img/clasic.jpg';
import bass from './img/bass.jpg';
import ukulele from './img/ukulele.jpg';
import banjo from './img/banjo.jpg';
import arranger from './img/arranger.jpg';
import midi from './img/midi.jpg';
import upright from './img/upright.jpg';
import grand from './img/grand.jpg';
import organ from './img/organ.jpg';
import acordeon from './img/acordeon.jpg';


const productImages = {
  stands: standsImg,
  headphones: headphonesImg,
  pedalboard: pedalboardImg,
  strings: stringsImg,
  bag: bagImg,
  charger: chargerImg,
  electric: electric,
  acoustic: acoustic,
  clasic: clasic,
  bass: bass,
  ukulele: ukulele,
  banjo: banjo,
  arranger: arranger,
  midi: midi,
  upright: upright,
  grand: grand,
  organ: organ,
  acordeon: acordeon,
};
const ProductPage = ({ match }) => {

  const { productName } = useParams();
  const productImage = productImages[productName];

  const productDetails = {
    name: productName.charAt(0).toUpperCase() + productName.slice(1),
    price: '99.99',
    description: '\n' +
        'This is a high quality product perfect for your musical needs.'
  };
  return (
      <div className="product-container">
          <img src={productImage} alt={productName} className="product-image"/>
          <h1 className="product-name">{productName}</h1>
          <p className="product-price">Preț: ${productDetails.price}</p>
          <p className="product-description">{productDetails.description}</p>
      </div>
  );
};

export default ProductPage;
