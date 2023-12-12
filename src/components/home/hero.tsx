import { useTheme } from '@/context/theme-provider';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/libs/motion';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

function Hero() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="container flex flex-row items-center justify-center mt-10 md:mt-20 lg:mt-40 w-full z-[20]">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
          <Sparkles className="dark:text-[#b49bff] text-[#916efa] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px]">Welcome to ArcBlock</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 font-heading text-5xl lg:text-6xl font-extrabold leading-snug md:max-w-[600px] w-auto h-auto">
          <span>
            Embracing Change for
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#818cf8,#e0e7ff,#38bdf8,#e879f9,#38bdf8,#e0e7ff,#818cf8)] bg-[length:200%_auto] animate-gradient">
              {' '}
              Web3 World
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm lg:text-lg text-gray-400 mt-3 lg:mt-5 md:max-w-[600px]">
          Introducing the all-new ArcBlock platform - empowering Blockchain, Web3, and AI!
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="welcome-button py-2 text-center text-white cursor-pointer rounded-lg max-w-[200px]">
          Quick Start
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="invisible lg:visible w-full h-full flex justify-center items-center">
        <img
          src={theme === 'light' ? '/images/mainIcons.svg' : '/images/mainIconsDark.svg'}
          alt="work icons"
          className="w-[650px] h-[650px]"
        />
      </motion.div>
    </motion.div>
  );
}

export default Hero;
