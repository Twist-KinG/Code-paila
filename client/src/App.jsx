import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";

// Public Pages
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

// Admin Pages
import AdminLogin from "./components/Admin/AdminLogin";
import AdminSignup from "./components/Admin/AdminSignup";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminSummary from "./components/Admin/AdminSummary";
import Profile from "./components/Admin/Profile";
import Setting from "./components/Admin/Setting";
import AdminControl from "./components/Admin/AdminControl";
import BlogManagement from "./components/Admin/BlogManagement";
import CareerManagement from "./components/Admin/CareerManagement";
import ContactManagement from "./components/Admin/ContactManagement";
import PortfolioManagement from "./components/Admin/PortfolioManagement";
import ServicesManagement from "./components/Admin/ServicesManagement";
import TeamManagement from "./components/Admin/TeamManagement";

// Security
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* -------------------- PUBLIC WEBSITE -------------------- */}
          <Route
            path="/"
            element={
              <Layout>
                <PageWrapper>
                  <Home />
                </PageWrapper>
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <PageWrapper>
                  <About />
                </PageWrapper>
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <PageWrapper>
                  <Services />
                </PageWrapper>
              </Layout>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Layout>
                <PageWrapper>
                  <Portfolio />
                </PageWrapper>
              </Layout>
            }
          />
          <Route
            path="/team"
            element={
              <Layout>
                <PageWrapper>
                  <Team />
                </PageWrapper>
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              </Layout>
            }
          />
          <Route
            path="/careers"
            element={
              <Layout>
                <PageWrapper>
                  <Careers />
                </PageWrapper>
              </Layout>
            }
          />

          {/* -------------------- ADMIN LOGIN -------------------- */}
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />

          {/* -------------------- PROTECTED ADMIN ROUTES -------------------- */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminSummary />} />
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />
            <Route path="career" element={<CareerManagement />} />
            <Route path="team" element={<TeamManagement />} />
            <Route path="services" element={<ServicesManagement />} />
            <Route path="portfolio" element={<PortfolioManagement />} />
            <Route path="contact" element={<ContactManagement />} />
            <Route path="blog" element={<BlogManagement />} />
            <Route path="admin-control" element={<AdminControl />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
