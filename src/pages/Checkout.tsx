import { CartTotals, CheckoutForm, SectionTitle } from '@/components';
import { toast } from '@/components/ui/use-toast';

import { useAppSelector } from '@/hooks';
import { ReduxStore } from '@/store';
import { redirect } from 'react-router-dom';

function Checkout() {
  const cartTotal = useAppSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }

  return (
    <>
      <SectionTitle text='Place your order' />
      <div className=' mt-8 grid lg:grid-cols-2 gap-8 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
}

export const loader =
  (store: ReduxStore) => async (): Promise<Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: 'Please login to continue' });
      return redirect('/');
    }
    return null;
  };
export default Checkout;
