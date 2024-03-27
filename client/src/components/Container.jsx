function Container({ children, className }) {
  return (
    <div className={` ${className} max-w-screen-xl px-2 md:px-5 lg:px-14 mx-auto my-[100px]`}>
      {children}
    </div>
  );
}

export default Container;
