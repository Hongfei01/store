import { Outlet } from 'react-router-dom';

import { Header, Navbar } from '@/components';
function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <div className='algin-element bg-slate-500 py-20'>
        <Outlet />
      </div>
    </>
  );
}
export default HomeLayout;
