(function () {
  'use strict';
  var shots = [
    { src: 'images/pulsepay-executive-overview.webp', cap: 'PulsePay | Executive Overview', alt: 'PulsePay Executive Overview Power BI dashboard: total users, successful transactions, acquisition quality by channel, weekly transacting users and onboarding to activation funnel' },
    { src: 'images/pulsepay-growth-retention.webp', cap: 'PulsePay | Growth & Retention', alt: 'PulsePay Growth and Retention dashboard: D30 retention by early behavior and acquisition channel, monthly cohort retention and growth diagnosis' },
    { src: 'images/pulsepay-kyc-incident.webp', cap: 'PulsePay | KYC Incident Investigation', alt: 'PulsePay KYC Incident Investigation dashboard: document upload error rate and KYC completion by app version, with incident diagnosis' },
    { src: 'images/pulsepay-experiment-lab.webp', cap: 'PulsePay | Experiment Lab', alt: 'PulsePay Experiment Lab dashboard: KYC completion treatment vs control, statistical analysis, sample ratio mismatch check and experiment decision' }
  ];
  var dlg = document.getElementById('lightbox');
  var img = document.getElementById('lb-img');
  var cap = document.getElementById('lb-cap');
  var current = 0;

  function show(i) {
    current = (i + shots.length) % shots.length;
    img.src = shots[current].src;
    img.alt = shots[current].alt;
    cap.textContent = shots[current].cap + ' (' + (current + 1) + ' of ' + shots.length + ')';
  }
  function open(i) {
    show(i);
    if (typeof dlg.showModal === 'function') { dlg.showModal(); }
    else { window.open(shots[current].src, '_blank', 'noopener'); }
  }

  document.querySelectorAll('.shot[data-index]').forEach(function (b) {
    b.addEventListener('click', function () { open(parseInt(b.getAttribute('data-index'), 10)); });
  });
  document.getElementById('lb-prev').addEventListener('click', function () { show(current - 1); });
  document.getElementById('lb-next').addEventListener('click', function () { show(current + 1); });
  document.getElementById('lb-close').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) { dlg.close(); } });
  dlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { show(current - 1); }
    if (e.key === 'ArrowRight') { show(current + 1); }
  });
})();
