/* Oulala Doula — scroll-reveal motion (progressive enhancement).
   Adds gentle fade/rise to sections, cards and images as they enter view.
   Honors prefers-reduced-motion and degrades safely (content always shown). */
(function () {
  'use strict';

  var mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq && mq.matches) return;                    // reduced motion: leave content visible
  if (!('IntersectionObserver' in window)) return; // unsupported: leave content visible

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add('om-in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });

  function mark(el) {
    if (el.dataset.omR) return;
    el.dataset.omR = '1';
    el.classList.add('om-reveal');
    io.observe(el);
  }

  function scan() {
    var root = document.getElementById('root');
    if (!root) return;
    var nodes = root.querySelectorAll('section, .om-card, .om-photo');
    for (var i = 0; i < nodes.length; i++) mark(nodes[i]);
  }

  function safety() {
    // Guarantee nothing remains hidden if the observer ever misses an element.
    var hidden = document.querySelectorAll('.om-reveal:not(.om-in)');
    for (var i = 0; i < hidden.length; i++) {
      var r = hidden[i].getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) hidden[i].classList.add('om-in');
    }
  }

  function start() {
    scan();
    var root = document.getElementById('root');
    if (root) {
      new MutationObserver(scan).observe(root, { childList: true, subtree: true });
    }
    var tries = 0;
    var iv = setInterval(function () { scan(); if (++tries > 20) clearInterval(iv); }, 150);
    setTimeout(safety, 2500);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
