import Link from 'next/link';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '~/constants/content';
import BackButton from '~/components/BackButton';
import Meta from '~/components/Meta';

export default function Blog(): JSX.Element {
  return (
    <>
      <Meta title='my blog' />
      <main className='max-w-2xl mx-auto space-y-5 p-5'>
        <BackButton />
        <ul>
          {BLOG_POSTS.reverse().map((post, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -3 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index / 10 }}
              className='border-b border-b-[#f2f2f2] py-3'
            >
              <Link className='md:flex gap-3' href={post.page}>
                <p>{post.date}</p>
                <p className='text-black'>{post.title}</p>
              </Link>
            </motion.div>
          ))}
        </ul>
      </main>
    </>
  );
}
