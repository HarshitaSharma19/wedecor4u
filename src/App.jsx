import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { AIChatAssistant } from './components/AIChatAssistant';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Services from './pages/Services';
import Hospitality from './pages/Hospitality';
import Portfolio from './pages/Portfolio';
import Consultation from './pages/Consultation';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Staff from './pages/Staff';
import Admin from './pages/Admin';
import Materials from './pages/Materials';

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ style: { background: '#1A1714', color: '#F5F0E8', border: '1px solid #8B6914' } }} />
      <SiteHeader />
      <main className="min-h-screen">
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/shop"         element={<Shop />} />
          <Route path="/product/:id"  element={<ProductDetail />} />
          <Route path="/services"     element={<Services />} />
          <Route path="/hospitality"  element={<Hospitality />} />
          <Route path="/portfolio"    element={<Portfolio />} />
          <Route path="/materials"    element={<Materials />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/contact"      element={<Contact />} />
          <Route path="/dashboard"    element={<Dashboard />} />
          <Route path="/staff"        element={<Staff />} />
          <Route path="/admin"        element={<Admin />} />
        </Routes>
      </main>
      <SiteFooter />
      <AIChatAssistant />
    </BrowserRouter>
  );
}
