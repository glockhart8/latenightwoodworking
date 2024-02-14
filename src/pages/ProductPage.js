
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
	const { name }= useParams();


  return (
    <div >
			<div><img src={`../../assets/thumbnails/${name}.jpg`}/></div>
			<div></div>
    </div>
  );
};

export default ProductPage;
