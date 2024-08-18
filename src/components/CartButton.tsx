import { useAppSelector } from '@/hooks';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
function CartButton() {
  const numItems = useAppSelector((state) => state.cartState.numItemsInCart);
  return (
    <Button
      asChild
      variant={'outline'}
      size={'icon'}
      className='flex justify-center items-center relative'
    >
      <Link to='cart'>
        <ShoppingCart />
        <span className='absolute -top-3 -right-3 flex justify-center items-center rounded-full h-6 w-6 text-xs bg-primary text-white '>
          {numItems}
        </span>
      </Link>
    </Button>
  );
}
export default CartButton;
