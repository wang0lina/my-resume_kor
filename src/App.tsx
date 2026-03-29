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
      description: "B2B 결제 SaaS를 개발하는 IT 스타트업 (시리즈 B)",
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

  const strengths = [
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
  ];

  const education = [
    {
      title: "연세대학교(본교)",
      meta: "2020.03 – 2026.02",
      desc: "정치외교학과 / 언론홍보영상학부 · 학점 3.87 / 4.3",
    },
    {
      title: "HRM 전문가",
      meta: "2024.08",
      desc: "발행기관: 한국공인노무사회",
    },
    {
      title: "OPIc AL",
      meta: "2026.02",
      desc: "발행기관: ACTFL",
    },
  ];

  return (
    <div className="page-shell">
      <main className="page">
        <section className="hero">
          <div className="hero-left">
            <p className="eyebrow">RESUME</p>
            <h1>
              왕리나 <span>(Lina Wang)</span>
            </h1>
            <p className="intro">
              채용, 보상, 인사운영 전반을 경험하며 실무의 정확도와 실행력을 쌓아온 HR 인재입니다. 커뮤니케이션 역량, 운영
프로세스를 정돈하는 기획력, 그리고 조직이 안정적으로 성과를 낼 수 있도록 지원하는 책임감을 바탕으로 신뢰받는 HR 담당자로 성장
하고자 합니다.
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
              <img
                src="/profile.jpg"
                alt="왕리나 프로필"
                className="profile-photo"
              />
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
                  <div className="experience-meta">
                    <h3>{job.company}</h3>
                    <p className="role">{job.role}</p>
                    <p className="company-desc">{job.description}</p>
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
            <span className="small-chip">HR</span>
          </div>

          <div className="strengths">
            {strengths.map((item) => (
              <div key={item} className="strength-pill">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="two-column">
          <section className="section-card">
            <div className="section-head simple">
              <h2>Education & Credentials</h2>
            </div>

            <div className="edu-list">
              {education.map((item) => (
                <div key={item.title} className="edu-card">
                  <div className="edu-top">
                    <strong>{item.title}</strong>
                    <span>{item.meta}</span>
                  </div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section-card">
            <div className="section-head simple">
              <h2>Projects</h2>
            </div>

            <div className="project-card">
              <div className="project-top">
                <div>
                  <h3>Portone Onboarding Guide</h3>
                  <p>
                    신규 입사자의 온보딩 경험을 돕기 위해 설계한 웹페이지
                    프로젝트입니다. 정보 전달성과 사용 편의성을 고려한 구조를
                    확인할 수 있습니다.
                  </p>
                </div>
                <span className="project-chip">Web Project</span>
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
          </section>
        </section>
      </main>
    </div>
  );
}