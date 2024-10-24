
import Layout from '@layouts/MainLayout';
import Buttons from '@pages/ButtonsPage';
import Calculator from '@pages/CalculatorPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/calculator" element={<Calculator />} />
                </Routes>
            </Layout>
        </Router>
    )
};

export default App;
