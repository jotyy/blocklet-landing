import useMousePosition from '@/hooks/use-mouse-position';
import React, { useCallback, useEffect, useRef, useState } from 'react';

type SpotlightProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Spotlight({ children, className = '' }: SpotlightProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = useCallback(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        boxes.forEach((box) => {
          const boxX = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
          box.style.setProperty('--mouse-x', `${boxX}px`);
          box.style.setProperty('--mouse-y', `${boxY}px`);
        });
      }
    }
  }, [boxes, mousePosition]);

  useEffect(() => {
    if (containerRef.current) {
      setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement));
    }
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener('resize', initContainer);

    return () => {
      window.removeEventListener('resize', initContainer);
    };
  }, [setBoxes]);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition, onMouseMove]);

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}

type SpotlightCardProps = {
  title: string;
  imgSrc: string;
  desc: string;
  className?: string;
};

export function SpotlightCard({ title, imgSrc, desc, className = '' }: SpotlightCardProps) {
  return (
    <div
      className={`relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden ${className}`}>
      <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
        <div
          className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
          aria-hidden="true">
          <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
        </div>
        <div className="flex flex-col h-full items-center text-center">
          <div className="relative inline-flex">
            <div
              className="w-[40%] h-[40%] absolute inset-0 m-auto -translate-y-[10%] blur-3xl -z-10 rounded-full bg-indigo-600"
              aria-hidden="true"
            />
            <img className="inline-flex w-[200px] h-[200px]" src={imgSrc} alt={title} />
          </div>
          <div className="grow mb-5">
            <h2 className="text-xl text-slate-200 font-bold mb-1">{title}</h2>
            <p className="text-sm text-slate-500">{desc}</p>
          </div>
          <a
            className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
            href="#0">
            <svg className="fill-slate-500 mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="14">
              <path d="M12.82 8.116A.5.5 0 0 0 12 8.5V10h-.185a3 3 0 0 1-2.258-1.025l-.4-.457-1.328 1.519.223.255A5 5 0 0 0 11.815 12H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM12.82.116A.5.5 0 0 0 12 .5V2h-.185a5 5 0 0 0-3.763 1.708L3.443 8.975A3 3 0 0 1 1.185 10H1a1 1 0 1 0 0 2h.185a5 5 0 0 0 3.763-1.708l4.609-5.267A3 3 0 0 1 11.815 4H12v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5ZM1 4h.185a3 3 0 0 1 2.258 1.025l.4.457 1.328-1.52-.223-.254A5 5 0 0 0 1.185 2H1a1 1 0 0 0 0 2Z" />
            </svg>
            <span>Connect</span>
          </a>
        </div>
      </div>
    </div>
  );
}
