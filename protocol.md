---
layout: default
title: "Protocol"
permalink: /protocol/
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
    background-image: url('/assets/images/autumn.jpg'); /* 建议：换一张实验记录本或移液枪的图 */
    background-size: cover; background-position: center;
    position: relative; display: flex; justify-content: center; align-items: center; color: white;
}
.hero-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); }
.hero-title { position: relative; z-index: 2; font-size: 3rem; font-weight: 700; letter-spacing: 2px; }

/* Protocol 列表样式 */
.protocol-container { max-width: 800px; margin: 0 auto; padding: 0 20px; }
details { background-color: #fff; border-bottom: 1px solid #eee; padding: 20px 0; }
summary { cursor: pointer; font-size: 1.2rem; font-weight: 500; color: #333; list-style: none; display: flex; align-items: center; }
summary:hover { color: #27ae60; }
summary::before { content: "+"; font-size: 24px; margin-right: 15px; color: #bbb; font-weight: 300; }
details[open] summary::before { content: "−"; color: #333; }

.pdf-link { display: block; padding: 12px 0 12px 40px; color: #555; text-decoration: none; border-bottom: 1px dashed #f5f5f5; font-size: 15px; }
.pdf-link:hover { color: #27ae60; background: #fafafa; }
.icon { margin-right: 10px; }

footer, .site-footer { display: none !important; }
</style>

<div class="hero-wrapper">
    <div class="hero-banner">
        <div class="hero-overlay"></div>
        <h1 class="hero-title">Protocols</h1>
    </div>
</div>

<div class="protocol-container">
    <div style="text-align: center; margin-bottom: 40px; color: #777; font-style: italic;">
      <p>特别感谢师姐整理的实验方法！</p>
    </div>

    <details>
    <summary>🧫 细胞实验 (Cell Experiments)</summary>
      <div style="margin-top: 10px;">
        <a href="/assets/protocol/cell_culture.pdf" class="pdf-link" download>
          <span class="icon">📄</span> 细胞复苏、传代及冻存标准流程.pdf 
        </a>
        <a href="/assets/protocol/cell_phenotype.pdf" class="pdf-link">
          <span class="icon">📄</span> 细胞表型实验.pdf 
        </a>
        <a href="/assets/protocol/ROS.pdf" class="pdf-link">
          <span class="icon">📄</span> 脂质过氧化检测.pdf 
        </a>
      </div>
    </details>

    <details>
    <summary>🧬 分子实验 (Molecular Experiments)</summary>
      <div style="margin-top: 10px;">
        <a href="/assets/protocol/western_blot.pdf" class="pdf-link">
          <span class="icon">📄</span> Western Blot 详细步骤.pdf 
        </a>
        <a href="/assets/protocol/extractRNA_re_qPCR.pdf" class="pdf-link">
          <span class="icon">📄</span> RNA 提取与逆转录 (RT-qPCR).pdf 
        </a>
        <a href="/assets/protocol/extract_plasmid.pdf" class="pdf-link">
          <span class="icon">📄</span> 质粒抽提与转化.pdf 
        </a>
        <a href="/assets/protocol/nu_cy.pdf" class="pdf-link">
          <span class="icon">📄</span> 核质分离.pdf 
        </a>
      </div>
    </details>

    <details>
    <summary>🐁 动物实验 (Animal Experiments)</summary>
      <div style="margin-top: 10px;">
        <a href="/assets/protocol/animal_tumor.pdf" class="pdf-link">
          <span class="icon">📄</span> c57皮下成瘤模型构建.pdf 
        </a>
      </div>
    </details>
    
    <details>
      <summary>💻 常用的生物学网站</summary>
      <div style="margin-top: 10px;">
         <a href="https://www.ncbi.nlm.nih.gov/" target="_blank" class="pdf-link"><span class="icon">🌐</span> NCBI (综合数据库)</a>
         <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" class="pdf-link"><span class="icon">🌐</span> PubMed (文献检索)</a>
         </div>
    </details>
</div>