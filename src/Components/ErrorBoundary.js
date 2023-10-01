import React, { useState, useEffect } from "react";

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const componentDidCatch = (error, info) => {
      setHasError(true);
    };

    // Set up error handling
    window.addEventListener("error", componentDidCatch);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("error", componentDidCatch);
    };
  }, []);

  if (hasError) {
    return <h1>Oooops. That is not good</h1>;
  }

  return props.children;
}

export default ErrorBoundary;