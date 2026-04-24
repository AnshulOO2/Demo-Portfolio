import { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorClasses, setCursorClasses] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Look for specific tags or classes in the ancestor chain
      const isLinkOrService = target.closest('a') || target.closest('.svc-item');
      const isWorkItem = target.closest('.work-item');
      const isPhotoMain = target.closest('.photo-main');
      
      let classes = [];

      if (isLinkOrService) {
        classes.push('big');
      }

      if (isWorkItem) {
        classes.push('project-hover');
        if (isWorkItem.classList.contains('coming-soon')) {
          classes.push('coming-soon-hover');
        }
      }

      if (isPhotoMain) {
        classes.push('contact-hover');
      }

      setCursorClasses(classes.join(' '));
    };

    const handleMouseOut = (e) => {
      // Removing classes when leaving the elements
      setCursorClasses('');
    };

    window.addEventListener('mousemove', handleMouseMove);
    // Use capture phase or standard delegation for mouseover/mouseout
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div 
      id="cur" 
      className={cursorClasses} 
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    ></div>
  );
}

export default CustomCursor;
