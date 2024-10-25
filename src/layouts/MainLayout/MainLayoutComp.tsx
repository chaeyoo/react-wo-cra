import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  LayoutContainer,
  Nav,
  Main,
  Footer,
} from "@layouts/MainLayout/MainLayout.styles";
import { useTheme } from "@context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <LayoutContainer theme={theme}>
      <Header>
        <Nav>
          <ul>
            <li>
              <Link to="/buttons">Button Groups</Link>
            </li>
            <li>
              <Link to="/calculator">계산기 - 리렌더링</Link>
            </li>
          </ul>
        </Nav>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>© 2024 My App</p>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
