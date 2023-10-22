import { motion } from 'framer-motion';
import Link from 'next/link';
import { IBlogPost } from '~/interface';

export default function BlogPost(props: {
  data: IBlogPost;
  _index: number;
}): JSX.Element {
  return (
    <motion.li
      initial={{ opacity: 0, x: -3 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: props._index }}
      className='w-full'
    >
      <Link href={props.data.page} className='py-2 w-full flex items-center gap-2'>
        <p className='hidden md:block'>{props.data.date}</p>
        <p className='text-black'>{props.data.title}</p>
      </Link>
    </motion.li>
  );
}
