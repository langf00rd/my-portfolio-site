import Meta from '~/components/Meta';

export default function CV(): JSX.Element {
  return (
    <main className='h-screen overflow-scroll w-screen'>
      <Meta title='my cv' />
      <iframe className='h-full w-full' src='/assets/cv.pdf'></iframe>
    </main>
  );
}
