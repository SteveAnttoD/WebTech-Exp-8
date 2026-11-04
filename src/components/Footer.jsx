import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <Link className="brand footer-brand" to="/">
            EduPortal
          </Link>
          <p>Keep learning. Keep growing.</p>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} EduPortal
        </p>
      </div>
    </footer>
  );
}
