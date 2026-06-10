import { Outlet } from 'react-router-dom';

import Header from './components/common/header/Header';

const App = () => {
    return (
        <>
            <Header />
            <main style={{ height: '100%' }}>
                <Outlet />
            </main>
        </>
    );
};

export default App;
