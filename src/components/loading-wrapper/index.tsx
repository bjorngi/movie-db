import React from "react";

const LoadingWrapper = ({ isLoading, children }) => {
  if (!isLoading) {
    return <>{children}</>;
  } else {
    return <div>Laster...</div>;
  }
};

export default LoadingWrapper;
