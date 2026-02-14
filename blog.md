---
layout: default
title: "Blog"
lang: en
permalink: /blog/
header_style: white
description: "Tang Zhantong's blog - research notes, technical tips, and life reflections."
---

<style>
.blog-container {
    max-width: 800px;
    margin: 60px auto;
    padding: 0 20px;
}

.blog-post-item {
    padding: 30px 0;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.2s;
}

.blog-post-item:hover {
    background-color: rgba(0,0,0,0.01);
}

.blog-post-item a {
    text-decoration: none;
    color: inherit;
}

.blog-post-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
}

.blog-post-meta {
    font-size: 13px;
    color: #999;
    margin-bottom: 10px;
}

.blog-post-excerpt {
    font-size: 15px;
    color: #555;
    line-height: 1.7;
}

.blog-empty {
    text-align: center;
    color: #999;
    font-style: italic;
    padding: 80px 20px;
    font-size: 1.1rem;
}
</style>

<div class="hero-wrapper">
    <div class="hero-banner" style="background-image: url('/assets/images/banner3.jpg');">
        <div class="hero-overlay"></div>
        <h1 class="hero-title">Blog</h1>
    </div>
</div>

<div class="blog-container">

{% if site.posts.size > 0 %}
  {% for post in site.posts %}
  <div class="blog-post-item reveal">
    <a href="{{ post.url | relative_url }}">
      <h2 class="blog-post-title">{{ post.title }}</h2>
      <div class="blog-post-meta">{{ post.date | date: "%B %d, %Y" }}</div>
      <p class="blog-post-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
    </a>
  </div>
  {% endfor %}
{% else %}
  <div class="blog-empty reveal">
    <p>✍️ Coming soon... Stay tuned for research notes and reflections!</p>
  </div>
{% endif %}

</div>
