import './App.css';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import FIFAPage from './pages/fifapage';
import FIFAOTATPage from './pages/fifaOTATpage';
import CODPage from './pages/codpage';
import CODOTATPage from './pages/codOTATpage';
import RLPage from './pages/rlpage';
import RLOTATPage from './pages/rlOTATpage';
import NBAPage from './pages/nbapage';
import NBAOTATPage from './pages/nbaOTATpage';
import About from './pages/about';
import FootNavbar from './components/footnavbar';
import Footer from './components/footer';
import Home from './pages/home';

function App() {

  const theme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        white: '#ffffff',
        black: '#000000',
      }
    }
  })

  return (
    <NextUIProvider theme={theme}>
      <Header/>
      <div className='container'>
            <Router>
              <Routes>

                <Route exact path="/" element={<Home/>} />

                <Route exact path="/fifa" element={<FIFAPage/>} />
                <Route exact path="/fifa/otat" element={<FIFAOTATPage/>} />

                <Route exact path="/cod" element={<CODPage/>} />
                <Route exact path="/cod/otat" element={<CODOTATPage/>} />

                <Route exact path="/rocketleague" element={<RLPage/>} />
                <Route exact path="/rocketleague/otat" element={<RLOTATPage/>} />

                <Route exact path="/nba" element={<NBAPage/>} />
                <Route exact path="/nba/otat" element={<NBAOTATPage/>} />

                <Route exact path="/about" element={<About/>} />
                
              </Routes>
            </Router>
          </div>
      <FootNavbar/>
      <Footer/>
    </NextUIProvider>
  );
}

export default App;
