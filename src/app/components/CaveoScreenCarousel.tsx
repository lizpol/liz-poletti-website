import { useState, useEffect } from "react";
import screen1 from "../../imports/1.png";
import screen2 from "../../imports/2.png";
import screen3 from "../../imports/3.png";
import screen4 from "../../imports/4.png";
import screen5 from "../../imports/5.png";
import screen6 from "../../imports/6.png";
import screen7 from "../../imports/7.png";
import screen8 from "../../imports/8.png";

const screens = [
  screen1,
  screen2,
  screen3,
  screen4,
  screen5,
  screen6,
  screen7,
  screen8,
];

export default function CaveoScreenCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screens.length);
    }, 2800); // 2.8 seconds per screen

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {screens.map((screen, index) => (
        <img
          key={index}
          src={screen}
          alt="Caveo Financial Planning App"
          className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)',
            pointerEvents: index === currentIndex ? 'auto' : 'none',
          }}
        />
      ))}
    </div>
  );
}
