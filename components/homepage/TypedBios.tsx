import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/ui/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I am studying <b className="font-medium">Robotics Engineering</b> part time.
        </li>
        <li>
          I currently live in <b className="font-medium">Montreal, Canada</b>.
        </li>
        <li>
          I was born in <b className="font-medium">Cairo, Egypt</b>.
        </li>
        <li>
          The first programming language I learned was <b className="font-medium">C++</b>.
        </li>
        <li>
          I'm very passionate about <b className="font-medium">Web Development</b>.
        </li>
        <li>
          I love to go out on <b className="font-medium">hikes</b> and touch some grass.
        </li>
        <li>
          I work mostly with <b className="font-medium">Javascript/Typescript</b> technologies.
        </li>
        <li>
          I'm a dog-person <Twemoji emoji="dog" />.
        </li>
        <li>
          I'm a sporty-guy. I love
          <span className="ml-1">
            <Twemoji emoji="tennis" />, <Twemoji emoji="soccer-ball" />
          </span>
          .
        </li>
        <li>
          I love listening <Twemoji emoji="musical-keyboard" /> and rap music.
        </li>
        <li>
          I love playing video game <Twemoji emoji="video-game" />, LoL is my favorite one.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
