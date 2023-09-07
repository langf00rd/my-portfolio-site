import Link from "next/link";
import MainLayout from "~/layouts/main.layout";
import { motion } from "framer-motion";
import BlogLayout from "~/layouts/blog.layout";
import { BLOG_POSTS } from "~/constants/data.const";
import { useRouter } from "next/router";

export default function Blog(): JSX.Element {
  const router = useRouter();
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
      </BlogLayout>
    </MainLayout>
  );
}
