/**
 * Check if onKeyDown/onKeyUp is of key 'Enter' and calls callback function
 */
export const onEnterKey =
  (callback: () => void): React.KeyboardEventHandler<HTMLDivElement> =>
  (e) => {
    if (e.key === "Enter") {
      callback();
    }
  };
