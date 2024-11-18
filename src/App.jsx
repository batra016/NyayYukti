import ButtonGradient from './assets/svg/ButtonGradient';
import Benefits from './components/Benefits';
import Documents from './components/Documents';
import Header from './components/Header';
import Services from './components/Services';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import NewPage from './components/NewPage';

function App() {
  return (
    <>
      <Header />
      <div className="pt-[4.75rem] lg:pt-[5.75rem] overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Benefits />
                <Documents />
                <Services />
              </>
            }
          />
          <Route path="/new-page" element={<NewPage />} />
        </Routes>
      </div>
      <Footer />
      <ButtonGradient />
    </>
  );
}

export default App;
