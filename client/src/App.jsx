
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// basic user interface pages
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

// admin login interfaces
import AdminLogin from "./components/Admin/AdminLogin";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminSummary from "./components/Admin/AdminSummary";
import Profile from "./components/Admin/Profile";
import Setting from "./components/Admin/Setting";

// admin controlling setions
import AdminControl from "./components/Admin/AdminControl";
import BlogManagement from "./components/Admin/BlogManagement";
import CareerManagement from "./components/Admin/CareerManagement";
import ContactManagement from "./components/Admin/ContactManagement";
import PortfolioManagement from "./components/Admin/PortfolioManagement";
import ServicesManagement from "./components/Admin/ServicesManagement";
import TeamManagement from "./components/Admin/TeamManagement";

// security realted
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

// Placeholder pages for admin routes
const PlaceholderPage = ({ title }) => (
  <div className="p-8">
    <h2 className="text-3xl font-bold mb-4">{title}</h2>
    <p>This page is under construction.</p>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Website Pages with Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/services" element={<Layout><Services /></Layout>} />
          <Route path="/team" element={<Layout><Team /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/careers" element={<Layout><Careers /></Layout>} />

          {/* Admin Login */}
          <Route path="/adminlogin" element={<AdminLogin />} />

          {/* Protected Admin Section */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            {/* Default route -> AdminSummary */}
            <Route index element={<AdminSummary />} />

            {/* Profile */}
            <Route path="profile" element={<Profile />} />
            <Route path="setting" element={<Setting />} />

            {/* Other admin pages (placeholders) */}
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
