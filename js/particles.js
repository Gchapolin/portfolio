/**
 * Ember/torch particle system — Canvas overlay
 */
(function () {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animId;
  let paused = false;
  const MAX_PARTICLES = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: canvas.height + 10,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: -(Math.random() * 1.2 + 0.4),
      opacity: Math.random() * 0.7 + 0.3,
      decay: Math.random() * 0.003 + 0.002,
      hue: Math.random() > 0.5 ? 30 : 15, // gold or ember
    };
  }

  function update() {
    if (paused) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Spawn new particles
    if (particles.length < MAX_PARTICLES && Math.random() > 0.6) {
      particles.push(createParticle());
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.speedX;
      p.y += p.speedY;
      p.opacity -= p.decay;

      // Slight horizontal drift
      p.speedX += (Math.random() - 0.5) * 0.05;

      if (p.opacity <= 0 || p.y < -10) {
        particles.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${p.opacity})`;
      ctx.fill();

      // Glow effect
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, ${p.opacity * 0.15})`;
      ctx.fill();
    }

    animId = requestAnimationFrame(update);
  }

  // Pause when tab is not visible
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else if (!paused) {
      update();
    }
  });

  window.addEventListener('resize', resize);
  resize();
  update();

  // Expose pause/resume for theme toggle
  window.particlesControl = {
    pause: function () {
      paused = true;
      cancelAnimationFrame(animId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles = [];
    },
    resume: function () {
      if (!paused) return;
      paused = false;
      update();
    }
  };
})();
