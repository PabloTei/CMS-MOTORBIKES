import './App.css';

import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Layout from './Layout/Layout';
import NotFound from './Pages//NotFound/NotFound';
import About from './Pages/About/About';
import Company from './Pages/Company/Company';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MotoDetails from './Pages/MotoDetails/MotoDetails';

const App = () => {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Home/:id" element={<MotoDetails />} />
        <Route
          path="/Company"
          element={
            <ProtectedRoute>
              <Company />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Layout>
  );
};

export default App;
