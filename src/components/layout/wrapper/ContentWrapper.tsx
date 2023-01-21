type ContentWrapperProps = {
  children: React.ReactNode;
};

function ContentWrapper({ children }: ContentWrapperProps): JSX.Element {
  return (
    <>
      <section className="container mt-3 mb-3">
        <h2 className="display-2 animate__animated animate__backInDown">
          Flávio João Félix
        </h2>
        <h3 className="display-6 animate__animated animate__fadeIn">
          Full Stack Web Developer
        </h3>
      </section>
      <section className="container mb-3">{children}</section>
    </>
  );
}

export default ContentWrapper;
