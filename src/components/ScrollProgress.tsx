import { useScrollProgress } from '@/hooks/useScrollReveal';

const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-muted/30">
      <div
        className="h-full gradient-primary transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
