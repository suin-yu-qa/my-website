import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const features = [
    { icon: '🛁', title: '욕실 전체 리모델링', desc: '노후된 욕실을 완전히 새롭게' },
    { icon: '🚿', title: '부분 시공', desc: '타일, 세면대, 변기 등 부분 교체' },
    { icon: '💧', title: '방수 공사', desc: '완벽한 방수로 누수 걱정 없이' },
    { icon: '✨', title: '프리미엄 마감', desc: '고급 자재와 섬세한 마감' },
  ];

  const stats = [
    { number: '500+', label: '시공 완료' },
    { number: '20년', label: '업력' },
    { number: '98%', label: '고객 만족도' },
    { number: '3년', label: '무상 A/S' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            화장실, <span className="highlight">새롭게</span> 시작하세요
          </h1>
          <p>
            20년 경력의 전문가가 만드는 프리미엄 욕실 시공<br />
            견적부터 시공까지 원스톱 서비스를 제공합니다
          </p>
          <div className="hero-buttons">
            <Link to="/quote" className="btn-primary">무료 견적 받기</Link>
            <Link to="/portfolio" className="btn-secondary">시공 사례 보기</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <span>🛁</span>
            <p>깨끗하고 모던한 욕실</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>전문 서비스</h2>
        <p className="section-subtitle">다양한 욕실 시공 서비스를 제공합니다</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <h2>시공 과정</h2>
        <p className="section-subtitle">간편하고 투명한 시공 프로세스</p>
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">1</div>
            <h3>상담 및 견적</h3>
            <p>현장 방문 후 정확한 견적 제공</p>
          </div>
          <div className="process-step">
            <div className="step-number">2</div>
            <h3>디자인 선택</h3>
            <p>원하는 스타일과 자재 선택</p>
          </div>
          <div className="process-step">
            <div className="step-number">3</div>
            <h3>철거 및 시공</h3>
            <p>전문 기술진의 깔끔한 시공</p>
          </div>
          <div className="process-step">
            <div className="step-number">4</div>
            <h3>완료 및 A/S</h3>
            <p>꼼꼼한 마무리와 3년 무상 A/S</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>지금 바로 상담받으세요</h2>
        <p>무료 현장 방문 견적 서비스를 제공합니다</p>
        <Link to="/quote" className="btn-primary large">무료 견적 신청</Link>
      </section>
    </div>
  );
}

export default Home;
