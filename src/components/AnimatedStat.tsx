import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedStatProps {
  icon: LucideIcon;
  endValue: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const AnimatedStat = ({ icon: Icon, endValue, suffix = '', label, duration = 2 }: AnimatedStatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    
    hasAnimated.current = true;
    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation (ease-out quart)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * endValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, endValue, duration]);

  return (
    <motion.div 
      ref={ref}
      className="text-center lg:text-left group cursor-default"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
        <Icon className="w-5 h-5 text-cyan-medium group-hover:scale-110 transition-transform" />
        <span className="text-2xl md:text-3xl font-bold gradient-text">
          {count}{suffix}
        </span>
      </div>
      <span className="text-sm text-muted-foreground">{label}</span>
    </motion.div>
  );
};

export default AnimatedStat;
