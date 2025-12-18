import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🚿</span>
          <span className="logo-text">욕실명가</span>
        </Link>
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            홈
          </Link>
          <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>
            시공사례
          </Link>
          <Link to="/quote" className={location.pathname === '/quote' ? 'active' : ''}>
            견적신청
          </Link>
        </nav>
        <Link to="/quote" className="header-cta">
          무료 상담
        </Link>
      </div>
    </header>
  );
}

export default Header;
