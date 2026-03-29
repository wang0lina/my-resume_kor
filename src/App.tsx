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
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>왕리나 (Lina Wang)</h1>
      <p>HR Resume Website</p>

      <img
        src="/profile.jpg"
        alt="왕리나 프로필"
        style={{ width: 120, borderRadius: "50%", marginTop: 16 }}
      />

      <h2 style={{ marginTop: 32 }}>Work Experience</h2>
      {experiences.map((job) => (
        <div key={job.company} style={{ marginBottom: 24 }}>
          <h3>{job.company}</h3>
          <p>{job.role}</p>
          <p>{job.period}</p>

          {job.sections.map((sec) => (
            <div key={sec.title} style={{ marginTop: 8 }}>
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

      <h2>Education & Credentials</h2>
      <ul>
        <li>연세대학교(본교) 정치외교학과 / 언론홍보영상학부</li>
        <li>HRM 전문가 (발행기관: 한국공인노무사회)</li>
        <li>OPIc AL (발행기관: ACTFL)</li>
      </ul>

      <h2>Projects</h2>
      <a
        href="https://portone-onboarding.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Portone Onboarding Guide
      </a>
    </div>
  );
}