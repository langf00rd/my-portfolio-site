import Link from "next/link";
import MainLayout from "~/layouts/main.layout";
import { motion } from "framer-motion";
import BlogLayout from "~/layouts/blog.layout";
import { BLOG_POSTS } from "~/constants/data.const";

export default function Blog(): JSX.Element {
  return (
    <MainLayout metaTitle="my blog">
      <BlogLayout title="my blog">
        <ul>
          {BLOG_POSTS.map((post, index: number) => (
            <motion.li
              initial={{ opacity: 0, x: -3 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: post.animationDuration }}
              key={index}
              className="border-b border-b-[#f2f2f2]"
            >
              <Link href={post.page}>
                <p>{post.date}</p>
                <p className="text-black">{post.title}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
        {/* <ul className="w-max">
          {BLOG_POSTS.map((post, index: number) => (
            <motion.li
              initial={{ opacity: 0, x: -3 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: post.animationDuration }}
              className="w-full"
              key={index}
            >
              <Link
                href={post.page}
                className="border-b border-b-[#f2f2f2] py-2 w-full block flex items-center gap-2"
              >
                <p>{post.date}</p>
                <p className="text-black">{post.title}</p>
              </Link>
            </motion.li>
          ))}
        </ul> */}
      </BlogLayout>
    </MainLayout>
  );
}
