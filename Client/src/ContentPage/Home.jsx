import React, { useState, useEffect } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    city: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const [states, setStates] = useState([]);
  const [loadingStates, setLoadingStates] = useState(true);

  // Fetch Indian states on mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await fetch(
          "https://countriesnow.space/api/v0.1/countries/states",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ country: "India" }),
          }
        );
        const data = await res.json();
        console.log("Fetched states:", data);
        const stateNames = data.data.states.map((s) => s.name);
        setStates(stateNames);
        setFormData((prev) => ({ ...prev, city: stateNames[0] }));
      } catch (err) {
        console.error("Failed to fetch states:", err);
      } finally {
        setLoadingStates(false);
      }
    };

    fetchStates();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle search
  const handleSearch = () => {
    if (!formData.startDate) {
      alert("Please select Start Date");
      return;
    }

    if (!formData.endDate) {
      alert("Please select End Date");
      return;
    }

    if (new Date(formData.endDate) <= new Date(formData.startDate)) {
      alert("End date must be after start date");
      return;
    }

    console.log("🔥 SEARCH DATA:", formData);
  };

  return (
    <div className="home">
      <div className="hero">

        {/* LEFT CARD */}
        <div className="search-card">
          <div className="tabs">
            <span className="active">Daily Rides</span>
            <span>Subscriptions</span>
            <span>Weekly Pass</span>
          </div>

          <h3>Looking for Best Bike Rentals?</h3>
          <h2>Book Self-Drive Bikes Across India</h2>

          {/* CITY / STATE */}
          <div className="input-group">
            <label>City</label>
            <select
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={loadingStates}
            >
              {loadingStates ? (
                <option disabled>Loading states...</option>
              ) : (
                states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))
              )}
            </select>
          </div>

          {/* LOCATION */}
          <div className="input-group">
            <label>Location</label>
            <input
              name="location"
              placeholder="Enter pickup location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          {/* DATE PICKERS */}
          <div className="date-row">
            <div className="date-box">
              <label>Start</label>
              <input
                type="datetime-local"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
              />
            </div>

            <div className="date-box">
              <label>End</label>
              <input
                type="datetime-local"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* BUTTON */}
          <button className="search-btn" onClick={handleSearch}>
            SEARCH
          </button>
        </div>

        {/* RIGHT HERO */}
        <div className="hero-content">
          <h1>RIDE ANYTIME</h1>
          <h2>ANYWHERE</h2>
          <p>
            Choose from premium bikes with unlimited kms and hassle-free rides.
          </p>
          <img alt="bike" />
        </div>
      </div>

      {/* FEATURES */}
      <div className="features">
        <div>🏍 20,000+ Bikes</div>
        <div>♾ Unlimited KMs</div>
        <div>🛡 Trip Protection</div>
        <div>📞 24/7 Support</div>
      </div>
    </div>
  );
};

export default Home;