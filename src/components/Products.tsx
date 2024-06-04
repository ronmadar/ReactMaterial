import React, { useEffect, useState, useRef } from 'react';
import CustomCard from './Card';
import Typography from '@mui/material/Typography';

interface Product {
  title: string;
  description: string;
  imageUrl: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [itemsToShow, setItemsToShow] = useState(4);

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    // Fetch the JSON data
    fetch('/assets/Mock/products.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setVisibleProducts(data.slice(0, itemsToShow));
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, [itemsToShow]);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visibleProducts.length < products.length) {
            // Load more items when the last visible product is intersecting
            setItemsToShow((prev) => prev + 6);
          }
        });
      },
      { threshold: 1 } // Trigger when the last visible product is fully in view
    );

    if (observer.current) {
      observer.current.observe(document.querySelector('.load-more-sentinel')!);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [visibleProducts, products]);

  return (
    <div className='wrap-products'>
      <Typography variant="h2" component="h2">
        Our Products
      </Typography>
      <div className='wrap-product'>
        {visibleProducts.map((product, index) => (
          <CustomCard
            key={index}
            image={product.imageUrl}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
      <div className="load-more-sentinel" style={{ height: '1px', visibility: 'hidden' }} />
    </div>
  );
};

export default Products;
