import React, { useState, useEffect } from "react";

const Loading = () => {
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTrigger(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return trigger;
};

export default Loading;
