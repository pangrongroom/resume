import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaRocket } from 'react-icons/fa'
import { SiGitee } from 'react-icons/si' // 导入 Gitee 图标
import './App.css'
import './NavBar.css' // 引入样式文件

function Header() {
  return (
    <header className="header">
      <h1>汪志涛</h1>
      <p>资深前端开发工程师 | 5年+工作经验</p>
      <div className="header-tags">
        <span>React</span>
        <span>Vue</span>
        <span>Flutter</span>
        <span>Electron</span>
      </div>
    </header>
  )
}

function NavBar() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li>
          <a href="#profile">个人简介</a>
        </li>
        <li>
          <a href="#experience">工作经验</a>
        </li>
        <li>
          <a href="#skills">技能</a>
        </li>
        <li>
          <a href="#projects">项目经验</a>
        </li>
        <li>
          <a href="#education">教育背景</a>
        </li>
        <li>
          <a href="#contact">联系方式</a>
        </li>
      </ul>
    </nav>
  )
}

function Profile() {
  return (
    <section id="profile" className="section">
      <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        🎯个人简介
      </h2>
      <div className="profile-summary">
        <p className="profile-tagline">资深前端工程师，专注于构建高性能、用户友好的现代Web应用</p>
      </div>
      <div class="section">
        <h3>🔍 职业定位</h3>
        <p>
          资深 <span class="highlight">前端开发工程师</span>，专注于{' '}
          <span class="highlight">Web 前端技术、用户体验优化和高性能前端架构</span>。熟练掌握{' '}
          <span class="highlight">JavaScript、TypeScript、React、Vue、Flutter、Electron</span>
          ，并具备 <span class="highlight">Node.js、Webpack、Vite</span>{' '}
          等构建工具经验，致力于打造高效、稳定、用户友好的前端解决方案。
        </p>
      </div>

      <div class="section">
        <h3>🚀 核心优势</h3>
        <ul>
          <li>
            ✅ <span class="highlight">前端技术专家</span>
            ：精通前端工程化、模块化开发，具备丰富的架构设计经验。
          </li>
          <li>
            ✅ <span class="highlight">极致性能优化</span>：擅长{' '}
            <span class="highlight">懒加载、SSR、PWA、CDN 加速</span>{' '}
            等优化策略，提升加载速度和用户体验。
          </li>
          <li>
            ✅ <span class="highlight">高效前后端协作</span>：熟悉{' '}
            <span class="highlight">RESTful API、GraphQL</span>，优化数据传输和渲染效率。
          </li>
          <li>
            ✅ <span class="highlight">团队技术赋能</span>
            ：主导技术选型、搭建基础设施，提升团队开发效率与代码质量。
          </li>
        </ul>
      </div>

      <div class="section">
        <h3>🏆 工作经历亮点</h3>
        <ul>
          <li>
            🔹 <span class="highlight">主导多个大型前端项目</span>，优化架构，提升可维护性与扩展性。
          </li>
          <li>
            🔹 <span class="highlight">前端性能优化 30%+</span>
            ，显著提升页面加载速度，提高用户留存率。
          </li>
          <li>
            🔹 <span class="highlight">推动技术升级</span>，引入{' '}
            <span class="highlight">微前端、Serverless、低代码、AI编程</span>{' '}
            等新技术，提高开发效率。
          </li>
          <li>
            🔹 <span class="highlight">构建前端组件库</span>，代码复用率大幅提升，开发效率提高{' '}
            <span class="highlight">50%+</span>。
          </li>
        </ul>
      </div>

      <div class="section">
        <h3>💡 个人愿景</h3>
        <p>热衷探索前沿技术，持续优化开发流程，期待在未来项目中创造更大价值！</p>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        💼 工作经验
      </h2>
      <div className="timeline">
        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="experience-header">
              <h3>安徽船湾信息技术有限公司</h3>
              <span className="experience-duration">2019.12 - 2024.10</span>
            </div>
            <p className="experience-title">前端开发工程师</p>
            <ul className="experience-achievements">
              <li>
                主导使用Vue/React/Flutter框架开发企业级后台管理系统及H5以及app项目，封装可复用组件库，提升团队开发效率40%
              </li>
              <li>
                通过Webpack/Gulp构建工具优化代码压缩与打包流程，页面加载速度缩短30%，用户体验显著提升
              </li>
              <li>
                解决多浏览器兼容性问题（Chrome/Safari/Firefox），采用CSS3动画与懒加载技术，降低首屏渲染时间至1.5秒内
              </li>
              <li>利用 Node.js 搭建后端服务，实现前后端数据交互，提升系统性能与安全性</li>
              <li>参与项目需求分析与设计，制定合理技术方案，确保项目按时上线</li>
            </ul>
          </div>
        </div>

        <div className="experience-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="experience-header">
              <h3>合肥宇创互娱科技有限公司</h3>
              <span className="experience-duration">2024.11 - 至今</span>
            </div>
            <p className="experience-title">前端开发工程师</p>
            <ul className="experience-achievements">
              <li>参与大型项目的前端架构设计与开发</li>
              <li>利用 React 框架开发单页应用（SPA）</li>
              <li>编写单元测试，确保代码质量与稳定性</li>
              <li>利用 React Hooks 实现复杂的交互逻辑，提升代码复用性与可维护性</li>
              <li>利用 React Native 开发跨平台移动应用，支持 iOS 和 Android 平台</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skillCategories = [
    {
      title: '📌 基础技能',
      skills: [
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: '响应式设计', level: 90 },
      ],
    },
    {
      title: '⚛️ 前端框架',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Redux/Vuex', level: 80 },
        { name: 'Next.js', level: 75 },
      ],
    },
    {
      title: '📱 移动开发',
      skills: [
        { name: 'Flutter', level: 85 },
        { name: 'React Native', level: 75 },
      ],
    },
    {
      title: '🛠️ 构建与工具',
      skills: [
        { name: 'Webpack', level: 80 },
        { name: 'Vite', level: 75 },
        { name: 'Babel', level: 70 },
        { name: 'ESLint', level: 70 },
      ],
    },
    {
      title: '🔧 后端技能',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Express.js', level: 70 },
        { name: 'Python', level: 60 },
      ],
    },
    {
      title: '🌐 其他',
      skills: [
        { name: 'RESTful API', level: 75 },
        { name: 'GraphQL', level: 65 },
        { name: 'Serverless', level: 60 },
      ],
    },
  ]
  return (
    <section id="skills" className="section">
      <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🛠️ 技能</h2>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skills-category" key={index}>
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <div className="skill-info">
                    <span className="skill-name">✅ {skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  const projectList = [
    {
      title: '🔍 Boss岗位爬虫（开源项目）',
      description:
        '开发Python爬虫程序，爬取Boss直聘网站的前端岗位信息，支持自定义城市和搜索关键词，数据保存为CSV和JSON格式，内置反爬虫机制（随机延迟、自定义请求头）。',
      techStack: ['Python', 'BeautifulSoup', 'Requests'],
      link: 'https://gitee.com/wangchito/jd-spider',
    },
    {
      title: '🖼️ 壁纸切换器（开源项目）',
      description:
        '开发桌面壁纸自动切换工具，支持定时切换、多源高清壁纸获取、自动清理、系统托盘操作及开机自启动功能，提升用户桌面体验。',
      techStack: ['Electron'],
      link: 'https://gitee.com/wangchito/wallpaper-changer',
    },
    {
      title: '📱 移动端应用',
      description:
        '构建基于 Flutter 的移动端应用，实现跨平台开发，同时兼容IOS和Android，提供良好的用户体验。',
      techStack: ['Flutter', 'Dart', 'Provider', 'SQLite'],
      link: 'https://apps.apple.com/cn/app/%E7%A6%BE%E7%BE%8E%E9%9B%86%E9%85%8D/id6479513177',
    },
    {
      title: '🌍 在线学习C++基础代码',
      description:
        '通过在线代码编辑器，用户可以在线编写、运行、调试C++代码，提高学习效率，增强思维逻辑。',
      techStack: ['Vue.js', 'Element UI'],
      link: 'http://s.codingle.cn/#/editHome',
    },
    {
      title: '🛍️ 文潮集市H5',
      description:
        '文潮集市是一个文化创意产品交易平台，H5页面主要用于活动推广、产品展示交易等，采用React.js框架开发。',
      techStack: ['React', 'React Router', 'Axios'],
      link: 'https://wcjs.ahbq.com.cn/pages/Market/index',
    },
  ]

  return (
    <section id="projects" className="section">
      <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        🌍 项目经验
      </h2>
      <p className="section-intro">
        以下是我参与开发的部分项目，展示了我在不同技术栈和领域的实践经验
      </p>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a
                  href={project.link}
                  className="project-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="link-icon">🔗</span>
                  <span className="link-text">查看项目</span>
                </a>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span className="tech-badge" key={i}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Education() {
  const educationList = [
    {
      school: '📍 安徽审计职业学院',
      degree: '计算机科学与技术 · 专科',
      duration: '2015 - 2018',
      highlights: [
        '主修课程：数据结构、计算机网络、操作系统、C语言',
        '荣获年度优秀团支书',
        '实验室项目：参与前端可视化工具开发, 实现数据可视化分析',
      ],
    },
  ]

  return (
    <section id="education" className="section">
      <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        🎓 教育背景
      </h2>
      <div className="education-container">
        {educationList.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.school}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="duration">{edu.duration}</p>
            <ul className="highlights">
              {edu.highlights.map((item, i) => (
                <li key={i}>✅ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        📞 联系方式
      </h2>
      <div className="contact-container">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:240945525@qq.com">240945525@qq.com</a>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <a href="tel:13083188036">130-8318-8036</a>
        </div>
        <div className="contact-item">
          <SiGitee className="contact-icon" />
          <a href="https://gitee.com/wangchito" target="_blank" rel="noopener noreferrer">
            Gitee: wangchito
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} 汪志涛. 保留所有权利。</p>
        <div className="footer-links">
          <a href="#profile">简介</a>
          <a href="#experience">经验</a>
          <a href="#skills">技能</a>
          <a href="#projects">项目</a>
        </div>
      </div>
      <p className="copyright">
        用React打造 - 最后更新: {currentYear}年{new Date().getMonth() + 1}月
      </p>
    </footer>
  )
}

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 当页面滚动到一定位置时显示按钮
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    isVisible && (
      <button className="back-to-top" onClick={scrollToTop}>
        <FaRocket size={30} />
      </button>
    )
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <main>
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App
