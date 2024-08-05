import { useEffect } from 'react';

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const sectionRect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const middlePoint = sectionRect.top + (sectionRect.height / 2) + window.scrollY;
    const centeredPoint = middlePoint - (viewportHeight / 2);
    window.scrollTo({ top: centeredPoint, behavior: 'smooth' });
  }
};

export default scrollToSection;