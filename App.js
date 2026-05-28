import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider, RouteProtegee } from './LoginAdmin'
import HomePage from './HomePage'
import APropos from './APropos'
import Medicaments from './Medicaments'
import Contact from './Contact'
import CreerCompte from './CreerCompte'
import Stock from './Stock'
import LoginAdmin from './LoginAdmin'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/medicaments" element={<Medicaments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creercompte" element={<CreerCompte mode="inscription" />} />
          <Route path="/seconnecter" element={<CreerCompte mode="connexion" />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/stock" element={
            <RouteProtegee>
              <Stock />
            </RouteProtegee>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App