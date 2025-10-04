'use client';

import { useRef, useEffect, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'zoom-out';
  delay?: number;
  className?: string;
}

const AnimatedSection = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  className = '' 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    const animations = {
      'fade-up': isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-20',
      'fade-down': isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 -translate-y-20',
      'fade-left': isVisible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 translate-x-20',
      'fade-right': isVisible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 -translate-x-20',
      'zoom-in': isVisible 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95',
      'zoom-out': isVisible 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-105',
    };

    return `${baseClasses} ${animations[animation]}`;
  };

  return (
    <div ref={sectionRef} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
