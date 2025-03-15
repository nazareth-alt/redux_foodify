import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/welcomeBanner.css"; // Ensure you have this CSS file

const WelcomeBanner = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <div className="welcome-banner">
      {/* Video Background */}
      <video autoPlay loop muted playsInline>
        <source src="https://videos.pexels.com/video-files/5950368/5950368-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="banner-overlay">
        <h1>Welcome to Foodify</h1>
        <p>Discover delicious recipes and explore trending meals.</p>

        {/* Search Input Inside Banner */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            className="search-input"
            placeholder="Search recipes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="search-btn">Search</button>
        </form>
      </div>
    </div>
  );
};

export default WelcomeBanner;

