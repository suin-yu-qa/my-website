import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>🚿 욕실명가</h3>
          <p>20년 경력의 화장실 전문 시공 업체</p>
          <p>고객 만족을 최우선으로 생각합니다.</p>
        </div>
        <div className="footer-contact">
          <h4>연락처</h4>
          <p>📞 010-1234-5678</p>
          <p>📧 bathroom@example.com</p>
          <p>📍 서울시 강남구 테헤란로 123</p>
        </div>
        <div className="footer-hours">
          <h4>영업시간</h4>
          <p>평일: 09:00 - 18:00</p>
          <p>토요일: 09:00 - 13:00</p>
          <p>일요일/공휴일: 휴무</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 욕실명가. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
