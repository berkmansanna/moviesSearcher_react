import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Conteiner, Header } from './Layout.styled';

const Layout = () => {
  return (
    <Conteiner>
      <Header>
        <AppBar/>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Conteiner>
  );
};

export default Layout
