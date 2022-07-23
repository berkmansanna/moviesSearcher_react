import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Conteiner, Header, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Conteiner>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Conteiner>
  );
};
