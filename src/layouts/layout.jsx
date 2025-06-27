import { Outlet } from 'react-router';
import Header from '../components/header';
import Footer from '../components/footer';
import TabSwitch from '../components/tab-switch';
import Fastmode from '../components/section/fastmode';
import { useState } from 'react';
import Googlemode from '../components/section/googlemode';
import Normalmode from '../components/section/normalmode';
import History from '../components/section/history';

const Layout = () => {
    const mode = ['fast', 'google', 'normal', 'history'];
    const [currentMode, setCurrentMode] = useState(mode[1]);
    return (
        <div className="bg-[#0a0c10]">
            <Header />
            <main className="container mx-auto min-h-screen px-4 py-8">
                <TabSwitch currentMode={currentMode} setCurrentMode={setCurrentMode} mode={mode} />
                <div>
                    {currentMode === mode[0] && <Fastmode />}
                    {currentMode === mode[1] && <Googlemode />}
                    {currentMode === mode[2] && <Normalmode />}
                    {currentMode === mode[3] && (
                        <History setCurrentMode={setCurrentMode} mode={mode} />
                    )}
                </div>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
