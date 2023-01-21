import { Header, NavBar, Main, Footer, ContentWrapper } from '..';
import { ContactModal } from '../../contact';

type LayoutWrapperProps = {
  children: React.ReactNode;
};

function LayoutWrapper({ children }: LayoutWrapperProps): JSX.Element {
  return (
    <>
      <Header>
        <NavBar />
      </Header>
      <Main>
        <ContentWrapper>{children}</ContentWrapper>
      </Main>
      <Footer />
      <ContactModal />
    </>
  );
}

export default LayoutWrapper;
