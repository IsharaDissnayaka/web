import React, { useEffect, useState } from 'react';
import '../style/Gallery.css';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';

const images = [
  {
    src: img1,
    title: 'Silver Jubilee Innovation expo 2025',
    description:
      'This is a project that showcases the innovative solutions developed by our team during the Silver Jubilee Innovation Expo 2025.',
  },
  {
    src: img2,
    title: '',
    description: '',
  },
  {
    src: img3,
    title: '',
    description: '',
  },
  {
    src: img2,
    title: '',
    description: '',
  },
  // Add more images as needed
];

const Gallery = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 1; // Show one image at a time for a slider effect

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(images[(startIndex + i) % images.length]);
  }

  return (
    <div className="gallery-dark-container">
      {visibleImages.map((image, index) => (
        <div key={index} className="gallery-dark-item">
          <img
            src={image.src}
            alt={image.title}
            className="gallery-dark-img"
          />
          <div className="gallery-dark-overlay">
            <h2 className="gallery-dark-title">{image.title}</h2>
            <p className="gallery-dark-desc">{image.description}</p>
          </div>
        </div>
      ))}
      <div className="gallery-dark-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`gallery-dark-dot ${idx === startIndex ? 'active' : ''}`}
            onClick={() => setStartIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;