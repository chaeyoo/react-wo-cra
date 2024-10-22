
import Layout from '@components/common/Layout';
import About from '@pages/AboutPage';
import Buttons from '@pages/ButtonsPage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App: React.FC = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Layout>
        </Router>
    )
};

export default App;
