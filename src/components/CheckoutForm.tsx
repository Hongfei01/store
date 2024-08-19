import { ActionFunction, Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import { ReduxStore } from '@/store';
import { toast } from './ui/use-toast';

import { customFetch, formatAsDollars, type Checkout } from '@/utils';
import { clearCart } from '@/features/cart/cartSlice';

function CheckoutForm() {
  return (
    <Form method='POST' className='flex flex-col gap-y-4 '>
      <h4 className='font-medium text-xl mb-4'>Shipping Information</h4>
      <FormInput type='text' name='name' label='first name' />
      <FormInput type='text' name='address' label='address' />
      <SubmitButton text='Place your order' className='mt-4' />
    </Form>
  );
}

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const address = formData.get('address') as string;
    if (!name || !address) {
      toast({ description: 'please fill out all fields' });
      return null;
    }
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: 'Please login to place an order' });
      return redirect('/login');
    }
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info: Checkout = {
      name,
      address,
      chargeTotal: orderTotal,
      cartItems,
      orderTotal: formatAsDollars(orderTotal),
      numItemsInCart,
    };
    try {
      const result = await customFetch.post(
        '/orders',
        { data: info },
        { headers: { Authorization: `Bearer ${user.jwt}` } }
      );
      console.log(result);
      store.dispatch(clearCart());
      toast({ description: 'order placed' });
      return redirect('/orders');
    } catch (error) {
      return null;
    }
  };
export default CheckoutForm;
