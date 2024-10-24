import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #f8f9fa;
  padding: 1rem;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  li {
    margin-right: 1rem;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Main = styled.main`
  flex: 1;
  padding: 2rem;
`;

export const Footer = styled.footer`
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
`;