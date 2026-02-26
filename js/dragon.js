/**
 * Interactive Dragon Cursor — SVG chain-physics dragon that follows the mouse
 * Only active in RPG (fun) theme. Based on shox404/Interactive-Dragon.
 */
(function () {
  var svgEl = document.getElementById('dragon-svg');
  var screenEl = document.getElementById('dragon-screen');
  if (!svgEl || !screenEl) return;

  var xmlns = 'http://www.w3.org/2000/svg';
  var xlinkns = 'http://www.w3.org/1999/xlink';

  var width = window.innerWidth;
  var height = window.innerHeight;
  var paused = true;
  var animId = null;

  var N = 20;
  var elems = [];
  for (var i = 0; i < N; i++) {
    elems[i] = { use: null, x: width / 2, y: height / 2 };
  }

  var pointer = { x: width / 2, y: height / 2 };
  var radm = Math.min(width, height) / 2 - 20;
  var frm = Math.random();
  var rad = 0;

  function prepend(use, idx) {
    var elem = document.createElementNS(xmlns, 'use');
    elems[idx].use = elem;
    elem.setAttributeNS(xlinkns, 'xlink:href', '#dragon-' + use);
    screenEl.prepend(elem);
  }

  // Create dragon segments: head, wings, spine
  for (var i = 1; i < N; i++) {
    if (i === 1) prepend('Cabeza', i);
    else if (i === 8 || i === 14) prepend('Aletas', i);
    else prepend('Espina', i);
  }

  // Track pointer
  window.addEventListener('pointermove', function (e) {
    if (paused) return;
    pointer.x = e.clientX;
    pointer.y = e.clientY;
    rad = 0;
  }, false);

  // Handle resize
  window.addEventListener('resize', function () {
    width = window.innerWidth;
    height = window.innerHeight;
    radm = Math.min(width, height) / 2 - 20;
  }, false);

  function run() {
    if (paused) return;
    animId = requestAnimationFrame(run);

    var e = elems[0];
    var ax = (Math.cos(3 * frm) * rad * width) / height;
    var ay = (Math.sin(4 * frm) * rad * height) / width;
    e.x += (ax + pointer.x - e.x) / 10;
    e.y += (ay + pointer.y - e.y) / 10;

    for (var i = 1; i < N; i++) {
      var seg = elems[i];
      var prev = elems[i - 1];
      var a = Math.atan2(seg.y - prev.y, seg.x - prev.x);
      seg.x += (prev.x - seg.x + (Math.cos(a) * (100 - i)) / 5) / 4;
      seg.y += (prev.y - seg.y + (Math.sin(a) * (100 - i)) / 5) / 4;
      var s = (162 + 4 * (1 - i)) / 100;
      seg.use.setAttributeNS(
        null,
        'transform',
        'translate(' + ((prev.x + seg.x) / 2) + ',' + ((prev.y + seg.y) / 2) +
        ') rotate(' + ((180 / Math.PI) * a) +
        ') scale(' + s + ',' + s + ')'
      );
    }

    if (rad < radm) rad++;
    frm += 0.003;

    // Idle drift toward center when no mouse movement
    if (rad > 60) {
      pointer.x += (width / 2 - pointer.x) * 0.05;
      pointer.y += (height / 2 - pointer.y) * 0.05;
    }
  }

  // Hide all segments off-screen
  function hideSegments() {
    for (var i = 1; i < N; i++) {
      if (elems[i].use) {
        elems[i].use.setAttributeNS(null, 'transform', 'translate(-9999,-9999)');
      }
    }
  }

  // Expose pause/resume for theme toggle
  window.dragonControl = {
    pause: function () {
      paused = true;
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
      hideSegments();
    },
    resume: function () {
      if (!paused) return;
      paused = false;
      // Reset all positions to center
      width = window.innerWidth;
      height = window.innerHeight;
      for (var i = 0; i < N; i++) {
        elems[i].x = width / 2;
        elems[i].y = height / 2;
      }
      pointer.x = width / 2;
      pointer.y = height / 2;
      rad = 0;
      run();
    }
  };

  // Pause when tab hidden
  document.addEventListener('visibilitychange', function () {
    if (document.hidden && !paused) {
      cancelAnimationFrame(animId);
      animId = null;
    } else if (!document.hidden && !paused) {
      run();
    }
  });
})();
