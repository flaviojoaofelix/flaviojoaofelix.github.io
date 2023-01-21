type MainProps = {
  children: React.ReactNode;
};

function Main({ children }: MainProps) {
  return (
    // <div className="">
    <main className="d-flex flex-column justify-content-center align-items-center overflow-auto">
      {children}
    </main>
    // </div>
  );
}

export default Main;
