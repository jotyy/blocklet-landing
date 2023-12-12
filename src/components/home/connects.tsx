import { slideInFromLeft } from '@/libs/motion';
import { motion } from 'framer-motion';

import Spotlight, { SpotlightCard } from '../spotlight';
import SectionText from './section-text';

const connections = [
  {
    title: 'Github',
    imgSrc: '/images/card-01.png',
    desc: 'Quickly apply filters to refine your issues lists and create custom views.',
  },
  {
    title: 'Slack',
    imgSrc: '/images/card-02.png',
    desc: 'Quickly apply filters to refine your issues lists and create custom views.',
  },
  {
    title: 'Discord',
    imgSrc: '/images/card-03.png',
    desc: 'Quickly apply filters to refine your issues lists and create custom views.',
  },
];

function Connects() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="container flex flex-col items-center justify-center px-8 md:px-16 lg:px-20 mt-20 w-full z-[20]">
      <SectionText title="Connect with ArcBlock" description="Simple and secure access to blockchain and Web3." />

      <Spotlight className="mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none group">
        {connections.map((item) => (
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="w-full h-full flex flex-col items-center justify-center"
            key={item.title}>
            <SpotlightCard title={item.title} imgSrc={item.imgSrc} desc={item.desc} />
          </motion.div>
        ))}
      </Spotlight>
    </motion.section>
  );
}

export default Connects;
