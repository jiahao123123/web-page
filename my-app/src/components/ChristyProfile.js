import React from 'react';
import './ChristyProfile.css';
import image from './image.png'; // Import the local image

function ChristyProfile() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Christy Herman</h1>
        <p>DRE#0170780 | Vision Real Estate</p>
        <p>Write Christy Herman's 1st recommendation</p>
      </header>
      <div className="content-container">
        <div className="profile-section">
          <div className="image-section">
            <img src={image} alt="Christy Herman" />
          </div>
          <div className="about-section">
            <h2>About Christy Herman</h2>
            <p>
              A Bay Area resident for over 40 years, and a Realtor for over 25, Christy Herman is intimately familiar with San Francisco Peninsula real estate with Vision Real Estate. Christy has leveraged the company’s dominant market position and resources to assist her clients interested overseas looking for investment opportunities in the United States.
            </p>
            <p>
              Christy’s dedication to offering the highest level of personal service is exemplified by many testimonials from her loyal clients. Her fluency in multiple languages (English, Mandarin, Cantonese, and Vietnamese) is a great strength in succeeding in the diverse San Francisco Bay Area community. Christy maintains a rigorous schedule of continuing education and skills enhancement including her GRI certification, an advanced certification in the field of real estate professionalism. Additionally, her training and experience in accounting, prior to her real estate career, brings a knowledge and attention to detail which is invaluable in the practice of real estate, particularly for investors.
            </p>
            <p>
              Though Christy’s clients appreciate the professionalism she brings to every transaction, they also know her as a gourmet cook and the proud mother of her son Nathan, a practicing attorney. Christy enjoys traveling when possible, but loves spending time with friends and family above all else.
            </p>
            <p>
              Whether you are a seasoned investor or a first-time home buyer, Christy Herman is exactly the kind of real estate professional you need to formulate and achieve your investment goals. Combining her extensive knowledge and experience together with her many key relationships in related disciplines such as real estate & tax law, estate planning, and construction, Christy will act as the quarterback on the team that helps you fulfill every real estate goal.
            </p>
            <a href="#">See less</a>
          </div>
        </div>
        <div className="credentials-section">
          <h2>Credentials</h2>
          <div className="credentials-grid">
            <div className="credential-box">
              <p>Experience</p>
              <p>33 years 5 months</p>
            </div>
            <div className="credential-box">
              <p>Areas served</p>
              <p>Belmont, Burlingame, Menlo Park, Millbrae</p>
              <p>Redwood City, San Carlos, San Francisco, San Mateo</p>
              <p>South San Francisco</p>
            </div>
            <div className="credential-box">
              <p>Spoken Languages</p>
              <p>Chinese, Mandarin, Vietnamese</p>
            </div>
            <div className="credential-box">
              <p>Ratings and reviews</p>
              <p>No ratings yet</p>
            </div>
            <div className="credential-box">
              <p>Recommendations</p>
              <p>No recommendations yet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChristyProfile;