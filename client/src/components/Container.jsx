function Container({ children, className }) {
  return (
    <main className={` ${className} max-w-screen-xl px-2 md:px-5 lg:px-14 mx-auto my-20`}>
      {children}
    </main>
  );
}

export default Container;
