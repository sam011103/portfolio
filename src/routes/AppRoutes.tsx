import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import Index from '../pages/Index';
// import Contact from '../pages/Contact';
import Project from '../pages/Project';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Pages under MainLayout */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Index />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/project/:id" element={<Project />} />
        </Route>

        {/* Direct pages (no layout) */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}

        {/* Catch-all route */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}
