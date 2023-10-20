import Link from "next/link";
import MainLayout from "~/layouts/main.layout";
import { motion } from "framer-motion";
import BlogLayout from "~/layouts/blog.layout";
import { BLOG_POSTS } from "~/constants/siteDate.const";

export default function Blog(): JSX.Element {
  return (
    <MainLayout metaTitle="my blog">
      <BlogLayout title="my blog">
        <ul>
          {BLOG_POSTS.map((post, index: number) => (
            <motion.article
              initial={{ opacity: 0, x: -3 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: post.animationDuration }}
              key={index}
              className="border-b border-b-[#f2f2f2]"
            >
              <Link className="md:flex gap-3" href={post.page}>
                <p>{post.date}</p>
                <p className="text-black">{post.title}</p>
              </Link>
            </motion.article>
          ))}
        </ul>
      </BlogLayout>
    </MainLayout>
  );
}
