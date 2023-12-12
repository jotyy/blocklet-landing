import { slideInFromTop } from '@/libs/motion';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function WelcomeBox({ text }: { text: string }) {
  return (
    <motion.div
      variants={slideInFromTop}
      className="welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
      <Sparkles className="text-[#b49bff] mr-[10px] h-5 w-5" />
      <h1 className="welcome-text text-[13px]">{text}</h1>
    </motion.div>
  );
}

export default WelcomeBox;
