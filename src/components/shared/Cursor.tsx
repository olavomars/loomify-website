import { motion } from 'framer-motion';
import useMousePosition from '@/utils/useMousePosition';

export default function Cursor() {
  const { x, y } = useMousePosition();
  const size = 30;

  return (
    <div className='max-lg:hidden absolute w-full h-full pointer-events-none '>
      <motion.div
        className={`bg-primary rounded-full fixed w-6 h-6`}
        animate={{ opacity: 1, scale: 1, x: x - size / 2, y: y - size / 2 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      ></motion.div>
    </div>
  );
}
