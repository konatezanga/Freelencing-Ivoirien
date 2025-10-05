import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  React.useEffect(() => {
    const mediaQuery = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;
    const mql = window.matchMedia(mediaQuery);

    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    // Compatibilité plus large
    if (mql.addEventListener) {
      mql.addEventListener("change", handleResize);
    } else {
      mql.addListener(handleResize);
    }

    // Nettoyage
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener("change", handleResize);
      } else {
        mql.removeListener(handleResize);
      }
    };
  }, []);

  return isMobile;
}
