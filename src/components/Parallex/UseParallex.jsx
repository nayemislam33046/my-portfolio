import React, { useEffect, useRef } from "react";
const ParallaxLayer = ({ src, offset, color }) => {
  const layerRef = useRef();
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 2;
    const y = (clientY / window.innerHeight - 0.5) * 2;
    layerRef.current.style.transform = `translate(${x * offset * 50}px, ${y * offset * 50
      }px)`;
  };
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div ref={layerRef} className={`${color}`}>
      <img src={src} alt="" />
    </div>
  );
};
export default ParallaxLayer;