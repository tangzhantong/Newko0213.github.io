/**
 * Gallery Lightbox — 纯 JS 全屏图片浏览器
 * 支持点击放大、左右切换、键盘 ESC/方向键
 */
(function () {
  'use strict';

  let images = [];
  let currentIndex = 0;
  let overlay = null;

  function init() {
    const galleryImages = document.querySelectorAll('.gallery-img');
    if (galleryImages.length === 0) return;

    images = Array.from(galleryImages);

    // 创建 Lightbox DOM
    overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <button class="lightbox-close" aria-label="Close">&times;</button>
      <button class="lightbox-nav lightbox-prev" aria-label="Previous">&#8249;</button>
      <img class="lightbox-img" src="" alt="">
      <button class="lightbox-nav lightbox-next" aria-label="Next">&#8250;</button>
      <div class="lightbox-caption"></div>
    `;
    document.body.appendChild(overlay);

    const imgEl = overlay.querySelector('.lightbox-img');
    const captionEl = overlay.querySelector('.lightbox-caption');
    const closeBtn = overlay.querySelector('.lightbox-close');
    const prevBtn = overlay.querySelector('.lightbox-prev');
    const nextBtn = overlay.querySelector('.lightbox-next');

    // 点击图片打开
    images.forEach(function (img, index) {
      img.addEventListener('click', function () {
        currentIndex = index;
        show(imgEl, captionEl);
      });
    });

    // 关闭
    closeBtn.addEventListener('click', hide);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) hide();
    });

    // 导航
    prevBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      show(imgEl, captionEl);
    });
    nextBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      show(imgEl, captionEl);
    });

    // 键盘
    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'Escape') hide();
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        show(imgEl, captionEl);
      }
      if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        show(imgEl, captionEl);
      }
    });
  }

  function show(imgEl, captionEl) {
    var src = images[currentIndex].src;
    var card = images[currentIndex].closest('.gallery-card');
    var title = card ? card.querySelector('.gallery-title') : null;
    var desc = card ? card.querySelector('.gallery-desc') : null;
    imgEl.src = src;
    imgEl.alt = title ? title.textContent : '';
    captionEl.textContent = title ? title.textContent + (desc ? ' — ' + desc.textContent.trim() : '') : '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hide() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
