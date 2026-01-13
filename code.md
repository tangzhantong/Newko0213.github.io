---
layout: default
title: "Code"
permalink: /code/
---

<style>
/* 导航栏透明化 */
header.site-header {
    position: absolute !important; top: 0; left: 0; width: 100%;
    background-color: transparent !important; border-bottom: none !important; z-index: 1000;
}
.site-title, .site-title:visited, .site-nav .page-link { color: #ffffff !important; text-shadow: 0 1px 3px rgba(0,0,0,0.5); }
.site-nav .menu-icon svg path { fill: #ffffff !important; }

/* Hero Banner */
.hero-wrapper {
    position: relative; width: 100vw; left: 50%; right: 50%;
    margin-left: -50vw; margin-right: -50vw; margin-top: -60px; margin-bottom: 60px;
}
.hero-banner {
    width: 100%; height: 350px;
    background-image: url('/assets/images/banner1.jpg'); /* 建议：换一张电脑代码或矩阵图 */
    background-size: cover; background-position: center;
    position: relative; display: flex; justify-content: center; align-items: center; color: white;
}
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); }
.hero-title { position: relative; z-index: 2; font-size: 3rem; font-weight: 700; letter-spacing: 2px; }

/* Code 列表样式 */
.code-container { max-width: 800px; margin: 0 auto; padding: 0 20px; }
details { background-color: #fff; border-bottom: 1px solid #eee; padding: 20px 0; }
summary { cursor: pointer; font-size: 1.2rem; font-weight: 500; color: #333; list-style: none; display: flex; align-items: center; }
summary:hover { color: #4a90e2; } /* 蓝色高亮 */
summary::before { content: "+"; font-size: 24px; margin-right: 15px; color: #bbb; font-weight: 300; }
details[open] summary::before { content: "−"; color: #333; }

.code-link { display: block; padding: 12px 0 12px 40px; color: #555; text-decoration: none; border-bottom: 1px dashed #f5f5f5; font-size: 15px; font-family: monospace; }
.code-link:hover { color: #4a90e2; background: #fafafa; }
.icon { margin-right: 10px; }

footer, .site-footer { display: none !important; }
</style>

<div class="hero-wrapper">
    <div class="hero-banner">
        <div class="hero-overlay"></div>
        <h1 class="hero-title">Bioinformatics & Code</h1>
    </div>
</div>

<div class="code-container">
    <div style="text-align: center; margin-bottom: 40px; color: #777; font-style: italic;">
      <p>分析流程与脚本分享 / Analysis Pipelines and Scripts</p>
    </div>

    <details>
    <summary>🐍 Python Scripts</summary>
      <div style="margin-top: 10px;">
        <a href="#" class="code-link"><span class="icon">💻</span> Image_Processing.py (Coming soon)</a>
        <a href="#" class="code-link"><span class="icon">💻</span> Data_Visualization.py (Coming soon)</a>
      </div>
    </details>

    <details>
    <summary>📊 R Analysis</summary>
      <div style="margin-top: 10px;">
        <a href="#" class="code-link"><span class="icon">📈</span> RNA-seq_DESeq2.R (Coming soon)</a>
        <a href="#" class="code-link"><span class="icon">📈</span> Single_Cell_Seurat.R (Coming soon)</a>
      </div>
    </details>

    <details>
    <summary>📂 Public Datasets</summary>
      <div style="margin-top: 10px;">
        <a href="https://github.com/Newko0213/Newko0213.github.io" target="_blank" class="code-link">
          <span class="icon">🔗</span> Visit my GitHub
        </a>
      </div>
    </details>
</div>