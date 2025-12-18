import { useState } from 'react';
import '../styles/Portfolio.css';

interface Project {
  id: number;
  title: string;
  location: string;
  date: string;
  description: string;
  beforeDesc: string;
  afterDesc: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: '강남구 아파트 욕실 리모델링',
    location: '서울 강남구',
    date: '2024.11',
    description: '30년된 노후 욕실을 모던한 스타일로 전면 리모델링',
    beforeDesc: '오래된 타일, 누수 발생, 곰팡이 문제',
    afterDesc: '대리석 패턴 타일, 레인샤워, 욕조 설치',
  },
  {
    id: 2,
    title: '송파구 빌라 욕실 시공',
    location: '서울 송파구',
    date: '2024.10',
    description: '좁은 공간을 효율적으로 활용한 욕실 리모델링',
    beforeDesc: '좁은 공간, 어두운 조명, 낡은 설비',
    afterDesc: '공간 활용 극대화, LED 조명, 최신 설비',
  },
  {
    id: 3,
    title: '분당 주택 프리미엄 욕실',
    location: '경기 성남시',
    date: '2024.09',
    description: '호텔급 프리미엄 욕실로 완벽 변신',
    beforeDesc: '일반적인 욕실, 단조로운 디자인',
    afterDesc: '대형 월풀욕조, 이중 세면대, 고급 마감',
  },
  {
    id: 4,
    title: '마포구 오피스텔 욕실',
    location: '서울 마포구',
    date: '2024.08',
    description: '원룸 욕실 공간 최적화 시공',
    beforeDesc: '곰팡이, 환기 불량, 낡은 인테리어',
    afterDesc: '건식 욕실, 환풍 시스템, 모던 인테리어',
  },
  {
    id: 5,
    title: '일산 아파트 화장실 리모델링',
    location: '경기 고양시',
    date: '2024.07',
    description: '가족 친화적인 안전한 욕실 시공',
    beforeDesc: '미끄러운 바닥, 안전 문제',
    afterDesc: '미끄럼 방지, 안전 손잡이, 가족 친화적 설계',
  },
  {
    id: 6,
    title: '용산구 주상복합 욕실',
    location: '서울 용산구',
    date: '2024.06',
    description: '럭셔리 펜트하우스 스타일 욕실',
    beforeDesc: '평범한 욕실, 좁아 보이는 공간',
    afterDesc: '유리 파티션, 간접 조명, 넓은 개방감',
  },
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showBefore, setShowBefore] = useState<{ [key: number]: boolean }>({});

  const toggleBeforeAfter = (id: number) => {
    setShowBefore(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="portfolio">
      <section className="portfolio-hero">
        <h1>시공 사례</h1>
        <p>Before & After로 확인하는 놀라운 변화</p>
      </section>

      <section className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <div
                className={`project-image ${showBefore[project.id] ? 'before' : 'after'}`}
                onClick={() => toggleBeforeAfter(project.id)}
              >
                <div className="image-placeholder">
                  <span>{showBefore[project.id] ? '😢' : '✨'}</span>
                  <p>{showBefore[project.id] ? 'BEFORE' : 'AFTER'}</p>
                </div>
                <div className="image-label">
                  {showBefore[project.id] ? 'Before' : 'After'}
                </div>
              </div>
              <button
                className="toggle-btn"
                onClick={() => toggleBeforeAfter(project.id)}
              >
                {showBefore[project.id] ? 'After 보기' : 'Before 보기'}
              </button>
            </div>
            <div className="project-info">
              <div className="project-meta">
                <span className="location">📍 {project.location}</span>
                <span className="date">📅 {project.date}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-details">
                <div className="detail before-detail">
                  <strong>Before:</strong> {project.beforeDesc}
                </div>
                <div className="detail after-detail">
                  <strong>After:</strong> {project.afterDesc}
                </div>
              </div>
              <button
                className="view-detail-btn"
                onClick={() => setSelectedProject(project)}
              >
                상세 보기
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-images">
              <div className="modal-image before">
                <div className="image-placeholder large">
                  <span>😢</span>
                  <p>BEFORE</p>
                </div>
                <span className="label">시공 전</span>
              </div>
              <div className="modal-arrow">→</div>
              <div className="modal-image after">
                <div className="image-placeholder large">
                  <span>✨</span>
                  <p>AFTER</p>
                </div>
                <span className="label">시공 후</span>
              </div>
            </div>
            <div className="modal-content">
              <h2>{selectedProject.title}</h2>
              <p className="modal-meta">
                📍 {selectedProject.location} | 📅 {selectedProject.date}
              </p>
              <p className="modal-desc">{selectedProject.description}</p>
              <div className="modal-details">
                <div className="modal-detail">
                  <h4>🔴 시공 전 문제점</h4>
                  <p>{selectedProject.beforeDesc}</p>
                </div>
                <div className="modal-detail">
                  <h4>🟢 시공 후 개선사항</h4>
                  <p>{selectedProject.afterDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
