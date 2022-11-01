import {useEffect, useRef} from "react";

// Source used: https://www.robinwieruch.de/react-hook-detect-click-outside-component/

// Hook used to register if the user clicks outside of a div, in our case the MovieComponent
export const useOutsideClick = (callback: any) => {
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleClick = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};
