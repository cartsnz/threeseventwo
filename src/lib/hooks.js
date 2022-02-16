import { useEffect, useLayoutEffect, useState } from 'react';

// Custom hook to handle scroll animation of header
export const useHeaderScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  let prevScroll = window.scrollY;

  const handleScroll = () => {
    const currScroll = window.scrollY;
    const isScrolled = prevScroll < currScroll && currScroll > 25;
    setScrolled(isScrolled);
    prevScroll = currScroll;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }; 
  })

  return scrolled;
}

// Custom hook to lock body scroll
export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    console.log('component mounting');
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}

// TODO - revisit this later on if needed

// const [open, setOpen] = useState(false);
// const node = useRef();
// useOnClickOutside(node, () => setOpen(false));
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};