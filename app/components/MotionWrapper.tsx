// app/components/MotionWrapper.tsx
'use client';

import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MotionWrapper = ({ children, className = '' }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
