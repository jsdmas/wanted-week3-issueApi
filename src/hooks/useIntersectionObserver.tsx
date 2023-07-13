import { useRef } from 'react';

// eslint-disable-next-line
function useIntersectionObserver(callback: any) {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 1 },
    ),
  );
  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
  };

  return observe;
}
export default useIntersectionObserver;
