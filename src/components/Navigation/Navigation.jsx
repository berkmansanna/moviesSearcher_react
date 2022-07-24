import { LinkList, StyledLink } from 'components/Navigation/Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <LinkList>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </LinkList>
    </nav>
  );
};

export default Navigation;
