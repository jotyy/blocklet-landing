import { backendTechs, frontendTechs, fullStackTechs, otherTechs } from '@/libs/constants';
import { motion } from 'framer-motion';

import SectionText from './section-text';
import TechnologyItem from './technology-item';

function DApp() {
  return (
    <motion.section
      id="techs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 mt-28"
      style={{ transform: 'scale(0.9)' }}>
      <SectionText
        text="Think better with Blocklet"
        title="Decentralized apps are for everyone"
        description="Integrate blockchain and Web3 into your apps with your favorite languages and frameworks."
      />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {frontendTechs.map((feature, index) => (
          <TechnologyItem key={feature.name} name={feature.icon} index={index} />
        ))}
      </div>
      <div className="hidden md:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {backendTechs.map((feature, index) => (
          <TechnologyItem key={feature.name} name={feature.icon} index={index} />
        ))}
      </div>
      <div className="hidden md:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {fullStackTechs.map((feature, index) => (
          <TechnologyItem key={feature.name} name={feature.icon} index={index} />
        ))}
      </div>
      <div className="hidden md:flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {otherTechs.map((image, index) => (
          <TechnologyItem key={image.name} name={image.icon} index={index} />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className=" w-[180%] -left-[40%] top-28 md:w-full md:left-0 h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/videos/cards-video.webm"
          />
        </div>
      </div>
    </motion.section>
  );
}

export default DApp;
