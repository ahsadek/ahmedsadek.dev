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
    <div className="">
      <ul id="bios" className="hidden">
        <li>
          I am a part time <b className="font-medium">Engineering student</b>.
        </li>
        <li>
          I currently live in <b className="font-medium">Montreal, Canada</b>.
        </li>
        <li>
          I mostly work with <b className="font-medium">Javascript / Typescript</b>.
        </li>
        <li>
          I love martial arts and I train <b className="font-medium">Muay Thai</b>.
        </li>
        <li>
          I was born in <b className="font-medium">Cairo, Egypt</b>.
        </li>
        <li>
          I am a mid-level <b className="font-medium">Web Developer</b> with a focus on{' '}
          <b className="font-medium">AI</b>.
        </li>
        <li>
          I'm launching my first AI <b className="font-medium">startup</b> soon, stay tuned ;)
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
