import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import useScroll from '~/hooks/useScroll.hook';

export default function ScrollButtons(): JSX.Element {
  const { scrollPosition, scrollDown, scrollUp } = useScroll();
  return (
    <>
      {scrollPosition && scrollPosition.y > 100 && (
        <div className='fixed bottom-[30px] right-[30px] grid gap-3'>
          <FAB onClick={scrollUp}>
            <FiArrowUp />
          </FAB>
          <FAB onClick={scrollDown}>
            <FiArrowDown />
          </FAB>
        </div>
      )}
    </>
  );
}

export function FAB(props: { children: ReactNode; onClick?: () => void }): JSX.Element {
  return (
    <motion.div
      onClick={props.onClick}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className='shadow-md hidden hover:shadow-none active:scale-[0.8] border rounded-full w-[45px] h-[45px] md:flex items-center justify-center cursor-pointer hover:text-brand z-10 bg-white'
    >
      {props.children}
    </motion.div>
  );
}
