import { ReactNode, useEffect } from 'react';
import BackButton from '~/components/BackButton';
import Meta from '~/components/Meta';
import ScrollButtons from '~/components/ScrollButtons';

export default function BlogLayout(props: {
  children: ReactNode;
  title: string;
  subtitle?: string;
}): JSX.Element {
  return (
    <>
      <ScrollButtons />
      <Meta title={props.title} description={props.subtitle} />
      <main className='max-w-2xl mx-auto space-y-5 p-5'>
        <BackButton />
        <article className='space-y-4'>{props.children}</article>
      </main>
    </>
  );
}
