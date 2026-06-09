import Header from './components/common/header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default App;
