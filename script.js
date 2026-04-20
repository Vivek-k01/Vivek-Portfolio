let typed = new Typed(".texted", {
    strings: ["Frontend Developer", "Web Developer", "Software Tester", "FullStack Developer"],
    typeSpeed: 90,
    backSpeed: 70,
    backDelay: 500,
    loop: true
});


  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx - 6 + 'px';
    cursor.style.top = my - 6 + 'px';
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx - 18 + 'px';
    ring.style.top = ry - 18 + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.transform = 'scale(2)'; ring.style.transform = 'scale(1.5)'; });
    el.addEventListener('mouseleave', () => { cursor.style.transform = 'scale(1)'; ring.style.transform = 'scale(1)'; });
  });

  // Scroll reveal
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // Navbar active state
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.style.color = a.href.includes(current) ? 'var(--accent)' : '';
    });
  });

 

  //  Certificate Zoom Logic
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("certModal");
    const fullImg = document.getElementById("fullImg");
    const closeBtn = document.querySelector(".close-modal");

    // Jab certificate photo pe click ho
    document.querySelectorAll('.certificate-card img').forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            fullImg.src = this.src;
            // Scroll band karein jab zoom ho
            document.body.style.overflow = "hidden"; 
        }
    });

    // Jab 'X' pe click ho toh band karein
    closeBtn.onclick = function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    // Jab background (white area) pe click ho toh bhi band ho jaye
    modal.onclick = function(event) {
        if (event.target !== fullImg) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
});

 card.addEventListener('click', (e) => {
    // Agar click link par hua hai, toh JavaScript ko rok do
    if (e.target.tagName === 'A' || e.target.closest('a')) {
        return; 
    }
    // Baaki card animation ka code yahan...
  });
