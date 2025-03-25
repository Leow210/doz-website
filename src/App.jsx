import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/globals.css';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import ResourcesPage from './pages/ResourcesPage';
import GeneralMembersPage from './pages/GeneralMembersPage';
import AchievementsPage from './pages/AchievementsPage';
import GalleryPage from './pages/GalleryPage';
import ApplicationsOpenPage from './pages/ApplicationsOpenPage';
import ApplicationsClosedPage from './pages/ApplicationsClosedPage';
import ScrollManager from './components/ScrollManager';
import AdminPanel from './pages/AdminPanel';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        {/* Admin routes outside of main layout */}
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/admin/publish" element={<AdminPanel />} />

        {/* Main site routes wrapped in Layout */}
        <Route path="*" element={<Layout>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/eboard" element={<MembersPage />} />
            <Route path="/members" element={<GeneralMembersPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/apply" element={<ApplicationsClosedPage />} />
          </Routes>
        </Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;