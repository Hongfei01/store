import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Button } from './ui/button';
function Header() {
  const [user, setUser] = useState<{ username: string } | null>({
    username: 'demo user',
  });
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
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
