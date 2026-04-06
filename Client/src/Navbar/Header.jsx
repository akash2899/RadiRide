import React, { useState } from "react";
import AuthModal from "../LoginModal/AuthModal"; 
import AppDownloadModal from "../AppDownloadModal/DownloadModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAppModalOpen, setIsAppModalOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="header">
        <div className="header-container">
          
          {/* LEFT */}
          <div className="header-left">
            <div className="menu-icon" onClick={() => setIsOpen(true)}>
              ☰
            </div>

            <div className="logo">
              <div className="logo-box">R</div>
              <span>RahiRide</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="header-right">
          <button 
  className="btn-outline"
  onClick={() => setIsAppModalOpen(true)}
>
  Get the App
</button>

            <button 
              className="btn-primary"
              onClick={() => setIsModalOpen(true)}
            >
              Login / Signup
            </button>
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <span className="close-btn" onClick={() => setIsOpen(false)}>←</span>
        </div>

        <div className="sidebar-menu">
          <div className="menu-item">
            <span className="icon">👤</span>
            <span>Login or Signup</span>
          </div>

          <div className="menu-item">
            <span className="icon green">R</span>
            <span>Become a Host</span>
          </div>

          <hr />

          <div className="menu-item">
            <span className="icon">🏢</span>
            <span>Investor Relations</span>
          </div>

          <div className="menu-item">
            <span className="icon">📰</span>
            <span>Press Releases</span>
          </div>

          <hr />

          <div className="menu-item">
            <span className="icon">📄</span>
            <span>Host Vehicle Policies</span>
          </div>

          <div className="menu-item">
            <span className="icon">📞</span>
            <span>Help & Support</span>
          </div>

          <div className="menu-item">
            <span className="icon">📝</span>
            <span>Blogs</span>
          </div>
        </div>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* ✅ MODAL (CORRECT POSITION) */}
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <AppDownloadModal
  isOpen={isAppModalOpen}
  onClose={() => setIsAppModalOpen(false)}
/>
    </>
  );
};

export default Header;