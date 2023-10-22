import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Footer() {
  const router = useRouter();
  return (
    <footer
      className={`text-sm text-textGrey flex items-center justify-center py-10 ${
        router.pathname === '/' && 'border-none'
      }`}
    >
      made with 💙 by
      <Link
        rel='noreferrer'
        target='_blank'
        className='underline'
        href='https://x.com/langf00rd'
      >
        &nbsp;@langf00rd
      </Link>
    </footer>
  );
}
