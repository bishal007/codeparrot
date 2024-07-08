import React from 'react';
import './App.css';
// import mask from './assets/mask.svg';
// import designer from './assets/designer-1.svg';
// import bgButton1 from './assets/bg.svg';
// import bgButton2 from './assets/bg-2.webp';

function App() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="text-block">
          <h1 className="title">Introduce Your Product Quickly & Effectively</h1>
          <p className="body">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </div>
        <div className="buttons">
          <button className="purchase-button">
            <img src="assets/bg.svg" alt="BG" />
            <span className="button-label white">Purchase UI Kit</span>
          </button>
          <button className="learn-more-button">
            <img src="assets/bg.svg" alt="BG" />
            <span className="button-label dark">Learn More</span>
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src="assets/designer-1.svg" alt="Designer" className="designer" />
        <img src="assets/Teamwork-M.jpg" alt="Mask" className="mask" />
      </div>
    </div>
  );
}

export default App;
