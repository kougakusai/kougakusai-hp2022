import clsx from 'clsx';
import { ComponentPropsWithoutRef, useEffect } from 'react';

/*  https://publish.twitter.com/?dnt=1&lang=ja&query=https%3A%2F%2Ftwitter.com%2Fkougakufes&widget=Timeline
    https://dev.to/heymarkkop/embed-twitter-widget-on-reactjs-1768   */
export const TwitterTimeline = ({
  className,
  ...restProps
}: ComponentPropsWithoutRef<'section'>) => {
  useEffect(() => {
    const twitterScript = window.document.createElement('script');
    twitterScript.src = 'https://platform.twitter.com/widgets.js';
    window.document
      .getElementsByClassName('twitter-timeline')[0]
      .before(twitterScript);
  }, []);

  return (
    <section
      className={clsx('flex flex-auto justify-center', className)}
      {...restProps}
    >
      <div className="m-4 flex h-[37rem] w-[37.5rem] min-w-[20rem] shrink overflow-auto rounded-xl">
        <a
          href="https://twitter.com/kougakufes?ref_src=twsrc%5Etfw"
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="twitter-timeline"
          target="_blank"
          data-lang="ja"
          data-dnt="true"
          rel="noopener noreferrer"
        >
          Tweets by kougakufes
        </a>
      </div>
    </section>
  );
};
