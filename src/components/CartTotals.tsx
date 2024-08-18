import { useAppSelector } from '@/hooks';
import { formatAsDollars } from '@/utils';
import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from './ui/separator';

function CartTotals() {
  const { tax, shipping, cartTotal, orderTotal } = useAppSelector(
    (state) => state.cartState
  );
  return (
    <Card className='p-8 bg-muted'>
      <CardTotalRow label='Subtotal' amount={cartTotal} />
      <CardTotalRow label='Tax' amount={tax} />
      <CardTotalRow label='Shipping' amount={shipping} />
      <CardTitle className='mt-8'>
        <CardTotalRow label='Order total' amount={orderTotal} lastRow />
      </CardTitle>
    </Card>
  );
}

function CardTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className='flex justify-between text-sm'>
        <span>{label}</span>
        <span>{formatAsDollars(amount)}</span>
      </p>
      {lastRow ? null : <Separator className='my-2' />}
    </>
  );
}
export default CartTotals;
