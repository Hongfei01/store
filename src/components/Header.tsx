import { Link, useNavigate } from 'react-router-dom';

import { Button } from './ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { logoutUser } from '@/features/user/userSlice';
import { clearCart } from '@/features/cart/cartSlice';
import { toast } from './ui/use-toast';
function Header() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userState.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    toast({ description: 'Logged Out' });
    navigate('/');
  };
  return (
    <header>
      <div className='algin-element flex justify-center sm:justify-end py-2 '>
        {user ? (
          <div className='flex items-center gap-x-2 sm:gap-x-8'>
            <p className='text-xs sm:text-sm'>hello,{user.username}</p>
            <Button variant={'link'} onClick={handleLogout} size={'sm'}>
              Logout
            </Button>
          </div>
        ) : (
          <div className='flex items-center justify-center gap-x-6 -mr-4'>
            <Button asChild variant={'link'} size={'sm'}>
              <Link to={'/login'}>Sign in/Guest</Link>
            </Button>
            <Button asChild variant='link' size='sm'>
              <Link to='/register'>Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;
