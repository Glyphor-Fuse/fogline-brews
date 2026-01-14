import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface SignatureInteractionProps {
  type: 'parallax' | 'text-reveal' | 'clip-reveal' | 'hover';
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const SignatureInteraction = ({ type, children, className = '', intensity = 0.2 }: SignatureInteractionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, intensity * 500]);

  if (type === 'parallax') {
    return (
      <div ref={ref} className={`overflow-hidden ${className}`}>
        <motion.div style={{ y }} className="w-full h-full">
          {children}
        </motion.div>
      </div>
    );
  }

  if (type === 'clip-reveal') {
    return (
      <motion.div
        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
        whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={className}>{children}</div>;
};
