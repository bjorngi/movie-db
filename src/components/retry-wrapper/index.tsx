import React from "react";

const RetryWrapper = ({ isError = false, children, retryFunction }) => {
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
