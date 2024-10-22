import React from 'react';
import { Link } from 'react-router-dom';
import {
    LayoutContainer,
    Header,
    Nav,
    Main,
    Footer
} from './Layout.styles';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <LayoutContainer>
            <Header>
                <Nav>
                    <ul>
                        <li><Link to="/buttons">Button Groups</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </Nav>
            </Header>
            <Main>
                {children}
            </Main>
            <Footer>
                <p>© 2024 My App</p>
            </Footer>
        </LayoutContainer>
    );
};

export default Layout;
