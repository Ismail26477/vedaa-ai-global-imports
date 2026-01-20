import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919011675422?text=Hello%20Global%20Imports!%20I%20am%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <div className="relative">
        {/* Ping effect */}
        <motion.div 
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
        
        {/* Button */}
        <motion.div 
          className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </motion.div>

        {/* Tooltip */}
        <motion.div 
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-foreground text-white text-sm font-medium rounded-lg whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, x: 10 }}
          whileHover={{ opacity: 1, x: 0 }}
        >
          Chat with us on WhatsApp
          <div className="absolute right-0 top-1/2 translate-x-1 -translate-y-1/2 w-2 h-2 bg-foreground rotate-45" />
        </motion.div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
