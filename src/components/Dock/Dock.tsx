import React from 'react';
import { motion } from 'framer-motion';

interface DockProps {
  onIconClick: () => void;
}

const Dock: React.FC<DockProps> = ({ onIconClick }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-end space-x-4 p-2 bg-gray-900 bg-opacity-50 rounded-2xl">
      <motion.img
        src="/finder.png"
        alt="Finder"
        className="h-16 w-16"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9, y: -20 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onClick={onIconClick}
      />
      <motion.img
        src="/terminal.png"
        alt="Terminal"
        className="h-16 w-16"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9, y: -20 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
      <motion.img
        src="/notes.png"
        alt="Notes"
        className="h-16 w-16"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9, y: -20 }}
        transition={{ type: 'spring', stiffness: 300 }}
      />
    </div>
  );
};

export default Dock;