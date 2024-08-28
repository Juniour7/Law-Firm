import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css'

//Pages
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import PracticeAreas from './Pages/PracticeAreas';
import Contact from './Pages/Contact';

//Users Portal
import Dashboard from './Pages/DashBoard Pages/Dashboard';

//Practice Areas
import DebtRecovery from './Pages/Practice Areas/DebtRecovery';
import BankingFinancing from './Pages/Practice Areas/BankingFinancing';
import Cooprate from './Pages/Practice Areas/Cooprate';
import PrivateClient from './Pages/Practice Areas/PrivateClient';
import EmploymentRelations from './Pages/Practice Areas/EmploymentRelations';
import ProbateAdministration from './Pages/Practice Areas/ProbateAdministration';
import RiskCompliance from './Pages/Practice Areas/RiskCompliance';
import RealEstate from './Pages/Practice Areas/RealEstate';

//components
import NavBar from './Components/Navigation/NavBar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/Scroll To Top/ScrollToTop';


function App() {
  return (
    <>
      <HelmetProvider>
        <Router>
          <Routes>
            <Route path='*' element={
              <>
                <NavBar />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/about-Us' element={<AboutUs />} />
                  <Route path='/practice-areas'  element={<PracticeAreas />} />
                  <Route path='/contact-us' element={<Contact />} />

                  <Route path='/practice-areas' >
                    <Route path='debt-recovery' element={<DebtRecovery />} />
                    <Route path='banking-financing' element={<BankingFinancing />} />
                    <Route path='cooprate' element={<Cooprate />} />
                    <Route path='private-client' element={<PrivateClient />} />
                    <Route path='employment-relations' element={<EmploymentRelations />} />
                    <Route path='probate-administration' element={<ProbateAdministration />} />
                    <Route path='risk-compliance' element={<RiskCompliance />} />
                    <Route path='real-estate' element={<RealEstate />} />
                  </Route>
                </Routes>
                <Footer />
              </>
            }
            />
            <Route path='/dashboard/*' element={<Dashboard />} />
            <Route exact path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
          <ScrollToTop />
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App
