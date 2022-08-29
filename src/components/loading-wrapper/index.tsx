import React from "react";

interface IProps {
  isLoading: boolean;
  children: JSX.Element | JSX.Element[];
}

const LoadingWrapper: React.FC<IProps> = ({ isLoading, children }) => {
  if (!isLoading) {
    return <>{children}</>;
  } else {
    return <div>Laster...</div>;
  }
};

export default LoadingWrapper;
