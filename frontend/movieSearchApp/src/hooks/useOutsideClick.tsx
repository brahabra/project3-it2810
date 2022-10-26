import React from "react";

// Source used: https://www.robinwieruch.de/react-hook-detect-click-outside-component/

export const useOutsideClick = (callback: any) => {
  const ref = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref]);

  return ref;
};
