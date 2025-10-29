import React, {useEffect, useState} from "react";
import Lottie from "lottie-react";

const LottieView = () => {
  const [animationData, setAnimationData] = useState(null);
  useEffect(() => {
    fetch("animation.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);
  return (
    <div className="max-w-md h-80 mx-auto -mt-28">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieView;