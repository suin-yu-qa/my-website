import { useState } from 'react';
import '../styles/Quote.css';

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  buildingType: string;
  bathroomSize: string;
  workType: string;
  budget: string;
  preferredDate: string;
  message: string;
}

function Quote() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    address: '',
    buildingType: '',
    bathroomSize: '',
    workType: '',
    budget: '',
    preferredDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('견적 신청 데이터:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="quote">
        <div className="success-message">
          <span className="success-icon">✅</span>
          <h2>견적 신청이 완료되었습니다!</h2>
          <p>빠른 시일 내에 연락드리겠습니다.</p>
          <p className="contact-info">
            급한 문의는 📞 010-1234-5678로 연락주세요.
          </p>
          <button onClick={() => setSubmitted(false)} className="btn-primary">
            새 견적 신청
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quote">
      <section className="quote-hero">
        <h1>무료 견적 신청</h1>
        <p>상담부터 견적까지 무료! 부담없이 문의하세요</p>
      </section>

      <div className="quote-container">
        <div className="quote-info">
          <h2>왜 저희를 선택해야 할까요?</h2>
          <ul className="benefits-list">
            <li>✓ 무료 현장 방문 견적</li>
            <li>✓ 투명한 가격 정책</li>
            <li>✓ 20년 경력 전문 시공팀</li>
            <li>✓ 3년 무상 A/S 보장</li>
            <li>✓ 정확한 시공 일정 준수</li>
          </ul>

          <div className="contact-box">
            <h3>빠른 상담</h3>
            <p>📞 010-1234-5678</p>
            <p>평일 09:00 - 18:00</p>
          </div>
        </div>

        <form className="quote-form" onSubmit={handleSubmit}>
          <h2>견적 신청서</h2>

          <div className="form-section">
            <h3>기본 정보</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">이름 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="홍길동"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">연락처 *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="010-1234-5678"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">시공 주소 *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="서울시 강남구 테헤란로 123"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>시공 정보</h3>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="buildingType">건물 유형 *</label>
                <select
                  id="buildingType"
                  name="buildingType"
                  value={formData.buildingType}
                  onChange={handleChange}
                  required
                >
                  <option value="">선택해주세요</option>
                  <option value="apartment">아파트</option>
                  <option value="villa">빌라/다세대</option>
                  <option value="house">단독주택</option>
                  <option value="officetel">오피스텔</option>
                  <option value="commercial">상업시설</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="bathroomSize">욕실 크기</label>
                <select
                  id="bathroomSize"
                  name="bathroomSize"
                  value={formData.bathroomSize}
                  onChange={handleChange}
                >
                  <option value="">선택해주세요</option>
                  <option value="small">소형 (2평 이하)</option>
                  <option value="medium">중형 (2-3평)</option>
                  <option value="large">대형 (3평 이상)</option>
                  <option value="unknown">잘 모르겠음</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="workType">시공 유형 *</label>
                <select
                  id="workType"
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  required
                >
                  <option value="">선택해주세요</option>
                  <option value="full">전체 리모델링</option>
                  <option value="partial">부분 시공</option>
                  <option value="waterproof">방수 공사</option>
                  <option value="tile">타일 교체</option>
                  <option value="fixture">설비 교체</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">예산 범위</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">선택해주세요</option>
                  <option value="under200">200만원 이하</option>
                  <option value="200-400">200-400만원</option>
                  <option value="400-600">400-600만원</option>
                  <option value="over600">600만원 이상</option>
                  <option value="consult">상담 후 결정</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="preferredDate">희망 시공일</label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>추가 요청사항</h3>
            <div className="form-group">
              <label htmlFor="message">요청사항</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="원하시는 스타일, 특별한 요청사항 등을 자유롭게 적어주세요."
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            견적 신청하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Quote;
