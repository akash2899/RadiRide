import React from "react";


const AppDownloadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="app-modal-overlay">
      <div className="app-modal">

        {/* CLOSE */}
        <div className="app-close" onClick={onClose}>✕</div>

        {/* LEFT CONTENT */}
        <div className="app-left">
          <h2>Download the app and book your ride</h2>

          <ul>
            <li>Scan the QR code to download the RahiRide App</li>
            <li>Or use the links below to open Play Store / App Store</li>
          </ul>

          {/* STORE ICONS */}
          <div className="store-icons">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="playstore"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="appstore"
            />
          </div>
        </div>

        {/* RIGHT QR */}
        <div className="app-right">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://rahiride.com"
            alt="QR Code"
          />
        </div>

      </div>
    </div>
  );
};

export default AppDownloadModal;