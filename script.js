
    // Initialize Lucide icons
    lucide.createIcons();

    // Create floating particles
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 6 + 2;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
      particlesContainer.appendChild(particle);
    }

    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute('data-section');
        
        // Remove active class from all links and sections
        navLinks.forEach(l => l.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked link and target section
        link.classList.add('active');
        document.getElementById(targetSection).classList.add('active');
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
    // Scroll to Top Button functionality
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.onscroll = function() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    };
     scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
