import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminSignup from "./components/Admin/AdminSignup";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminSummary from "./components/Admin/AdminSummary";
import Profile from "./components/Admin/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

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
          <Route path="/adminsignup" element={<AdminSignup />} />

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

            {/* Other pages */}
            <Route path="profile" element={<Profile />} />

            {/* Later add users/settings */}
            {/* <Route path="users" element={<Users />} /> */}
            {/* <Route path="settings" element={<Settings />} /> */}
          </Route>
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
