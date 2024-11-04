import { Container, Headerblock, StyledNavLink } from "./Header.styled";

export const Header = () => {

  return (
    <Headerblock>
      <Container>
        <StyledNavLink to="/">
          ToDo
        </StyledNavLink>
        <StyledNavLink to="/list">
          List
        </StyledNavLink>
      </Container>
    </Headerblock>
  );
};
