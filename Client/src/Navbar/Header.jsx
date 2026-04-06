import React, { useState } from "react";
// import "./App.css"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <button className="btn-outline">Get the App</button>
            <button className="btn-primary">Login / Signup</button>
          </div>
        </div>
      </header>

      {/* SIDEBAR */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        
        {/* HEADER */}
        <div className="sidebar-header">
          <span className="close-btn" onClick={() => setIsOpen(false)}>←</span>
        </div>

        {/* MENU */}
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
    </>
  );
};

export default Header;