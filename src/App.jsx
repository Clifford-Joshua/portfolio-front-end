import React from "react";
import ScrollToTop from "./ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharedComponent from "./components/SharedComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./utils/Functionality/ProtectedRoute";
import {
  Home,
  About,
  Login,
  Error,
  Contact,
  Project,
  Dashboard,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<SharedComponent />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin-Dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<Error />} />{" "}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
