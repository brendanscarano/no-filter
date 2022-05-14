import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { HomePage } from "./pages/Home";
import { ProfilePage } from "./pages/Profile";
import { UploadPage } from "./pages/Upload";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/user/:userId" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
