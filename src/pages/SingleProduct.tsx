import { Link, LoaderFunction, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import {
  customFetch,
  formatAsDollars,
  type SingleProductResponse,
} from '@/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SelectProductAmount, SelectProductColor } from '@/components';
import { Mode } from '@/components/SelectProductAmount';

import { CartItem } from '@/utils';
import { useAppDispatch } from '@/hooks';

import { addItem } from '@/features/cart/cartSlice';

function SingleProduct() {
  const { data: product } = useLoaderData() as SingleProductResponse;
  const { image, price, title, description, colors, company } =
    product.attributes;
  const productID = product.id;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const formDolor = formatAsDollars(price);

  const dispatch = useAppDispatch();

  const addToCart = () => {
    const newItem: CartItem = {
      cartID: productID + productColor,
      productID,
      image,
      title,
      price,
      amount,
      productColor,
      company,
    };
    dispatch(addItem(newItem));
  };
  return (
    <section>
      {/* Links */}
      <div className='flex gap-x-2 items-center h-6'>
        <Button asChild variant={'link'} size={'sm'}>
          <Link to={'/'} className=' capitalize'>
            home
          </Link>
        </Button>
        <Separator orientation={'vertical'} />
        <Button asChild variant={'link'} size={'sm'}>
          <Link className='capitalize' to={'/products'}>
            products
          </Link>
        </Button>
      </div>
      {/* Product */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* image */}
        <img
          src={image}
          alt={title}
          className='h-96 w-96 rounded-lg object-cover lg:w-full'
        />
        {/* info */}
        <div>
          <h1 className='text-3xl font-bold capitalize'>{title}</h1>
          <h4 className='mt-2 text-xl'>{company}</h4>
          <p className='p-2 rounded-md bg-muted mt-3 inline-block text-md'>
            {formDolor}
          </p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* colors */}
          <SelectProductColor
            colors={colors}
            productColor={productColor}
            setProductColor={setProductColor}
          />
          {/* amount */}
          <SelectProductAmount
            mode={Mode.SingleProduct}
            amount={amount}
            setAmount={setAmount}
          />
          {/* add to cart */}
          <Button className='mt-10' size={'lg'} onClick={addToCart}>
            Add to bag
          </Button>
        </div>
      </div>
    </section>
  );
}
export default SingleProduct;

export const loader: LoaderFunction = async ({
  params,
}): Promise<SingleProductResponse> => {
  const { id } = params;
  const response = await customFetch<SingleProductResponse>(`/products/${id}`);
  return { ...response.data };
};
