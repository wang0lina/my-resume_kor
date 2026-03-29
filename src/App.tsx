import "./App.css";

export default function App() {
  const experiences = [
    {
      company: "두잇 (DoEat)",
      role: "HR Assistant · HR팀",
      description:
        "배달앱 '두잇'을 개발/운영하는 IT/F&B 스타트업 (시리즈 A)",
      period: "2025.07 – 2025.10",
      sections: [
        {
          title: "Recruitment",
          items: [
            "매장 인력 채용 운영 및 면접 일정 조율",
            "다이렉트 소싱 및 후보자 풀 관리",
            "채용 공고 리뉴얼 및 제작",
            "온보딩 프로세스 운영 및 교육",
          ],
        },
        {
          title: "HR Operations",
          items: [
            "급여 및 인센티브 지급",
            "근태 및 계약 관리",
            "노무 이슈 대응",
          ],
        },
      ],
    },
    {
      company: "코리아 포트원 (Korea Portone)",
      role: "HR Intern · HR팀",
      description:
        "B2B 결제 SaaS를 개발하는 IT 스타트업(시리즈B)",
      period: "2024.09 – 2025.02",
      sections: [
        {
          title: "Recruitment",
          items: [
            "전사 채용 운영",
            "직무기술서 개편",
            "다이렉트 소싱",
            "온보딩 가이드북 제작",
          ],
        },
        {
          title: "HR Operations",
          items: [
            "입퇴사 프로세스 운영",
            "평가 지원",
            "인턴 프로그램 기획",
          ],
        },
      ],
    },
  ];

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">RESUME</p>

          <h1>
            왕리나 <span>(Lina Wang)</span>
          </h1>

          <p className="intro">
            채용과 인사운영 실무를 기반으로, 조직이 안정적으로 일할 수 있는 구조를
            만들고 현장과 본사를 유연하게 연결하는 HR 인재입니다.
          </p>

          <div className="info-grid">
            <div className="info-card">
              <div className="info-label">Phone</div>
              <div className="info-value">010-5915-5982</div>
            </div>

            <div className="info-card">
              <div className="info-label">Birth</div>
              <div className="info-value">2000.03.03</div>
            </div>

            <div className="info-card wide">
              <div className="info-label">Address</div>
              <div className="info-value">
                경기도 과천시 부림1길 42-18
              </div>
            </div>

            <div className="info-card wide">
              <div className="info-label">Email</div>
              <div className="info-value">wang.lina000303</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="photo-card">
            <img
              src="/profile.jpg"
              alt="왕리나 프로필"
              className="profile-photo"
            />
          </div>
        </div>
      </section>

      <section className="section-card">
        <h2>Work Experience</h2>

        {experiences.map((job) => (
          <div key={job.company} className="experience-card">
            <h3>{job.company}</h3>
            <p className="role">{job.role}</p>
            <p className="desc">{job.description}</p>
            <p className="period">{job.period}</p>

            {job.sections.map((sec) => (
              <div key={sec.title}>
                <strong>{sec.title}</strong>
                <ul>
                  {sec.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>

      <section className="section-card">
        <h2>Education & Credentials</h2>
        <ul>
          <li>연세대학교(본교) 정치외교학과 / 언론홍보영상학부</li>
          <li>HRM 전문가 (한국공인노무사회)</li>
          <li>OPIc AL (ACTFL)</li>
        </ul>
      </section>

      <section className="section-card">
        <h2>Projects</h2>
        <a
          href="https://portone-onboarding.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Portone Onboarding Guide
        </a>
      </section>
    </div>
  );
}