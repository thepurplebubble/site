import React from 'react';
import './style.css'; // Import your local style file here
import { LottiePlayer } from '@lottiefiles/lottie-player';

const App = () => {
  return (
    <div>
      <link href="./index.css" rel="stylesheet" />
      <script
        type="text/javascript"
        src="https://unpkg.com/@lottiefiles/lottie-player@1.6.0/dist/lottie-player.js"
      ></script>

      <div className="home-container">
        <div className="home-hero">
          <h1 className="home-text">Welcome To The Purple Bubble!</h1>
          <span className="home-text1">
            <span>
              A Free and OpenSource Project Created and Maintained By The Community
            </span>
            <span></span>
            <span></span>
          </span>
          <div className="home-btn-group">
            <a
              href="https://github.com/thepurplebubble"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link button"
            >
              Help Contribute
            </a>
            <button className="home-button button">Sign Up For Newsletter</button>
          </div>
        </div>
        <div className="home-features">
          <div className="home-container1">
            {/* Feature Card 1 */}
            <div className="feature-card21-feature-card feature-card21-root-class-name3">
              <svg viewBox="0 0 1024 1024" className="feature-card21-icon">
                {/* ... SVG Path ... */}
              </svg>
              <div className="feature-card21-container">
                <h2 className="feature-card21-text">
                  <span>End-to-End Encryption</span>
                </h2>
                <span>
                  <span>
                    Ensure your conversations are secure and private with end-to-end
                    encryption.
                  </span>
                </span>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="feature-card22-feature-card feature-card22-root-class-name3">
              <svg viewBox="0 0 1024 1024" className="feature-card22-icon">
                {/* ... SVG Path ... */}
              </svg>
              <div className="feature-card22-container">
                <h2 className="feature-card22-text">
                  <span>Group Chats</span>
                </h2>
                <span>
                  <span>
                    Easily create and manage group chats to collaborate with friends,
                    family, or colleagues.
                  </span>
                </span>
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="feature-card23-feature-card feature-card23-root-class-name3">
              <svg viewBox="0 0 1024 1024" className="feature-card23-icon">
                {/* ... SVG Path ... */}
              </svg>
              <div className="feature-card23-container">
                <h2 className="feature-card23-text">
                  <span>Cross-Platform Compatibility</span>
                </h2>
                <span>
                  <span>
                    Access your messages from any device, whether it's a smartphone,
                    tablet, or computer.
                  </span>
                </span>
              </div>
            </div>

            {/* Feature Card 4 */}
            <div className="feature-card24-feature-card feature-card24-root-class-name3">
              <svg viewBox="0 0 1024 1024" className="feature-card24-icon">
                {/* ... SVG Path ... */}
              </svg>
              <div className="feature-card24-container">
                <h2 className="feature-card24-text">
                  <span>Customizable Themes</span>
                </h2>
                <span>
                  <span>
                    Personalize your messaging experience with a wide range of
                    customizable themes and color options.
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="home-container2">
            <lottie-player
              src="https://lottie.host/24b6463d-e45e-4626-88b9-32dc2044a6f8/GLQFuHjD0l.json"
              loop=""
              speed="1"
              autoplay=""
              background="transparent"
              className="home-lottie-node"
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
