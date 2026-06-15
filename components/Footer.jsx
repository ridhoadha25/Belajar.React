function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {currentYear} Todo Master. Semua hak dilindungi.
        </p>
        <p>
          Dibuat dengan <i className="fas fa-heart"></i> oleh Tim Developer
        </p>
      </div>
    </footer>
  );
}

export default Footer;
