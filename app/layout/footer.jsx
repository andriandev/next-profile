function Footer() {
  return (
    <footer className="bg-light">
      <p className="text-center text-muted my-3">
        Copyright ©{new Date().getFullYear() + ' '}
        <a
          href="https://andriandev.my.id"
          target="_blank"
          className="text-muted text-decoration-none"
        >
          AndrianDev
        </a>
      </p>
    </footer>
  );
}

export default Footer;
