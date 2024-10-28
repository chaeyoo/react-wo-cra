import React from "react";
import { Link } from "react-router-dom";
import {
  Header,
  LayoutContainer,
  Nav,
  Main,
  Footer,
} from "@layouts/MainLayout/MainLayout.styles";
import { ThemeToggle } from "./ThemeToggle";
import { Flex } from "@components/Flex/Flex.styles";
import { useTheme } from "@hooks/useTheme";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <LayoutContainer theme={theme}>
      <Header>
        <Flex direction="row" justify="between">
          <Nav>
            <ul>
              <li>
                <Link to="/buttons">Button Groups</Link>
              </li>
              <li>
                <Link to="/calculator">계산기 - 리렌더링</Link>
              </li>
              <li>
                <Link to="/dnd">드래그앤드랍</Link>
              </li>
            </ul>
          </Nav>
          <ThemeToggle />
        </Flex>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <p>© 2024 My App</p>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
