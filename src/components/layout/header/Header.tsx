import '../../../styles/components/layout/header.css';

type HeaderProps = {
  children: React.ReactNode;
};

function Header({ children }: HeaderProps): JSX.Element {
  return <header className="sticky-top">{children}</header>;
}

export default Header;
