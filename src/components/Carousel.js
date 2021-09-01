import React, { useState, useEffect } from "react";

export default function Carousel(props) {
  const { children, show } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const [touchPosition, setTouchPosition] = useState(null);

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  useEffect(() => {
    setLength(children.length);
  }, [children]);
  return (
    <>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <div
            className="carousel-content-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            <div className="carousel-wrapper">
              {/* You can alwas change the content of the button to other things */}
              <button onClick={prev} className="left-arrow">
                &lt;
              </button>
              <div className="carousel-content-wrapper">{/*...*/}</div>
              {/* You can alwas change the content of the button to other things */}
              <button onClick={next} className="right-arrow">
                &gt;
              </button>
            </div>
            <div
              className={`carousel-content show-${show}`}
              style={{
                transform: `translateX(-${currentIndex * (100 / show)}%)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
