import './App.css';
import { useState, useEffect } from "react";
import useThrottle from './custom-hook/use-throttle';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  const throttledHandleResize = useThrottle(handleResize, 1000);

  useEffect(() => {
    window.addEventListener("resize", throttledHandleResize);

    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  },[]);

  return (
    <div className="App">
      Window Size: {windowSize.width} X {windowSize.height}
    </div>
  );
}

export default App;
