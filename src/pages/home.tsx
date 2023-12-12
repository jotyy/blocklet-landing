import Connects from '@/components/home/connects';
import DApp from '@/components/home/dapp';
import Hero from '@/components/home/hero';
import StarsCanvas from '@/components/star-background';

function HomePage() {
  return (
    <>
      <Hero />
      <DApp />
      <Connects />
      <StarsCanvas />
    </>
  );
}

export default HomePage;
