import "./App.css";

export default function App() {
  const experiences = [
    {
      company: "두잇 (DoEat)",
      role: "HR Assistant · HR팀",
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
          <p className="eyebrow">HR RESUME WEBSITE</p>
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
              <div className="info-value">경기도 과천시 부림1길 42-18</div>
            </div>
            <div className="info-card wide">
              <div className="info-label">Email</div>
              <div className="info-value">wang.lina000303</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="photo-card">
            <img src="/profile.jpg" alt="왕리나 프로필" className="profile-photo" />
          </div>
        </div>
      </section>

      <section className="section-card">
        <div className="section-head">
          <div>
            <p className="section-kicker">Career</p>
            <h2>Work Experience</h2>
          </div>
          <div className="section-badge">Recruitment · HR Operations</div>
        </div>

        <div className="experience-list">
          {experiences.map((job) => (
            <article key={job.company} className="experience-card">
              <div className="experience-top">
                <div>
                  <h3>{job.company}</h3>
                  <p className="role">{job.role}</p>
                </div>
                <p className="period">{job.period}</p>
              </div>

              <div className="section-grid">
                {job.sections.map((sec) => (
                  <div key={sec.title} className="sub-card">
                    <h4>{sec.title}</h4>
                    <ul>
                      {sec.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-head simple">
          <h2>Core Strengths</h2>
        </div>
        <div className="strengths">
          {[
            "Recruitment",
            "Direct Sourcing",
            "HR Operations",
            "Onboarding",
            "Compensation",
            "Documentation",
            "Communication",
            "PPT",
            "Excel",
            "AI Tools",
          ].map((item) => (
            <div key={item} className="strength-pill">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="two-column">
        <div className="section-card">
          <div className="section-head simple">
            <h2>Education & Credentials</h2>
          </div>
          <div className="edu-list">
            <div className="edu-card">
              <div className="edu-top">
                <strong>연세대학교(본교)</strong>
                <span>2020.03 – 2026.02</span>
              </div>
              <p>정치외교학과 / 언론홍보영상학부</p>
            </div>

            <div className="edu-card">
              <div className="edu-top">
                <strong>HRM 전문가</strong>
                <span>2024.08</span>
              </div>
              <p>발행기관: 한국공인노무사회</p>
            </div>

            <div className="edu-card">
              <div className="edu-top">
                <strong>OPIc AL</strong>
                <span>2026.02</span>
              </div>
              <p>발행기관: ACTFL</p>
            </div>
          </div>
        </div>

        <div className="section-card">
          <div className="section-head simple">
            <h2>Projects</h2>
          </div>
          <div className="project-card">
            <div>
              <h3>Portone Onboarding Guide</h3>
              <p>
                신규 입사자의 온보딩 경험을 돕기 위해 설계한 웹페이지 프로젝트입니다.
              </p>
            </div>
            <a
              href="https://portone-onboarding.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Website
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}