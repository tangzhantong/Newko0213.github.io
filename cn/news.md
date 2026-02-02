---
layout: default
title: News
lang: cn
permalink: /cn/news/
---

<style>
.news-page-container {
    position: relative;
    min-height: 100vh;
    width: 100%;
    /* Background Image */
    background: url("{{ '/assets/images/news_bg.jpg' | relative_url }}") no-repeat center center fixed;
    background-size: cover;
    padding-top: 100px; /* Space for fixed header */
}

/* Semi-transparent overlay to make text readable */
.news-overlay {
    background-color: rgba(255, 255, 255, 0.9);
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.news-list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.2s;
}

.news-list-item:hover {
    background-color: rgba(0,0,0,0.02);
}

.news-list-item a {
    display: flex;
    width: 100%;
    text-decoration: none;
    color: inherit;
    align-items: center;
}

.news-date {
    font-weight: bold;
    color: #555;
    margin-right: 30px;
    min-width: 120px;
}

.news-title {
    color: #333;
    font-weight: 500;
}
</style>

<div class="news-page-container">
    <div class="news-overlay">
        <h1 style="text-align: center; margin-bottom: 40px;">News</h1>
        <div class="news-list-item">
            <a href="/cn/greeting-2026/">
                <span class="news-date">2026-02-03</span>
                <span class="news-title">2026 Greeting</span>
            </a>
        </div>
    </div>
</div>
