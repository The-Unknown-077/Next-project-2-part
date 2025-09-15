import ProductView from '@/components/product-view/ProductView';
import { memo } from 'react';

const Home = async() => {
  const response = await fetch("https://api.errorchi.uz/product")
  const data = await response.json()
  
  return (
    <div className="container mx-auto">
      {/* <Hero/> */}
      <ProductView data={data?.data?.allProducts}/>
      {/* <Testimonials/>
      <Service/> */}
    </div>
  );
};

export default memo(Home);