import { Filters, PaginationContainer, ProductsContainer } from '@/components';
import { customFetch, ProductsResponse } from '@/utils';
import { LoaderFunction, useLoaderData } from 'react-router-dom';

const url = '/products';
function Products() {
  const result = useLoaderData() as ProductsResponse;
  console.log(result);
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch.get(url);
  return { ...response.data };
};

export default Products;
