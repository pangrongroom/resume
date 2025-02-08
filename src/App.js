import React, { useState, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaRocket } from 'react-icons/fa'
import './App.css'
import './NavBar.css' // 引入样式文件

function Header() {
  return (
    <header className="header">
      <h1>汪志涛</h1>
      <p>前端开发工程师 | 5年工作经验</p>
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
      <div class="section">
        <h3>🔍 职业定位</h3>
        <p>
          资深 <span class="highlight">前端开发工程师</span>，专注于{' '}
          <span class="highlight">Web 前端技术、用户体验优化和高性能前端架构</span>。熟练掌握{' '}
          <span class="highlight">JavaScript、TypeScript、React、Vue</span>，并具备{' '}
          <span class="highlight">Node.js、Webpack、Vite</span>{' '}
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
      <div className="experience-item">
        <h3>公司名称 A (20XX - 20XX)</h3>
        <p>职位：前端开发工程师</p>
        <ul>
          <li>负责网站前端开发，使用 HTML、CSS、JavaScript 构建响应式页面。</li>
          <li>与后端团队配合，集成 RESTful API，实现数据动态展示。</li>
          <li>优化页面性能，提高加载速度和用户体验。</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>公司名称 B (20XX - 20XX)</h3>
        <p>职位：前端开发工程师</p>
        <ul>
          <li>参与大型项目的前端架构设计与开发。</li>
          <li>利用 React/Vue 框架开发单页应用（SPA）。</li>
          <li>编写单元测试，确保代码质量与稳定性。</li>
        </ul>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🛠️ 技能</h2>

      <div className="skills-container">
        {/* 基础技能 */}
        <div className="skills-category">
          <h3>📌 基础技能</h3>
          <ul>
            <li>✅ HTML5, CSS3, JavaScript (ES6+)</li>
            <li>✅ TypeScript, AJAX, Fetch API</li>
            <li>✅ 响应式设计, Flexbox, Grid 布局</li>
          </ul>
        </div>

        {/* 前端框架 */}
        <div className="skills-category">
          <h3>⚛️ 前端框架</h3>
          <ul>
            <li>✅ React.js, Vue.js, Next.js</li>
            <li>✅ Redux, Vuex, Zustand</li>
            <li>✅ 前端路由 (React Router, Vue Router)</li>
          </ul>
        </div>

        {/* 构建与工具 */}
        <div className="skills-category">
          <h3>🛠️ 构建与工具</h3>
          <ul>
            <li>✅ Webpack, Vite, Babel, ESLint</li>
            <li>✅ Git & GitHub, CI/CD, Docker</li>
            <li>✅ Jest, Cypress, 单元测试</li>
          </ul>
        </div>

        {/* 其他技能 */}
        <div className="skills-category">
          <h3>🌐 其他</h3>
          <ul>
            <li>✅ Node.js, Express.js, Koa</li>
            <li>✅ RESTful API, GraphQL</li>
            <li>✅ Serverless, 微前端架构</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const projectList = [
    {
      title: '📌 企业级管理后台系统',
      description:
        '开发基于 React + Ant Design 的企业级管理后台，采用动态路由，权限控制及数据可视化，提升管理效率。',
      techStack: ['React', 'Ant Design', 'Redux', 'ECharts', 'Node.js'],
      link: 'https://github.com/example-admin',
    },
    {
      title: '📱 移动端 PWA 应用',
      description: '构建基于 Vue + Vuex + PWA 的移动端 Web 应用，离线可用，用户体验媲美原生应用。',
      techStack: ['Vue', 'Vuex', 'PWA', 'Axios', 'Vite'],
      link: 'https://github.com/example-pwa',
    },
    {
      title: '🌍 SSR+SEO 优化电商网站',
      description: '基于 Next.js 开发 SSR 电商平台，提升 SEO，优化首屏加载速度。',
      techStack: ['Next.js', 'GraphQL', 'Tailwind CSS', 'MongoDB'],
      link: 'https://github.com/example-ecommerce',
    },
  ]

  return (
    <section id="projects" className="section">
      <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        🌍 项目经验
      </h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span className="tech-badge" key={i}>
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 查看项目
            </a>
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
        '主修课程：数据结构、计算机网络、操作系统、前端开发',
        '荣获年度优秀团支书',
        '实验室项目：参与前端可视化工具开发',
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
          <FaGithub className="contact-icon" />
          <a href="https://github.com/pangrongroom" target="_blank" rel="noopener noreferrer">
            GitHub: pangrongroom
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 汪志涛. 保留所有权利。</p>
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
