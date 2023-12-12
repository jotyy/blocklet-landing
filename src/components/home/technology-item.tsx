import { motion } from 'framer-motion';

interface Props {
  name: string;
  index: number;
}

function TechnologyItem({ name, index }: Props) {
  const animationDelay = 0.3;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      custom={index}
      transition={{ delay: index * animationDelay }}>
      <i className={`devicon-${name} colored text-[80px]`} />
    </motion.div>
  );
}

export default TechnologyItem;
