import {
  ComplexPaginationContainer,
  OrderList,
  SectionTitle,
} from '@/components';
import { toast } from '@/components/ui/use-toast';
import { ReduxStore } from '@/store';
import { customFetch, OrdersResponse } from '@/utils';
import { LoaderFunction, redirect, useLoaderData } from 'react-router-dom';

function Orders() {
  const { meta } = useLoaderData() as OrdersResponse;
  const orders = meta.pagination.total;
  if (orders === 0) return <SectionTitle text='Please make an order' />;
  return (
    <>
      <SectionTitle text='Your orders' />
      <OrderList />
      <ComplexPaginationContainer />
    </>
  );
}

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }): Promise<OrdersResponse | Response | null> => {
    const user = store.getState().userState.user;
    if (!user) {
      toast({ description: 'Please login to continue' });
      return redirect('/login');
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch.get<OrdersResponse>('/orders', {
        params,
        headers: { Authorization: `Bearer ${user.jwt}` },
      });
      return { ...response.data };
    } catch (error) {
      toast({ description: 'Failed to fetch orders' });
      return null;
    }
  };
export default Orders;
