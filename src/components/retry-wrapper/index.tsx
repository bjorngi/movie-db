import React from "react";

interface IProps {
  children: JSX.Element | JSX.Element[];
  retryFunction?: () => void;
  isError?: boolean;
}

const RetryWrapper = ({ isError = false, children, retryFunction }: IProps) => {
  if (!isError) {
    return <>{children}</>;
  } else {
    return (
      <div>
        <div>Beklager. Det oppstod en feil.</div>
        {retryFunction && <button onClick={retryFunction}>Prøv igjen</button>}
      </div>
    );
  }
};

export default RetryWrapper;
