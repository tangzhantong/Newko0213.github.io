/**
 * Scroll Reveal — 滚动揭示动画
 * 为带有 .reveal class 的元素在进入视口时添加 .revealed
 */
(function () {
    'use strict';

    function init() {
        var reveals = document.querySelectorAll('.reveal');
        if (reveals.length === 0) return;

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px'
            });

            reveals.forEach(function (el) {
                observer.observe(el);
            });
        } else {
            // Fallback: 直接显示
            reveals.forEach(function (el) {
                el.classList.add('revealed');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
