import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { formatAsDollars, ProductsResponse } from '@/utils';
function ProductsGrid() {
  const { data: products } = useLoaderData() as ProductsResponse;
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 pt-12'>
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <Link to={`products/${product.id}`} key={product.id}>
            <Card>
              <CardContent className='p-4'>
                <img
                  src={image}
                  alt={title}
                  className=' rounded-md object-cover w-full h-64 md:h-48'
                />
                <div className='mt-4 text-center'>
                  <h2 className='text-xl font-semibold capitalize'>{title}</h2>
                  <p className='text-primary font-light mt-2'>
                    {formatAsDollars(price)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductsGrid;
