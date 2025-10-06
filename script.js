// JavaScript Document

/*

TemplateMo 597 Neural Glass

https://templatemo.com/tm-597-neural-glass

*/

// Mobile menu functionality
        const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');

        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        });

        // Enhanced smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                
                // Skip if href is just "#"
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Enhanced header functionality
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            const scrolled = window.pageYOffset;
            
            if (scrolled > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Active menu item highlighting
        function updateActiveMenuItem() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav a');
            
            let currentSection = '';
            const scrollPos = window.pageYOffset + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveMenuItem);
        window.addEventListener('load', updateActiveMenuItem);

        // Parallax effect for geometric shapes
        window.addEventListener('scroll', () => {
            const shapes = document.querySelectorAll('.shape');
            const scrolled = window.pageYOffset;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.3;
                shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Neural lines pulse effect
        const neuralLines = document.querySelectorAll('.neural-line');
        setInterval(() => {
            neuralLines.forEach((line, index) => {
                setTimeout(() => {
                    line.style.opacity = '1';
                    line.style.transform = 'scaleX(1.2)';
                    setTimeout(() => {
                        line.style.opacity = '0.2';
                        line.style.transform = 'scaleX(0.5)';
                    }, 200);
                }, index * 300);
            });
        }, 2000);

        // Enhanced particle generation
       // Enhanced particle generator with multiple glowing shapes
// Neon particle generator (circle + triangle, big size)
function createBigNeonParticle() {
    const particle = document.createElement('div');
    particle.classList.add('big-neon');

    // Random shape: circle or triangle
    const shapes = ['circle', 'triangle'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    particle.dataset.shape = shape;

    // Random size (besar)
    const size = Math.random() * 100 + 50; // 50–150px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Neon color
    const colors = ['#00ffff', '#ff0080', '#8000ff', '#39ff14', '#ffea00'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.color = color;

    // Posisi awal random
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100vh';

    document.body.appendChild(particle);

    // Animasi gerakan naik
    const duration = Math.random() * 6000 + 5000; // 5–11 detik
    const driftX = (Math.random() - 0.5) * 300;

    particle.animate([
        { transform: 'translateY(0) translateX(0) scale(1)', opacity: 0.8 },
        { transform: `translateY(-120vh) translateX(${driftX}px) scale(${Math.random() * 1 + 1})`, opacity: 0 }
    ], {
        duration: duration,
        easing: 'ease-out'
    }).onfinish = () => particle.remove();
}

// Generate particles tiap 1.2 detik
setInterval(createBigNeonParticle, 1200);


// Generate particles
setInterval(createNeonParticle, 500);

        // Generate quantum particles
        setInterval(createQuantumParticle, 1500);

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe timeline items and hexagons
        document.querySelectorAll('.timeline-content, .hexagon').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(el);
        });

        // Form submission effect
        document.querySelector('.submit-btn').addEventListener('click', function(e) {
            e.preventDefault();
            this.innerHTML = 'TRANSMITTING...';
            this.style.background = 'linear-gradient(45deg, #8000ff, #00ffff)';
            
            setTimeout(() => {
                this.innerHTML = 'TRANSMISSION COMPLETE';
                this.style.background = 'linear-gradient(45deg, #00ff00, #00ffff)';
                
                setTimeout(() => {
                    this.innerHTML = 'TRANSMIT TO MATRIX';
                    this.style.background = 'linear-gradient(45deg, #00ffff, #ff0080)';
                }, 2000);
            }, 1500);
        });

        const icons = ["⭐", "⚡", "🔺", "❤️", "🔷", "🌟", "💎", "🔥"];
const container = document.body;

function createNeonShape() {
  const shape = document.createElement("div");
  shape.classList.add("neon-shape");
  shape.innerText = icons[Math.floor(Math.random() * icons.length)];

  // posisi random
  shape.style.left = Math.random() * window.innerWidth + "px";
  shape.style.top = Math.random() * window.innerHeight + "px";

  // ukuran random
  const size = Math.random() * 40 + 20; // 20px - 60px
  shape.style.fontSize = size + "px";

  // warna glow random
  const colors = ["#ff00ff", "#00ffff", "#ffe600", "#ff1493", "#00ff7f"];
  const glow = colors[Math.floor(Math.random() * colors.length)];
  shape.style.filter = `drop-shadow(0 0 8px ${glow}) drop-shadow(0 0 15px ${glow})`;

  container.appendChild(shape);

  // hilangkan setelah 5-8 detik
  setTimeout(() => {
    shape.remove();
  }, 6000);
}

// generate tiap 800ms
setInterval(createNeonShape, 800);
