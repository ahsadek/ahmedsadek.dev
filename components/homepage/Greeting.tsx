import clsx from 'clsx';

const Greeting = () => {
  const className = clsx(
    'bg-gradient-to-l from-stone-600 to-stone-500 dark:to-stone-400',
    'mb-8 bg-clip-text text-[2.75rem] font-extrabold leading-[55px] tracking-tight text-transparent md:text-6xl md:leading-[86px]'
  );

  return (
    <div className={className}>
      <span className="font-bold">Hello, welcome to my portfolio / blog!</span>
    </div>
  );
};

export default Greeting;
