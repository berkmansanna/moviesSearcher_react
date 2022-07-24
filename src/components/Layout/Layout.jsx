import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Conteiner, Header, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Conteiner>
      <Header>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Conteiner>
  );
};
