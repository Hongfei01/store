import { useLoaderData, type LoaderFunction } from 'react-router-dom';

import { FeaturedProducts, Hero } from '@/components';
import { customFetch, type ProductsResponse } from '@/utils';

const url = '/products?featured=true';

function Landing() {
  const result = useLoaderData() as ProductsResponse;
  console.log(result);
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch.get(url);
  return { ...response.data };
};

export default Landing;
