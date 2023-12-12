import { slideInFromTop } from '@/libs/motion';
import { motion } from 'framer-motion';

function Encryption() {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div variants={slideInFromTop} className="text-[40px] font-medium text-center text-gray-200">
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> & </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <img
            src="/images/LockTop.png"
            alt="Lock top"
            className="w-[50px] h-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <img src="/images/LockMain.png" alt="Lock Main" className="w-[70px] h-[70px] z-10" />
        </div>

        <div className="welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
          <h1 className="welcome-text text-[12px]">Encryption</h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-sm font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/videos/encryption.webm/"
        />
      </div>
    </div>
  );
}

export default Encryption;
