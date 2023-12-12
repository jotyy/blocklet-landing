import { slideInFromLeft, slideInFromRight } from '@/libs/motion';
import { motion } from 'framer-motion';

import WelcomeBox from './welcome-box';

interface SectionTextProps {
  text?: string;
  title: string;
  description: string;
}

function SectionText({ text, title, description }: SectionTextProps) {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {text && <WelcomeBox text={text} />}
      <motion.div variants={slideInFromLeft(0.5)} className="text-[30px] font-medium mt-[10px] text-center mb-[15px]">
        {title}
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="text-sm text-gray-600 dark:text-gray-400 mb-10 text-center">
        {description}
      </motion.div>
    </div>
  );
}

export default SectionText;
