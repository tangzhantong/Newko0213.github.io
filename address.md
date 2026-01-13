---
layout: default
title: "Contact"
permalink: /address/
---

<style>
/* --- 1. 导航栏透明化 (保持沉浸式) --- */
header.site-header {
    position: absolute !important;
    top: 0; left: 0; width: 100%;
    background-color: transparent !important;
    border-bottom: none !important;
    z-index: 1000;
}
.site-title, .site-title:visited, .site-nav .page-link {
    color: #ffffff !important;
    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
}
.site-nav .menu-icon svg path { fill: #ffffff !important; }

/* --- 2. Hero Banner --- */
.hero-wrapper {
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: -60px;
    margin-bottom: 80px; /* 增加底部间距，让呼吸感更强 */
}

.hero-banner {
    width: 100%;
    height: 450px;
    /* 背景图：建议使用校园风景或较为抽象的建筑图 */
    background-image: url('/assets/images/seu_sipailou_campus_doudou.jpg'); 
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}

.hero-overlay {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
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

/* --- 3. 极简内容区域 --- */
.contact-container {
    max-width: 900px;
    margin: 0 auto 80px auto;
    padding: 0 20px;
    text-align: center; /* 居中对齐，突出极简感 */
}

.info-group {
    margin-bottom: 50px;
}

.info-label {
    font-size: 12px;
    font-weight: 700;
    color: #999; /* 浅灰色标签，不抢视觉 */
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
}

.info-value {
    font-size: 20px;
    color: #333;
    font-weight: 400; /* 字体不要太粗，显得优雅 */
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.6;
}

.info-sub {
    font-size: 14px;
    color: #666;
    margin-top: 5px;
}

/* 邮箱链接样式 */
.mail-link {
    color: #333;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s;
}
.mail-link:hover {
    border-bottom: 1px solid #333; /* 悬停时出现下划线 */
}

/* 地图容器 */
.map-wrapper {
    width: 100%;
    height: 400px;
    background: #f0f0f0;
    /* 没有任何边框和阴影，纯粹的矩形 */
}

/* 隐藏 Footer */
footer, .site-footer { display: none !important; }
</style>

<div class="hero-wrapper">
    <div class="hero-banner">
        <div class="hero-overlay"></div>
        <h1 class="hero-title">Contact</h1>
    </div>
</div>

<div class="contact-container">
    
    <div class="info-group">
        <span class="info-label">Address</span>
        <div class="info-value">东南大学 医学院 综合楼 4楼 422室</div>
        <div class="info-sub">江苏省 南京市 鼓楼区</div>
    </div>

    <div style="display: flex; justify-content: center; gap: 60px; flex-wrap: wrap;">
        
        <div class="info-group">
            <span class="info-label">Email</span>
            <div class="info-value">
                <a href="mailto:zhantongtang@gmail.com" class="mail-link">zhantongtang@gmail.com</a>
            </div>
        </div>

        <div class="info-group">
            <span class="info-label">Phone</span>
            <div class="info-value">187 0042 2328</div>
        </div>

    </div>

</div>

<div class="map-wrapper">
    <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.1627958992986!2d118.77926107623696!3d32.062491573966555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b5969562768569%3A0x6a0c0e7d56396e0!2sSoutheast%20University%20Dingjiaqiao%20Campus!5e0!3m2!1sen!2scn!4v1705140000000!5m2!1sen!2scn" 
        width="100%" 
        height="100%" 
        style="border:0; filter: grayscale(10%);" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</div>