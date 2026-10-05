import { useEffect, useRef, useState } from "react";

/**
 * Tracks whether an element is in (or near) the viewport.
 *
 * - `inView`: currently visible, use it to pause/resume render loops.
 * - `hasBeenInView`: became visible at least once, use it to lazy-mount
 *   heavy content (3D scenes, globe) and keep it mounted afterwards.
 */
const useInView = ({ rootMargin = "200px" } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setHasBeenInView(true);
      },
      { rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin]);

  return { ref, inView, hasBeenInView };
};

export default useInView;
