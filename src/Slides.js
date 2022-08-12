import React from 'react';
import { useState } from 'react';

function Slides() {
  const slides = [
    { title: 1, text: 'text 1' },
    { title: 2, text: 'text 2' },
  ];

  const [allSlides, setSlides] = useState(Slides);
  const [currentSlideIndex, setSlideIndex] = useState(0);

  const handleRestart = () => {
    setSlides(slides[0]);
    setSlideIndex(0);
  };

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setSlides(slides[setSlideIndex - 1]);
      setSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setSlideIndex(currentSlideIndex + 1);
      setSlides([slides[setSlideIndex + 1]]);
    }
  };

  const addSlides = allSlides.map((slide, index) => {
    return (
      <div id="slide" className="card text-center" key={index}>
        <h1 data-testid="title">{slide.title}</h1>
        <p data-testid="text">{slide.text}</p>
      </div>
    );
  });

  return (
    <div>
      <div id="navigation" className="text-center">
        {currentSlideIndex !== 0 ? (
          <button onClick={handleRestart} data-testid="button-restart" className="small outlined">
            Restart
          </button>
        ) : (
          <button
            disabled
            onClick={handleRestart}
            data-testid="button-restart"
            className="small outlined"
          >
            Restart
          </button>
        )}
        {currentSlideIndex === 0 ? (
          <button disabled onClick={handlePrev} data-testid="button-prev" className="small">
            Prev
          </button>
        ) : (
          <button onClick={handlePrev} data-testid="button-prev" className="small">
            Prev
          </button>
        )}
        {currentSlideIndex === slides.length - 1 ? (
          <button onClick={handleNext} disabled data-testid="button-next" className="small">
            Next
          </button>
        ) : (
          <button onClick={handleNext} data-testid="button-next" className="small">
            Next
          </button>
        )}
      </div>
      {addSlides}
    </div>
  );
}

export default Slides;
