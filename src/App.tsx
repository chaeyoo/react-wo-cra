import { ThemeProvider } from "@context/ThemeContext";
import Layout from "@layouts/MainLayout";
import { ThemeToggle } from "@layouts/MainLayout/ThemeToggle";
import Buttons from "@pages/ButtonsPage";
import CalcPage from "@pages/CalcPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Global } from "@emotion/react";

const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Global styles={globalStyles} />
        <Layout>
          <ThemeToggle />
          <Routes>
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/calculator" element={<CalcPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
