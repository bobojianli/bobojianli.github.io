/* =========================
   全局变量 & 重置
========================= */
:root {
    --bg-primary: #ffffff;
    --bg-secondary: #f5f8fc;
    --bg-tertiary: #eaf2fb;
    --text-primary: #1a2a42;
    --text-secondary: #4a5e7a;
    --text-muted: #7f8ea4;
    --accent: #2b6cff;
    --accent-hover: #1a56e0;
    --accent-soft: #87aaff;
    --border: #dbe4f0;
    --card-bg: #ffffff;
    --card-hover: #f5f8fc;
    --shadow: 0 2px 12px rgba(43, 108, 255, 0.06);
    --shadow-hover: 0 6px 24px rgba(43, 108, 255, 0.12);
    --max-width: 1200px;
    --transition: all 0.25s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
                 "Hiragino Sans GB", "Microsoft YaHei", Roboto, sans-serif;
    background-color: var(--bg-primary);
    color: var(--text-primary);
    line-height: 1.7;
    font-size: 16px;
}

a {
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
}

.text-muted {
    color: var(--text-secondary);
}

.text-muted-sm {
    color: var(--text-muted);
    font-size: 0.9rem;
}

/* =========================
   导航栏
========================= */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
}

.nav-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 24px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.nav-logo {
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--text-primary);
    letter-spacing: 0.5px;
}

.nav-menu {
    display: flex;
    gap: 8px;
}

.nav-link {
    padding: 8px 16px;
    font-size: 0.95rem;
    color: var(--text-secondary);
    border-radius: 6px;
    transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
    color: var(--text-primary);
    background-color: var(--bg-tertiary);
}

.nav-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
}

.nav-toggle span {
    display: block;
    width: 100%;
    height: 2px;
    background-color: var(--text-primary);
    border-radius: 2px;
    transition: var(--transition);
}

.nav-toggle.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.nav-toggle.active span:nth-child(2) {
    opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

/* =========================
   首页 Hero
========================= */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding: 100px 0 60px;
    background: linear-gradient(180deg, #ffffff 0%, #f5f8fc 100%);
}

.hero-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
}

.hero-content {
    flex: 1;
    max-width: 620px;
}

.hero-portrait {
    flex-shrink: 0;
    position: relative;
}

.portrait-frame {
    width: 320px;
    height: 320px;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid #ffffff;
    box-shadow: 0 12px 40px rgba(43, 108, 255, 0.2);
    background: linear-gradient(135deg, #eaf2fb 0%, #ffffff 100%);
    position: relative;
}

.portrait-frame::before {
    content: "";
    position: absolute;
    inset: -14px;
    border-radius: 50%;
    border: 2px dashed rgba(43, 108, 255, 0.25);
    z-index: -1;
}

.portrait-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.portrait-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    gap: 8px;
}

.portrait-placeholder span {
    font-size: 4rem;
}

.portrait-placeholder p {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-align: center;
    padding: 0 20px;
}

.portrait-badge {
    position: absolute;
    bottom: 20px;
    left: -20px;
    background: var(--accent);
    color: #fff;
    padding: 10px 18px;
    border-radius: 30px;
    font-size: 0.85rem;
    font-weight: 500;
    box-shadow: 0 6px 18px rgba(43, 108, 255, 0.35);
}

.portrait-badge-2 {
    position: absolute;
    top: 10px;
    right: -10px;
    background: #fff;
    color: var(--accent);
    padding: 10px 16px;
    border-radius: 30px;
    font-size: 0.82rem;
    font-weight: 500;
    border: 1px solid var(--border);
    box-shadow: 0 4px 14px rgba(43, 108, 255, 0.1);
}

.hero-greeting {
    color: var(--accent);
    font-size: 1.1rem;
    margin-bottom: 16px;
    font-weight: 500;
}

.hero-name {
    font-size: clamp(2.2rem, 6vw, 3.8rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 16px;
    letter-spacing: -0.5px;
}

.hero-subtitle {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 28px;
    line-height: 1.4;
}

.highlight {
    color: var(--text-primary);
    font-weight: 600;
}

.hero-description {
    font-size: 1.05rem;
    color: var(--text-secondary);
    margin-bottom: 40px;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 28px;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: var(--transition);
    border: 1px solid transparent;
}

.btn-primary {
    background-color: var(--accent);
    color: #ffffff;
    box-shadow: 0 4px 14px rgba(43, 108, 255, 0.25);
}

.btn-primary:hover {
    background-color: var(--accent-hover);
    transform: translateY(-1px);
}

.btn-secondary {
    background-color: transparent;
    color: var(--text-primary);
    border-color: var(--border);
}

.btn-secondary:hover {
    background-color: var(--bg-tertiary);
    border-color: var(--text-muted);
    transform: translateY(-1px);
}

.scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}

.scroll-indicator span {
    display: block;
    width: 24px;
    height: 38px;
    margin: 0 auto 12px;
    border: 2px solid var(--text-muted);
    border-radius: 12px;
    position: relative;
}

.scroll-indicator span::after {
    content: "";
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background-color: var(--text-muted);
    border-radius: 2px;
    animation: scrollBounce 1.8s infinite;
}

.scroll-indicator p {
    color: var(--text-muted);
    font-size: 0.85rem;
    letter-spacing: 1px;
}

@keyframes scrollBounce {
    0%, 100% { opacity: 1; transform: translate(-50%, 0); }
    50% { opacity: 0.4; transform: translate(-50%, 8px); }
}

/* =========================
   通用板块
========================= */
.section {
    padding: 100px 0;
}

.section-alt {
    background-color: var(--bg-secondary);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.section-title {
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 700;
    text-align: center;
    margin-bottom: 12px;
}

.section-divider {
    width: 56px;
    height: 3px;
    background-color: var(--accent);
    margin: 0 auto 20px;
    border-radius: 2px;
}

.section-subtitle {
    text-align: center;
    color: var(--text-secondary);
    font-size: 1rem;
    margin-bottom: 60px;
}

/* =========================
   关于我
========================= */
.about-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.about-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 32px 28px;
    transition: var(--transition);
    box-shadow: var(--shadow);
}

.about-card:hover {
    background-color: var(--card-hover);
    border-color: var(--accent);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.about-icon {
    font-size: 2rem;
    margin-bottom: 16px;
}

.about-card h3 {
    font-size: 1.25rem;
    margin-bottom: 20px;
    color: var(--text-primary);
}

.about-list li {
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
}

.about-list li:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.about-list li strong {
    display: block;
    color: var(--text-primary);
    margin-bottom: 4px;
    font-size: 0.95rem;
}

.about-list li p {
    font-size: 0.9rem;
    line-height: 1.6;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-tag {
    padding: 6px 14px;
    background-color: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 20px;
    font-size: 0.85rem;
    color: var(--text-secondary);
    transition: var(--transition);
}

.skill-tag:hover {
    color: var(--text-primary);
    border-color: var(--accent);
}

/* =========================
   创意想法
========================= */
.ideas-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 28px;
}

.idea-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 40px 32px;
    position: relative;
    transition: var(--transition);
    overflow: hidden;
    box-shadow: var(--shadow);
}

.idea-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), #7ab1ff);
    opacity: 0;
    transition: var(--transition);
}

.idea-card:hover {
    background-color: var(--card-hover);
    transform: translateY(-3px);
    border-color: var(--accent);
    box-shadow: var(--shadow-hover);
}

.idea-card:hover::before {
    opacity: 1;
}

.idea-number {
    position: absolute;
    top: 24px;
    right: 28px;
    font-size: 3rem;
    font-weight: 700;
    color: rgba(43, 108, 255, 0.08);
    line-height: 1;
}

.idea-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.idea-card h3 {
    font-size: 1.5rem;
    margin-bottom: 16px;
    color: var(--text-primary);
    position: relative;
    z-index: 1;
}

.idea-desc {
    font-size: 0.95rem;
    line-height: 1.8;
    margin-bottom: 24px;
    position: relative;
    z-index: 1;
}

.idea-points {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
}

.point {
    padding: 5px 12px;
    background-color: var(--bg-tertiary);
    border-radius: 6px;
    font-size: 0.8rem;
    color: var(--accent);
    font-weight: 500;
}

/* =========================
   项目作品
========================= */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
}

.project-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 28px 24px;
    transition: var(--transition);
    position: relative;
    box-shadow: var(--shadow);
}

.project-card:hover {
    background-color: var(--card-hover);
    border-color: var(--accent);
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
}

.project-tag {
    display: inline-block;
    padding: 4px 12px;
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 4px;
    margin-bottom: 16px;
    letter-spacing: 0.5px;
}

.tag-demo {
    background-color: rgba(43, 108, 255, 0.1);
    color: var(--accent);
}

.tag-eng {
    background-color: rgba(16, 185, 129, 0.1);
    color: #059669;
}

.project-card h3 {
    font-size: 1.15rem;
    margin-bottom: 12px;
    color: var(--text-primary);
    line-height: 1.4;
}

.project-card > p {
    font-size: 0.9rem;
    line-height: 1.7;
    margin-bottom: 20px;
    min-height: 80px;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.project-tech span {
    padding: 4px 10px;
    background-color: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 4px;
    font-size: 0.78rem;
    color: var(--text-secondary);
}

/* =========================
   自媒体
========================= */
.media-wrap {
    max-width: 820px;
    margin: 0 auto;
}

.media-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 48px 40px;
    box-shadow: var(--shadow);
}

.media-icon {
    font-size: 2.8rem;
    margin-bottom: 16px;
}

.media-card h3 {
    font-size: 1.6rem;
    margin-bottom: 8px;
    color: var(--text-primary);
}

.media-slogan {
    font-size: 1.15rem;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 24px;
}

.media-desc {
    font-size: 0.98rem;
    line-height: 1.9;
    margin-bottom: 36px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--border);
}

.media-tags {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
}

.media-tag-item {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.tag-icon {
    font-size: 1.3rem;
    flex-shrink: 0;
    margin-top: 2px;
}

.media-tag-item strong {
    display: block;
    font-size: 1rem;
    margin-bottom: 4px;
    color: var(--text-primary);
}

.media-tag-item p {
    font-size: 0.9rem;
    line-height: 1.5;
}

.media-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding-top: 32px;
    border-top: 1px solid var(--border);
}

.stat-item {
    text-align: center;
    padding: 16px 8px;
}

.stat-num {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--accent);
    margin-bottom: 6px;
}

.stat-label {
    font-size: 0.85rem;
    color: var(--text-secondary);
}

/* =========================
   联系板块
========================= */
.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 60px;
}

.contact-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 32px 20px;
    text-align: center;
    transition: var(--transition);
    cursor: pointer;
    display: block;
    box-shadow: var(--shadow);
}

.contact-card:hover {
    background-color: var(--card-hover);
    border-color: var(--accent);
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
}

.contact-icon {
    font-size: 2rem;
    margin-bottom: 14px;
}

.contact-card h4 {
    font-size: 1rem;
    margin-bottom: 8px;
    color: var(--text-primary);
}

.contact-card p {
    font-size: 0.9rem;
}

.contact-footer {
    text-align: center;
    padding-top: 32px;
    border-top: 1px solid var(--border);
}

.contact-footer p {
    margin-bottom: 12px;
    font-size: 0.95rem;
}

/* =========================
   响应式适配
========================= */

/* 平板 */
@media (max-width: 860px) {
    .section {
        padding: 80px 0;
    }

    .media-card {
        padding: 36px 28px;
    }

    .media-stats {
        gap: 8px;
    }

    .idea-card {
        padding: 32px 24px;
    }

    .idea-number {
        font-size: 2.4rem;
    }

    /* 平板：关于我 → 两列，第二行居中一张 */
    .about-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    /* Hero 平板适配 */
    .hero-inner {
        gap: 40px;
    }

    .portrait-frame {
        width: 260px;
        height: 260px;
    }

    .portrait-badge {
        left: -10px;
        padding: 8px 14px;
        font-size: 0.8rem;
    }

    .portrait-badge-2 {
        padding: 8px 13px;
        font-size: 0.76rem;
    }
}

/* 手机 */
@media (max-width: 720px) {
    .container {
        padding: 0 20px;
    }

    .nav-container {
        padding: 0 20px;
    }

    /* 移动端菜单 */
    .nav-toggle {
        display: flex;
    }

    .nav-menu {
        position: fixed;
        top: 64px;
        left: 0;
        right: 0;
        background-color: var(--bg-primary);
        border-bottom: 1px solid var(--border);
        flex-direction: column;
        padding: 16px 20px 24px;
        gap: 4px;
        transform: translateY(-150%);
        transition: transform 0.3s ease;
        box-shadow: 0 8px 20px rgba(43, 108, 255, 0.08);
    }

    .nav-menu.active {
        transform: translateY(0);
    }

    .nav-link {
        display: block;
        padding: 12px 16px;
        font-size: 1rem;
    }

    /* Hero */
    .hero {
        min-height: auto;
        padding: 110px 0 60px;
    }

    .hero-inner {
        flex-direction: column-reverse;
        gap: 40px;
        text-align: center;
    }

    .hero-content {
        max-width: 100%;
    }

    .hero-portrait {
        margin: 0 auto;
    }

    .portrait-frame {
        width: 220px;
        height: 220px;
    }

    .portrait-badge {
        left: 50%;
        bottom: -8px;
        transform: translateX(-50%);
        padding: 8px 14px;
        font-size: 0.8rem;
        white-space: nowrap;
    }

    .portrait-badge-2 {
        top: auto;
        right: 50%;
        bottom: 38px;
        transform: translateX(140%);
        padding: 6px 12px;
        font-size: 0.74rem;
    }

    .hero-greeting {
        font-size: 1rem;
    }

    .hero-description {
        font-size: 0.98rem;
    }

    .hero-buttons {
        flex-direction: column;
        gap: 12px;
    }

    .btn {
        width: 100%;
    }

    .scroll-indicator {
        display: none;
    }

    /* 板块 */
    .section {
        padding: 64px 0;
    }

    .section-subtitle {
        font-size: 0.92rem;
        margin-bottom: 40px;
    }

    .about-grid,
    .ideas-grid,
    .projects-grid,
    .contact-grid {
        gap: 16px;
        grid-template-columns: 1fr;
    }

    .about-card,
    .project-card,
    .contact-card {
        padding: 24px 20px;
    }

    .idea-card {
        padding: 28px 22px;
    }

    .idea-number {
        font-size: 2rem;
        top: 20px;
        right: 22px;
    }

    .project-card > p {
        min-height: auto;
    }

    /* 自媒体 */
    .media-card {
        padding: 28px 22px;
    }

    .media-icon {
        font-size: 2.2rem;
    }

    .media-card h3 {
        font-size: 1.3rem;
    }

    .media-slogan {
        font-size: 1rem;
    }

    .media-desc {
        font-size: 0.92rem;
    }

    .media-stats {
        grid-template-columns: 1fr;
        gap: 12px;
        padding-top: 24px;
    }

    .stat-item {
        padding: 12px;
    }

    /* 联系 */
    .contact-footer p {
        font-size: 0.88rem;
    }
}

/* 小屏手机 */
@media (max-width: 380px) {
    .hero-name {
        font-size: 2rem;
    }

    .section-title {
        font-size: 1.6rem;
    }

    .idea-number {
        display: none;
    }
}

/* =========================
   联系页 - 二维码卡片
========================= */
.contact-card-qr {
    cursor: default;
}

.qr-box {
    width: 150px;
    height: 150px;
    margin: 16px auto 10px;
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid var(--border);
    background: #fff;
    padding: 6px;
}

.qr-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    display: block;
}

.qr-placeholder {
    width: 100%;
    height: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: var(--bg-secondary);
    border-radius: 6px;
}

.qr-placeholder span {
    font-size: 2.4rem;
    opacity: 0.5;
}

.qr-placeholder p {
    font-size: 0.72rem;
    color: var(--text-muted);
    line-height: 1.4;
    text-align: center;
}

.qr-tip {
    font-size: 0.78rem;
    color: var(--accent);
    margin-top: 4px;
}

/* 纯文字版二维码占位（保留卡片和方形容器样式） */
.qr-text-only {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f0f7ff 0%, #e0ecff 100%);
}
.qr-text-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 2px;
    padding: 10px 12px;
    border: 2px dashed var(--accent-soft);
    border-radius: 8px;
    background: rgba(255,255,255,0.75);
}

/* =========================
   放松一刻 - 游戏入口
========================= */
.relax-wrap {
    max-width: 880px;
    margin: 0 auto;
}

.game-cards {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
}

.game-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 48px 32px;
    text-align: center;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow);
    font-family: inherit;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.game-card::before,
.game-card::after {
    content: "";
    position: absolute;
    width: 60px;
    height: 60px;
    border: 2px solid var(--accent);
    opacity: 0.18;
    transition: var(--transition);
}

.game-card::before {
    top: 12px; left: 12px;
    border-right: none;
    border-bottom: none;
    border-radius: 8px 0 0 0;
}

.game-card::after {
    bottom: 12px; right: 12px;
    border-left: none;
    border-top: none;
    border-radius: 0 0 8px 0;
}

.game-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: var(--shadow-hover);
}

.game-card:hover::before,
.game-card:hover::after {
    width: 80px;
    height: 80px;
    opacity: 0.4;
}

.game-icon {
    font-size: 3.6rem;
    margin-bottom: 20px;
}

.game-card h3 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: var(--text-primary);
}

.game-card > p {
    font-size: 0.95rem;
    margin-bottom: 24px;
}

.game-btn {
    display: inline-block;
    padding: 10px 24px;
    background: var(--bg-tertiary);
    color: var(--accent);
    border-radius: 30px;
    font-weight: 500;
    font-size: 0.9rem;
    transition: var(--transition);
}

.game-card:hover .game-btn {
    background: var(--accent);
    color: #fff;
}

/* 响应式-游戏入口 */
@media (max-width: 720px) {
    .game-cards {
        grid-template-columns: 1fr;
        gap: 16px;
    }

    .game-card {
        padding: 36px 24px;
    }

    .game-icon {
        font-size: 2.8rem;
    }

    .game-card h3 {
        font-size: 1.3rem;
    }
}

/* =========================
   通用弹窗 (Modal)
========================= */
.modal {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.modal.active {
    display: flex;
}

.modal-mask {
    position: absolute;
    inset: 0;
    background: rgba(26, 42, 66, 0.55);
    backdrop-filter: blur(4px);
}

.modal-dialog {
    position: relative;
    background: #fff;
    border-radius: 16px;
    width: 100%;
    max-height: 92vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 24px 80px rgba(43, 108, 255, 0.25);
    border: 1px solid var(--border);
    animation: modalPop 0.22s ease-out;
}

.modal-lg { max-width: 640px; }
.modal-xl { max-width: 960px; }

@keyframes modalPop {
    from { opacity: 0; transform: translateY(20px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
}

.modal-close {
    position: absolute;
    top: 14px;
    right: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: var(--bg-secondary);
    color: var(--text-secondary);
    font-size: 1.6rem;
    line-height: 1;
    cursor: pointer;
    transition: var(--transition);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-close:hover {
    background: var(--bg-tertiary);
    color: var(--text-primary);
    transform: rotate(90deg);
}

.modal-header {
    padding: 20px 28px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex-wrap: wrap;
}

.modal-header h3 {
    font-size: 1.2rem;
    color: var(--text-primary);
}

.modal-body {
    padding: 24px 28px;
    overflow: auto;
    flex: 1;
    background: var(--bg-secondary);
}

.modal-footer {
    padding: 14px 28px;
    border-top: 1px solid var(--border);
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    flex-wrap: wrap;
}

.modal-footer .btn {
    padding: 9px 22px;
    font-size: 0.9rem;
}

/* 弹窗响应式 */
@media (max-width: 720px) {
    .modal {
        padding: 0;
        align-items: stretch;
    }
    .modal-dialog {
        max-height: 100vh;
        border-radius: 0;
    }
    .modal-header {
        padding: 16px 20px;
    }
    .modal-body {
        padding: 16px;
    }
    .modal-footer {
        padding: 12px 16px;
    }
}

/* =========================
   五子棋棋盘
========================= */
.gomoku-wrap {
    display: flex;
    justify-content: center;
    padding: 8px 0;
}

.gomoku-board {
    --size: 15;
    --cell: 34px;
    width: calc(var(--cell) * (var(--size) - 1) + 40px);
    height: calc(var(--cell) * (var(--size) - 1) + 40px);
    position: relative;
    background: linear-gradient(135deg, #f5deb3 0%, #e8c98a 100%);
    border-radius: 8px;
    box-shadow: inset 0 0 0 4px #8b5a2b, 0 6px 20px rgba(0,0,0,0.15);
    padding: 20px;
}

.gomoku-board::before,
.gomoku-board::after {
    content: "";
    position: absolute;
    inset: 8px;
    border: 1px dashed rgba(139, 90, 43, 0.4);
    border-radius: 6px;
    pointer-events: none;
}

.gomoku-board::after {
    inset: 14px;
    border-style: solid;
    border-width: 1px;
    opacity: 0.3;
}

.gomoku-grid {
    position: relative;
    width: 100%;
    height: 100%;
}

.gomoku-cell {
    position: absolute;
    width: var(--cell);
    height: var(--cell);
    transform: translate(-50%, -50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
}

.gomoku-cell::before,
.gomoku-cell::after {
    content: "";
    position: absolute;
    background: #5a3c1a;
    z-index: -1;
}

.gomoku-cell::before {
    width: 100%;
    height: 1px;
    left: 0;
    top: 50%;
}

.gomoku-cell::after {
    width: 1px;
    height: 100%;
    top: 0;
    left: 50%;
}

/* 边缘半线 */
.gomoku-cell.edge-l::before { width: 50%; left: 50%; }
.gomoku-cell.edge-r::before { width: 50%; left: 0; }
.gomoku-cell.edge-t::after  { height: 50%; top: 50%; }
.gomoku-cell.edge-b::after  { height: 50%; top: 0; }

/* 星位点 */
.gomoku-star-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    background: #5a3c1a;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 0;
}

/* 棋子 */
.gomoku-stone {
    width: calc(var(--cell) * 0.86);
    height: calc(var(--cell) * 0.86);
    border-radius: 50%;
    position: relative;
    z-index: 3;
    box-shadow: 1px 2px 6px rgba(0,0,0,0.35);
    transition: transform 0.12s ease;
}

.gomoku-stone.black {
    background: radial-gradient(circle at 32% 30%, #555, #000 60%);
}

.gomoku-stone.white {
    background: radial-gradient(circle at 32% 30%, #fff, #d5d5d5 70%);
    border: 1px solid #aaa;
}

.gomoku-stone.last::after {
    content: "";
    position: absolute;
    inset: 35%;
    border-radius: 50%;
    border: 2px solid #ff4757;
    animation: pulse 1.2s infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(0.9); }
}

/* 状态栏 */
.gomoku-status {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 6px 14px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 30px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-primary);
}

.turn-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

.turn-dot.black {
    background: radial-gradient(circle at 32% 30%, #555, #000 60%);
}

.turn-dot.white {
    background: radial-gradient(circle at 32% 30%, #fff, #ccc 70%);
    border: 1px solid #999;
}

.gomoku-status.win {
    background: #d1fae5;
    border-color: #10b981;
    color: #065f46;
}

/* 五子棋响应式 */
@media (max-width: 720px) {
    .gomoku-board { --cell: 22px; }
}

/* =========================
   斗地主
========================= */
.ddz-field {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
    align-items: start;
}

.ddz-other {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px 12px;
    text-align: center;
    position: relative;
}

.ddz-avatar {
    font-size: 2.4rem;
    margin-bottom: 6px;
}

.ddz-name {
    font-size: 0.9rem;
    color: var(--text-primary);
    margin-bottom: 4px;
    font-weight: 500;
}

.ddz-hand-count {
    font-size: 0.8rem;
    color: var(--text-secondary);
}

.ddz-hand-count span {
    font-weight: 700;
    color: var(--accent);
    font-size: 1rem;
}

.ddz-other.is-landlord::before {
    content: "地主";
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    color: #fff;
    font-size: 0.7rem;
    padding: 2px 10px;
    border-radius: 12px;
    font-weight: 600;
    letter-spacing: 1px;
}

.ddz-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    min-height: 180px;
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 18px 16px;
}

.ddz-dipai {
    display: flex;
    gap: 6px;
}

.dipai-slot {
    width: 46px;
    height: 64px;
    background: linear-gradient(135deg, var(--bg-tertiary), #fff);
    border: 1px dashed var(--border);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    font-size: 1.1rem;
    font-weight: 600;
}

.dipai-slot.real {
    background: #fff;
    border-style: solid;
    border-color: var(--border);
    font-family: "Georgia", serif;
}
.dipai-slot.real.r,
.dipai-slot.real.d { color: #e03131; }
.dipai-slot.real.s,
.dipai-slot.real.c { color: #1a2a42; }

.ddz-last-play {
    min-height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;
    padding: 10px;
    background: var(--bg-secondary);
    border-radius: 8px;
    max-width: 100%;
}

.ddz-status {
    padding: 6px 14px;
    background: var(--bg-secondary);
    border: 1px solid var(--border);
    border-radius: 30px;
    font-size: 0.85rem;
    color: var(--text-primary);
    font-weight: 500;
}

.ddz-status.action {
    background: #dbeafe;
    border-color: var(--accent);
    color: var(--accent-hover);
}
.ddz-status.win {
    background: #d1fae5;
    border-color: #10b981;
    color: #065f46;
}
.ddz-status.lose {
    background: #fee2e2;
    border-color: #ef4444;
    color: #991b1b;
}

.ddz-mine {
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 16px;
}

.ddz-my-info {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-primary);
}

.ddz-role {
    padding: 3px 12px;
    border-radius: 20px;
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    font-size: 0.8rem;
    font-weight: 600;
}

.ddz-role.landlord {
    background: linear-gradient(135deg, #f59e0b, #ef4444);
    color: #fff;
}

.ddz-hand {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 4px;
    padding: 10px 4px 26px;
    min-height: 120px;
}

.card {
    width: 54px;
    height: 80px;
    background: #fff;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6px 6px 6px 7px;
    font-family: "Georgia", serif;
    font-weight: 700;
    cursor: pointer;
    position: relative;
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    user-select: none;
    line-height: 1;
}

.card:hover {
    box-shadow: 0 4px 12px rgba(43, 108, 255, 0.2);
}

.card.selected {
    transform: translateY(-16px);
    border-color: var(--accent);
    box-shadow: 0 6px 18px rgba(43, 108, 255, 0.35);
}

.card.r, .card.d { color: #e03131; }
.card.s, .card.c { color: #1a2a42; }

.card-joker-big, .card-joker-small {
    background: linear-gradient(135deg, #f8fafc 0%, #fef3c7 100%);
    border-color: #f59e0b;
}
.card-joker-big { color: #ef4444; }
.card-joker-small { color: var(--text-primary); }

.card-num {
    font-size: 1.1rem;
}

.card-suit-top {
    font-size: 0.85rem;
    margin-top: 2px;
}

.card-suit-big {
    align-self: flex-end;
    font-size: 1.5rem;
    line-height: 1;
}

.ddz-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 6px;
    flex-wrap: wrap;
}

.ddz-actions .btn {
    padding: 9px 20px;
    font-size: 0.9rem;
}

/* 小牌（底牌、上家出牌展示用） */
.card.small {
    width: 40px;
    height: 60px;
    padding: 4px 4px 4px 5px;
}
.card.small .card-num { font-size: 0.9rem; }
.card.small .card-suit-top { font-size: 0.7rem; }
.card.small .card-suit-big { font-size: 1.1rem; }

/* 斗地主响应式 */
@media (max-width: 720px) {
    .ddz-field {
        grid-template-columns: 1fr 1fr;
    }
    .ddz-center {
        grid-column: 1 / -1;
        order: -1;
        min-height: auto;
    }
    .card {
        width: 40px;
        height: 60px;
        padding: 4px 4px 4px 5px;
    }
    .card-num { font-size: 0.9rem; }
    .card-suit-top { font-size: 0.7rem; }
    .card-suit-big { font-size: 1.1rem; }
    .ddz-hand { padding-bottom: 20px; }
    .card.selected { transform: translateY(-12px); }
}

@media (max-width: 420px) {
    .card {
        width: 32px;
        height: 50px;
        padding: 3px 2px 3px 3px;
    }
    .card-num { font-size: 0.78rem; }
    .card-suit-top { font-size: 0.6rem; display:none;}
    .card-suit-big { font-size: 0.9rem; }
    .dipai-slot { width: 34px; height: 50px; }
}

/* =========================
   边框点缀装饰
========================= */
/* 每个板块四个角落的装饰线 */
.section {
    position: relative;
}

.container {
    position: relative;
}

/* 板块标题区左右装饰点 */
.section-title {
    position: relative;
    display: inline-block;
    width: auto;
    left: 50%;
    transform: translateX(-50%);
    padding: 0 60px;
}

.section-title::before,
.section-title::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 44px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent));
}

.section-title::before {
    left: 0;
}

.section-title::after {
    right: 0;
    transform: scaleX(-1);
}

/* 板块内容区的四角装饰 */
.container > .section-title,
.container > .section-divider,
.container > .section-subtitle {
    position: relative;
    z-index: 1;
}

.container::before,
.container::after,
.section > .container > *:first-child ~ *::before {
    /* 不使用，以免误匹配 */
}

/* 四角边框装饰 - 作用于每个板块容器内容区 */
.section-inner-deco {
    position: relative;
}

/* 卡片统一装饰角 */
.about-card,
.contact-card,
.media-card,
.game-card,
.ddz-field,
.ddz-mine,
.modal-dialog {
    position: relative;
}

.about-card::before,
.about-card::after,
.contact-card::before,
.contact-card::after,
.media-card::before,
.media-card::after,
.ddz-field::before,
.ddz-field::after,
.ddz-mine::before,
.ddz-mine::after {
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    border: 2px solid var(--accent);
    opacity: 0.25;
    pointer-events: none;
    transition: var(--transition);
}

.about-card::before,
.contact-card::before,
.media-card::before,
.ddz-field::before,
.ddz-mine::before {
    top: 8px;
    left: 8px;
    border-right: none;
    border-bottom: none;
    border-radius: 6px 0 0 0;
}

.about-card::after,
.contact-card::after,
.media-card::after,
.ddz-field::after,
.ddz-mine::after {
    bottom: 8px;
    right: 8px;
    border-left: none;
    border-top: none;
    border-radius: 0 0 6px 0;
}

.about-card:hover::before,
.about-card:hover::after,
.contact-card:hover::before,
.contact-card:hover::after,
.media-card:hover::before,
.media-card:hover::after {
    opacity: 0.6;
    width: 32px;
    height: 32px;
}

/* 标题分隔线下方小点装饰 */
.section-divider {
    position: relative;
}

.section-divider::before,
.section-divider::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent);
    opacity: 0.7;
    transform: translateY(-50%);
}

.section-divider::before { left: -18px; }
.section-divider::after  { right: -18px; }

/* 板块之间的细线装饰分隔条 */
.section + .section:not(.section-alt)::before,
.section + .section.section-alt::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.3;
}

/* Hero 分隔线装饰 */
.hero::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
}

/* =========================
   五子棋 - 难度选择 / 结算 / 烟花
========================= */
.gomoku-wrap { position: relative; }

/* -- 难度选择层 -- */
.difficulty-overlay {
    position: absolute;
    inset: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.85);
    backdrop-filter: blur(4px);
    border-radius: 14px;
    transition: opacity 0.25s ease;
}
.difficulty-overlay.hidden {
    opacity: 0;
    pointer-events: none;
}
.difficulty-card {
    width: min(520px, 92%);
    background: #fff;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px 24px 20px;
    box-shadow: 0 18px 40px rgba(30,80,170,0.12);
    text-align: center;
}
.difficulty-card h4 {
    font-size: 1.2rem;
    margin-bottom: 4px;
    color: var(--text-primary);
}
.difficulty-btns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin: 18px 0 20px;
}
.diff-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: 16px 8px 14px;
    background: var(--bg-secondary);
    border: 2px solid transparent;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
}
.diff-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(30,80,170,0.1);
}
.diff-btn.active {
    border-color: var(--accent);
    background: #eef4ff;
    box-shadow: 0 0 0 4px rgba(46,110,225,0.12);
}
.diff-emoji { font-size: 1.6rem; }
.diff-name  { font-weight: 700; font-size: 0.98rem; color: var(--text-primary); }
.diff-desc  { font-size: 0.72rem; color: var(--text-muted); line-height: 1.4; }

.diff-btn.easy.active   { border-color: #43a047; background: #eaf7ec; box-shadow: 0 0 0 4px rgba(67,160,71,0.15); }
.diff-btn.normal.active { border-color: #fb8c00; background: #fff6ea; box-shadow: 0 0 0 4px rgba(251,140,0,0.15); }
.diff-btn.hard.active   { border-color: #e53935; background: #fdecec; box-shadow: 0 0 0 4px rgba(229,57,53,0.15); }

.diff-start { width: 100%; }

.btn-outline {
    background: transparent;
    color: var(--accent);
    border: 1.5px solid var(--accent-soft);
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    font-size: 0.88rem;
}
.btn-outline:hover {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
}

/* -- 结算层 -- */
.result-overlay {
    position: absolute;
    inset: 0;
    z-index: 6;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    border-radius: 14px;
    background: rgba(255,255,255,0.3);
    backdrop-filter: blur(2px);
}
.result-overlay.show { display: flex; animation: fadeIn 0.4s ease; }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.result-inner {
    position: relative;
    padding: 28px 48px;
}

/* 胜利：金色字 + 鲜花 */
.result-inner.win .result-text {
    font-size: 4.2rem;
    font-weight: 900;
    letter-spacing: 12px;
    background: linear-gradient(180deg, #fff3a0 0%, #ffd24a 35%, #e6a700 65%, #b87700 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    filter: drop-shadow(0 4px 0 rgba(160,100,0,0.25)) drop-shadow(0 0 24px rgba(255,200,60,0.6));
    position: relative;
    animation: winPop 0.7s cubic-bezier(.2,1.4,.4,1);
}
@keyframes winPop {
    0%   { transform: scale(0.2) rotate(-15deg); opacity: 0; }
    70%  { transform: scale(1.15) rotate(3deg); }
    100% { transform: scale(1) rotate(0); opacity: 1; }
}

/* 鲜花点缀 */
.result-inner.win::before,
.result-inner.win::after {
    content: "";
    position: absolute;
    inset: -30px -40px;
    pointer-events: none;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
/* 用多背景随机撒花 */
.result-inner.win .flowers {
    position: absolute;
    inset: -40px -60px;
    pointer-events: none;
    overflow: visible;
}
.flower {
    position: absolute;
    font-size: 22px;
    opacity: 0;
    animation: flowerPop 0.9s cubic-bezier(.2,1.4,.4,1) forwards;
    filter: drop-shadow(0 2px 3px rgba(0,0,0,0.15));
}
@keyframes flowerPop {
    0%   { transform: scale(0) rotate(0deg); opacity: 0; }
    60%  { transform: scale(1.3) rotate(180deg); opacity: 1; }
    100% { transform: scale(1) rotate(360deg); opacity: 1; }
}

/* 失败：灰白带裂纹 */
.result-inner.lose .result-text {
    font-size: 4.2rem;
    font-weight: 900;
    letter-spacing: 12px;
    color: #b8bec9;
    position: relative;
    text-shadow:
        1px 1px 0 #858b98,
        -1px -1px 0 #dfe3ec,
        0 0 24px rgba(0,0,0,0.08);
    animation: loseShake 0.6s ease;
    /* 开裂效果：用mask制造不规则缝隙 */
    -webkit-mask-image:
        linear-gradient(#000, #000),
        linear-gradient(135deg, transparent 48%, #000 49%, #000 51%, transparent 52%),
        linear-gradient(45deg,  transparent 48%, #000 49%, #000 51%, transparent 52%),
        radial-gradient(circle at 30% 60%, transparent 0, transparent 3px, #000 3.5px, #000 6px, transparent 6.5px),
        radial-gradient(circle at 70% 30%, transparent 0, transparent 2px, #000 2.5px, #000 5px, transparent 5.5px);
    -webkit-mask-composite: source-over;
            mask-composite: add;
}
@keyframes loseShake {
    0%,100% { transform: translate(0,0); }
    20% { transform: translate(-6px, 2px) rotate(-1deg); }
    40% { transform: translate(5px, -3px) rotate(1.2deg); }
    60% { transform: translate(-3px, 4px) rotate(-0.6deg); }
    80% { transform: translate(4px, -1px) rotate(0.8deg); }
}
/* 裂纹线（SVG层叠） */
.result-inner.lose .cracks {
    position: absolute;
    inset: 0;
    pointer-events: none;
    mix-blend-mode: multiply;
    opacity: 0.8;
}
.result-inner.lose .cracks path {
    stroke: #3a3f48;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: crackDraw 1s ease forwards;
}
.result-inner.lose .cracks path:nth-child(2) { animation-delay: 0.25s; }
.result-inner.lose .cracks path:nth-child(3) { animation-delay: 0.45s; }
@keyframes crackDraw {
    to { stroke-dashoffset: 0; }
}

.result-again {
    min-width: 160px;
    animation: fadeIn 0.5s ease 0.5s backwards;
}

/* -- 烟花 canvas -- */
#fireworksCanvas {
    position: fixed;
    inset: 0;
    z-index: 9999;
    pointer-events: none;
    display: none;
}
#fireworksCanvas.show { display: block; }

@media (max-width: 720px) {
    .difficulty-btns { grid-template-columns: 1fr; }
    .result-inner { padding: 16px 24px; }
    .result-inner.win .result-text,
    .result-inner.lose .result-text {
        font-size: 2.6rem;
        letter-spacing: 6px;
    }
}