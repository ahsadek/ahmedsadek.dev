import clsx from 'clsx';

const Greeting = () => {
  const className = clsx(
    'bg-gradient-to-l from-stone-600 to-stone-500 dark:to-stone-400',
    'mb-6 xl:mb-8 bg-clip-text text-4xl font-extrabold leading-[40px] md:leading-[60px] tracking-tight text-transparent md:text-[2.70rem] xl:text-6xl xl:leading-[86px]'
  );

  return (
    <div className={className}>
      <span className="font-bold">Hello, welcome to my portfolio / blog!</span>
    </div>
  );
};

export default Greeting;
