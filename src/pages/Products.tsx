import { Filters, PaginationContainer, ProductsContainer } from '@/components';
import {
  customFetch,
  type ProductsResponse,
  type ProductsResponseWithParams,
} from '@/utils';
import { LoaderFunction } from 'react-router-dom';

function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}

// loader function
const url = '/products';

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch.get<ProductsResponse>(url, { params });
  return { ...response.data, params };
};

export default Products;
