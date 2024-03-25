function Container({ children, className }) {
  return (
    <main className={` ${className} max-w-screen-xl px-5 lg:px-14 mx-auto`}>
      {children}
    </main>
  );
}

export default Container;
