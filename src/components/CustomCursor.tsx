import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Trail particles with different delays
  const trailConfig = { damping: 35, stiffness: 200 };
  const trail1X = useSpring(cursorX, trailConfig);
  const trail1Y = useSpring(cursorY, trailConfig);
  
  const trail2Config = { damping: 45, stiffness: 150 };
  const trail2X = useSpring(cursorX, trail2Config);
  const trail2Y = useSpring(cursorY, trail2Config);

  const trail3Config = { damping: 55, stiffness: 100 };
  const trail3X = useSpring(cursorX, trail3Config);
  const trail3Y = useSpring(cursorY, trail3Config);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hover-lift') ||
        target.classList.contains('btn-primary') ||
        target.classList.contains('glass-card')
      );
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor via CSS */}
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Trail particles */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: trail3X,
          y: trail3Y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.2 : 0,
        }}
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-md" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: trail2X,
          y: trail2Y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.3 : 0,
        }}
      >
        <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-md" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: trail1X,
          y: trail1Y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.5 : 0,
        }}
      >
        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 blur-sm" />
      </motion.div>

      {/* Main cursor - outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full border-2 border-cyan-500/50"
          animate={{
            width: isHovering ? 50 : isClicking ? 30 : 40,
            height: isHovering ? 50 : isClicking ? 30 : 40,
            borderColor: isHovering 
              ? 'rgba(139, 92, 246, 0.6)' 
              : 'rgba(6, 182, 212, 0.5)',
          }}
          transition={{ duration: 0.2 }}
          style={{
            boxShadow: isHovering 
              ? '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)' 
              : '0 0 15px rgba(6, 182, 212, 0.3), 0 0 30px rgba(6, 182, 212, 0.1)',
          }}
        />
      </motion.div>

      {/* Main cursor - inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          animate={{
            width: isClicking ? 12 : 8,
            height: isClicking ? 12 : 8,
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{ duration: 0.15 }}
          style={{
            boxShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 0 20px rgba(6, 182, 212, 0.4)',
          }}
        />
      </motion.div>

      {/* Glow effect on hover */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl" />
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
