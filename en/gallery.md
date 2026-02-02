---
layout: default
title: "Gallery"
permalink: /en/gallery/
---

<style>
/* --- 1. 导航栏透明化 (沉浸式效果) --- */
header.site-header {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    background-color: transparent !important;
    border-bottom: none !important;
    z-index: 1000;
}
.site-title, .site-title:visited, .site-nav .page-link {
    color: #ffffff !important;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}
.site-nav .menu-icon svg path {
    fill: #ffffff !important;
}

/* --- 2. Hero Banner 顶部大图 --- */
.hero-wrapper {
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: -60px; /* 抵消 default 布局的顶部间距 */
    margin-bottom: 60px;
}

.hero-banner {
    width: 100%;
    height: 400px;
    background-image: url('/assets/images/banner1.jpg'); /* 建议：换一张风景或显微摄影大图 */
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); 
}

.hero-title {
    position: relative;
    z-index: 2;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 2px;
    font-family: "Helvetica Neue", sans-serif;
}

/* --- 3. Gallery 卡片样式 (极简、直角、学术风) --- */
.gallery-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto 60px auto;
}

.gallery-card {
    width: 350px; /* 稍微加宽，适合展示摄影作品 */
    background: #fff;
    border: 1px solid #eaeaea; /* 极细的灰色边框 */
    border-radius: 0; /* 【关键】直角，拒绝圆角 */
    padding-bottom: 15px;
    transition: all 0.3s ease;
}

.gallery-card:hover {
    border-color: #999; /* 悬停时边框加深 */
    transform: translateY(-2px); /* 极其微小的上浮 */
}

.gallery-img {
    width: 100%;
    height: 240px; /* 统一高度 */
    object-fit: cover;
    display: block;
    border-radius: 0; /* 直角 */
    filter: grayscale(20%); /* 默认加一点点灰度，显得更高级 */
    transition: filter 0.3s;
}

.gallery-card:hover .gallery-img {
    filter: grayscale(0%); /* 悬停恢复全彩 */
}

.gallery-info {
    padding: 15px 15px 0 15px;
}

.gallery-title {
    margin: 0 0 6px 0;
    font-size: 16px;
    font-weight: 600;
    color: #222;
    font-family: "Helvetica Neue", sans-serif;
}

.gallery-desc {
    font-size: 13px;
    color: #666;
    line-height: 1.6;
    margin: 0;
    font-family: sans-serif;
}

/* 隐藏系统默认页脚 */
footer, .site-footer {
    display: none !important;
}
</style>

<div class="hero-wrapper">
    <div class="hero-banner">
        <div class="hero-overlay"></div>
        <h1 class="hero-title">Gallery</h1>
    </div>
</div>

<p style="text-align: center; color: #666; margin-bottom: 50px; font-family: serif; font-style: italic; font-size: 1.1rem;">
<br>
  <small style="font-size: 0.9rem;">Capturing moments in science and life.</small>
</p>

<div class="gallery-container">

  <div class="gallery-card">
    <img src="/assets/images/songrong_0126.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Going Home~</h3>
      <p class="gallery-desc">
        Jan 25, 2026 | Songrong ended his month-long boarding life. Bless. (Grown up a bit hehe)
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/dabao_new_bed.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">New Bedroom 😌</h3>
      <p class="gallery-desc">
        Jan 2026 | The winter in the north is cold, parents prepared a new little house for Dabao (kneading...)
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/pic_haoyu_cat.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Cat Cafe Time</h3>
      <p class="gallery-desc">
        Jan 2026 | We visit cat cafes almost every trip, cats are the elves of the world.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/banner1.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Qingdao Underwater World</h3>
      <p class="gallery-desc">
        Jan 2026 | At the beginning of the new year, Haoyu and I visited Qingdao Underwater World. I love the sea.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/dabao_sleep.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Sleep 😴</h3>
      <p class="gallery-desc">
        Aug 2025 | Dabao: Don't get caught by me!
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/dabao_home.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">New Home 👋</h3>
      <p class="gallery-desc">
        Jan 2025 | Dabao just arrived home, curious about everything.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/dabao_go_gome.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Going Home~</h3>
      <p class="gallery-desc">
        Jan 2025 | Due to my job change, I couldn't accompany Dabao. My parents suggested sending him home, took this on the way, heart hurts 🥹.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/banner2.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Xuanwu Lake Trip</h3>
      <p class="gallery-desc">
        Apr 2025 | Nanjing in cherry blossom season is beautiful (don't miss it around Qingming Festival!).
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/banner4.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Moganshan Homestay</h3>
      <p class="gallery-desc">
        Apr 2024 | Playing in Moganshan, little warmth in the homestay.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/sister_rabbit.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Little Rabbit</h3>
      <p class="gallery-desc">
        2024 | Sister brought a rabbit to the lab, very obedient, we all like it!
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/cell_exp.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Cell Experiment...</h3>
      <p class="gallery-desc">
        Sep 2024 | After 6 months of basic experiments, I finally started cell experiments, excited and careful.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/baby_dabao.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Baby Dabao</h3>
      <p class="gallery-desc">
        Jun 2024 | I adopted Dabao. Is the coat color different from the future?
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/lab_western.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Western Blot</h3>
      <p class="gallery-desc">
        2024 | Successfully transferring protein from Gel to Membrane gave me a sense of accomplishment.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/lab_cat.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Lab Cat (Mom)</h3>
      <p class="gallery-desc">
         Met the cat mom at the beginning of my study at IPH, she healed me during that time.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/lab_babycat.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Lab Cat (Kitten)</h3>
      <p class="gallery-desc">
        Cat mom's child, sent to the rescue station with mom, wishing them happiness!
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/seu.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">SEU Auditorium</h3>
      <p class="gallery-desc">
        2024 | Landmark building of Sipailou Campus.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/autumn.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">SEU Autumn</h3>
      <p class="gallery-desc">
        2024 | Autumn scenery of Southeast University Sipailou Campus.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/sunny.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">SEU Spring</h3>
      <p class="gallery-desc">
        2024 | Spring scenery of Southeast University Sipailou Campus.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/shiyigong.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Prof. Shi Yigong's Lecture</h3>
      <p class="gallery-desc">
        Jan 2024 | Lucky to grab a ticket for Prof. Shi Yigong's lecture, even at Jiulonghu Campus. I am full of interest in biology!
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/seu_sipailou_campus_snow.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">SEU Snow</h3>
      <p class="gallery-desc">
        Dec 2023 | Nanjing snowing, beautiful Sipailou.
      </p>
    </div>
  </div>

  <div class="gallery-card">
    <img src="/assets/images/seu_sipailou_campus_doudou.jpg" class="gallery-img" alt="Photo">
    <div class="gallery-info">
      <h3 class="gallery-title">Doudou</h3>
      <p class="gallery-desc">
        Top stream of Sipailou - Doudou, adopted now, bless!
      </p>
    </div>
  </div>

</div>