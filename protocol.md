---
layout: page
title: "🧪 Protocol"
permalink: /protocol/
---

<style>
  details {
    background-color: #ffffff;
    border-bottom: 1px solid #eee; /* 极简底边框 */
    padding: 15px 5px;
    margin-bottom: 5px;
  }
  summary {
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    color: #333;
    list-style: none; /* 隐藏默认三角 */
    display: flex;
    align-items: center;
    transition: color 0.2s;
  }
  summary:hover {
    color: #27ae60; /* 鼠标悬停变绿色，呼应 Protocol 的主题色 */
  }
  
  /* 自定义加号/减号图标 */
  summary::before {
    content: "+";
    font-size: 20px;
    margin-right: 12px;
    color: #999;
    font-weight: normal;
  }
  details[open] summary::before {
    content: "−";
  }

  /* PDF 文件链接样式 */
  .pdf-link {
    display: block;
    padding: 10px 0 10px 36px; /* 缩进对齐 */
    color: #586069;
    text-decoration: none;
    border-bottom: 1px dashed #f0f0f0; /* 虚线分隔 */
    font-size: 15px;
  }
  .pdf-link:hover {
    color: #27ae60; /* 悬停变绿 */
    background-color: #fafafa;
  }
  .icon { margin-right: 8px; }
</style>

<details>
<summary>🧫 细胞实验 (Cell Experiments)</summary>
  <div style="margin-top: 10px;">
    <a href="/assets/files/cell_culture_sop.pdf" class="pdf-link" download>
      <span class="icon">📄</span> 细胞复苏与传代标准流程.pdf (示例)
    </a>
    <a href="#" class="pdf-link">
      <span class="icon">📄</span> 细胞划痕与迁移实验.pdf (待上传)
    </a>
  </div>
</details>

<details>
<summary>🧬 分子实验 (Molecular Experiments)</summary>
  <div style="margin-top: 10px;">
    <a href="#" class="pdf-link">
      <span class="icon">📄</span> Western Blot 详细步骤.pdf (待上传)
    </a>
    <a href="#" class="pdf-link">
      <span class="icon">📄</span> RNA 提取与逆转录 (RT-qPCR).pdf (待上传)
    </a>
    <a href="#" class="pdf-link">
      <span class="icon">📄</span> 质粒抽提与转化.pdf (待上传)
    </a>
  </div>
</details>

<details>
<summary>🐁 动物实验 (Animal Experiments)</summary>
  <div style="margin-top: 10px;">
    <a href="#" class="pdf-link">
      <span class="icon">📄</span> 裸鼠皮下成瘤模型构建.pdf (待上传)
    </a>
    <a href="#" class="pdf-link">
      <span class="icon">📄</span> 尾静脉注射给药流程.pdf (待上传)
    </a>
  </div>
</details>