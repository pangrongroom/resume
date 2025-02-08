import React from 'react'
import './App.css'

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
      <ul>
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
      <h2>个人简介</h2>
      <p>这里填写你的个人简介，概述职业定位、优势以及工作经历的亮点。</p>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>工作经验</h2>
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
      <h2>技能</h2>
      <ul>
        <li>HTML5, CSS3, JavaScript (ES6+)</li>
        <li>React, Vue.js</li>
        <li>Webpack, Babel</li>
        <li>响应式设计与跨浏览器兼容性</li>
        <li>Git 版本控制</li>
      </ul>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>项目经验</h2>
      <div className="project-item">
        <h3>项目名称 A</h3>
        <p>项目描述：描述项目背景、使用的技术栈及实现的主要功能。</p>
      </div>
      <div className="project-item">
        <h3>项目名称 B</h3>
        <p>项目描述：描述项目背景、使用的技术栈及实现的主要功能。</p>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="section">
      <h2>教育背景</h2>
      <p>学校名称, 专业, 学历, 时间</p>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>联系方式</h2>
      <p>邮箱：240945525@qq.com</p>
      <p>电话：13083188036</p>
      <p>
        GitHub：
        <a href="https://github.com/pangrongroom" target="_blank" rel="noopener noreferrer">
          pangrongroom
        </a>
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 你的名字. 保留所有权利。</p>
    </footer>
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
    </div>
  )
}

export default App
