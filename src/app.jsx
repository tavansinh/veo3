import Home from './pages/home';

import { Route, Routes } from 'react-router';
import './assets/css/index.css';
import NotFound from './pages/notfound';
import Layout from './layouts/layout';
const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default App;
