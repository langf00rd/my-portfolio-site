import { useRouter } from 'next/router';
import { BsArrowLeft } from 'react-icons/bs';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className='flex items-center underline gap-2'
      onClick={() => {
        router.pathname === '/blog' ? router.push('/') : router.push('/blog');
      }}
    >
      <BsArrowLeft />
      back
    </button>
  );
}
