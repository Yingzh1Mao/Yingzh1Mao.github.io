const translations = {
  en: {
    pageTitle: "Yingzhi Mao | Homepage",
    pageDescription:
      "Personal homepage of Yingzhi Mao, master student at the Institute of Software, Chinese Academy of Sciences.",
    navAbout: "About",
    navNews: "News",
    navResearch: "Research",
    navPublications: "Publications",
    navContact: "Contact",
    subtitle:
      "Master Student, Chinese Information Processing Laboratory, Institute of Software, Chinese Academy of Sciences",
    heroLead1Prefix:
      "I am a master's student at the Institute of Software, Chinese Academy of Sciences, working in the ",
    labName: "Chinese Information Processing Laboratory",
    heroLead1Middle: " under the supervision of Associate Professor ",
    heroLead1And: " and Professor ",
    heroLead1Suffix: ".",
    advisor1Name: "Hongyu Lin",
    advisor2Name: "Xianpei Han",
    heroLead2:
      "My recent work focuses on large language models, alignment, and safety.",
    aboutTitle: "About",
    aboutBody:
      "I am currently pursuing my master's degree in Computer Science and Technology at the University of Chinese Academy of Sciences and the Institute of Software, CAS. Before that, I received my B.Eng. in Computer Science and Technology from Zhengzhou University in 2024.",
    newsTitle: "News",
    news0:
      "Our paper \"When Models Outthink Their Safety: Unveiling and Mitigating Self-Jailbreak in Large Reasoning Models\" has been accepted to ACL 2026 Findings!",
    news1:
      "Contributed to AutoAlign project, an open-source toolkit for automated LLM alignment.",
    researchTitle: "Research Interests",
    interest1: "Large Language Models",
    interest2: "AI Alignment",
    interest3: "AI Safety",
    educationTitle: "Education",
    edu1School: "University of Chinese Academy of Sciences / Institute of Software",
    edu1Degree: "Master in Computer Science and Technology",
    edu2School: "Zhengzhou University",
    edu2Degree: "B.Eng. in Computer Science and Technology",
    publicationsTitle: "Selected Publications",
    publicationLink1: "Paper",
    publicationLink2: "Paper",
    honorsTitle: "Honors",
    honorText: "Zhengzhou University Outstanding Student Scholarship",
    contactEmail: "Email",
    contactGithub: "GitHub",
    contactScholar: "Google Scholar",
    contactCv: "Curriculum Vitae"
  },
  zh: {
    pageTitle: "毛楹智 | 个人主页",
    pageDescription: "毛楹智个人主页，中国科学院软件研究所中文信息处理实验室硕士研究生。",
    navAbout: "关于我",
    navNews: "动态",
    navResearch: "研究方向",
    navPublications: "论文成果",
    navContact: "联系方式",
    subtitle: "中国科学院软件研究所中文信息处理实验室 硕士研究生",
    heroLead1Prefix: "我目前在中国科学院软件研究所",
    labName: "中文信息处理实验室",
    heroLead1Middle: "攻读计算机科学与技术硕士学位，导师为",
    heroLead1And: "和",
    heroLead1Suffix: "。",
    advisor1Name: "林鸿宇",
    advisor2Name: "韩先培",
    heroLead2:
      "近期工作主要关注大语言模型、模型对齐与安全相关问题。",
    aboutTitle: "关于我",
    aboutBody:
      "我目前在中国科学院大学与中国科学院软件研究所联合培养，攻读计算机科学与技术硕士学位。在此之前，我于 2024 年获得郑州大学计算机科学与技术工学学士学位。",
    newsTitle: "最新动态",
    news0:
      "我们的论文《When Models Outthink Their Safety: Unveiling and Mitigating Self-Jailbreak in Large Reasoning Models》已被 ACL 2026 Findings 接收。",
    news1: "参与 AutoAlign 项目，该项目是一个面向大语言模型自动化对齐的开源工具包。",
    researchTitle: "研究方向",
    interest1: "大语言模型",
    interest2: "模型对齐",
    interest3: "AI 安全",
    educationTitle: "教育背景",
    edu1School: "中国科学院大学 / 中国科学院软件研究所",
    edu1Degree: "计算机科学与技术 硕士在读",
    edu2School: "郑州大学",
    edu2Degree: "计算机科学与技术 工学学士",
    publicationsTitle: "代表论文",
    publicationLink1: "Paper",
    publicationLink2: "Paper",
    honorsTitle: "荣誉奖励",
    honorText: "郑州大学优秀学生奖学金",
    contactEmail: "邮箱",
    contactGithub: "GitHub",
    contactScholar: "谷歌学术",
    contactCv: "个人简历"
  }
};

const langButtons = document.querySelectorAll(".lang-button");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const descriptionNode = document.getElementById("page-description");

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = dict.pageTitle;
  descriptionNode.setAttribute("content", dict.pageDescription);

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) {
      node.textContent = dict[key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  window.localStorage.setItem("preferred-language", lang);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
  });
});

const savedLanguage = window.localStorage.getItem("preferred-language");
const browserLanguage =
  navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

applyLanguage(savedLanguage || browserLanguage);
