import { Outlet } from 'react-router-dom';
import Navbar from '../SharedPages/NavBar/Navbar';
import Footer from '../SharedPages/Footer/Footer';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;