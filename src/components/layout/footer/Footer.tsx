import '../../../styles/components/layout/footer.css';

function Footer() {
  return (
    <footer className="border-top bg-body-secondary">
      <div className="container">
        <p className="fs-6 text-truncate text-center mb-0 pt-2 pb-2">
          © 2023 FJF.DEV - Built with{' '}
          <i className="bi bi-heart-fill text-danger" /> using Github, Vite,
          TypeScript, React and Bootstrap.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
