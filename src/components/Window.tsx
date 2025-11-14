import React from 'react';
import { motion } from 'framer-motion';

interface WindowProps {
  onClose: () => void;
}

const Window: React.FC<WindowProps> = ({ onClose }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white rounded-lg shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <div className="flex justify-end p-2">
        <button onClick={onClose} className="w-6 h-6 bg-red-500 rounded-full"></button>
      </div>
    </motion.div>
  );
};

export default Window;