import { useEffect, useRef, useState } from "react";

export const useObserver = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const elemRef = useRef(null);

  useEffect(() => {
    const cb = (entries: any) => {
      const intersect = entries[0];
      setVisible(intersect.isIntersecting);
    };

    if (!elemRef.current) return;
    const observer = new IntersectionObserver(cb, { threshold: 0.5 });
    observer.observe(elemRef.current);

    return () => {
      setVisible(false);
      elemRef.current && observer.unobserve(elemRef.current);
    };
  }, [elemRef]);
  return { visible, elemRef };
};
