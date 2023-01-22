import { ContentHeader } from '../header';

type ContentWrapperProps = {
  children: React.ReactNode;
};

function ContentWrapper({ children }: ContentWrapperProps): JSX.Element {
  return (
    <>
      <section className="container mt-3 mb-3">
        <ContentHeader />
      </section>
      <section className="container mb-3">{children}</section>
    </>
  );
}

export default ContentWrapper;
