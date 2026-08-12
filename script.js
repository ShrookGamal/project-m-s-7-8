document.addEventListener('DOMContentLoaded', () => {
    const trigger = document.querySelector('.mobile-trigger');
    const panel = document.querySelector('.side-panel');
    const closePanel = document.querySelector('.panel-close');
    const backdrop = document.querySelector('.panel-backdrop');
    const navLinks = document.querySelectorAll('.nav-link');
    const panelLinks = document.querySelectorAll('.panel-link');
    const sections = document.querySelectorAll('section, div[id]');
    const header = document.querySelector('.master-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.height = '75px';
            header.style.background = 'rgba(251, 245, 221, 0.95)';
        } else {
            header.style.height = '90px';
            header.style.background = 'rgba(255, 255, 255, 0.35)';
        }

        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        panelLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    const togglePanel = () => {
        panel.classList.toggle('open');
        backdrop.style.display = panel.classList.contains('open') ? 'block' : 'none';
        document.body.style.overflow = panel.classList.contains('open') ? 'hidden' : 'auto';
    };

    trigger.addEventListener('click', togglePanel);
    closePanel.addEventListener('click', togglePanel);
    backdrop.addEventListener('click', togglePanel);

    [...navLinks, ...panelLinks].forEach(l => {
        l.addEventListener('click', () => {
            if (panel.classList.contains('open')) togglePanel();
        });
    });

    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 40;
        const y = (e.clientY / window.innerHeight) * 40;
        document.querySelectorAll('.moving-shape').forEach((shape, i) => {
            const shift = (i + 1) * 0.4;
            shape.style.transform = `translate(${x * shift}px, ${y * shift}px)`;
        });
    });
});
const luxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateX(0)";
        }
    });
}, { threshold: 0.2 });

const visual = document.querySelector('.lux-visual-part');
const text = document.querySelector('.lux-text-part');

visual.style.opacity = "0";
visual.style.transform = "translateX(-100px)";
visual.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";

text.style.opacity = "0";
text.style.transform = "translateX(100px)";
text.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";

luxObserver.observe(visual);
luxObserver.observe(text);
const luxCards = document.querySelectorAll('.service-lux-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

luxCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)";
    revealObserver.observe(card);
});

document.addEventListener('scroll', () => {
    const visibleCards = document.querySelectorAll('.service-lux-card.visible');
    visibleCards.forEach(card => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    });
});
const zenithItems = document.querySelectorAll('.zenith-item');

const zenithObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

zenithItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
    zenithObserver.observe(item);
});
const contactCards = document.querySelectorAll('.contact-glass-card, .location-glass-card');

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }, index * 200);
        }
    });
}, { threshold: 0.1 });

contactCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
    contactObserver.observe(card);
});
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            galleryItems.forEach(item => {
                const itemType = item.getAttribute('data-type');
                
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    if (filterValue === 'all' || filterValue === itemType) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.display = 'none';
                    }
                }, 300);
            });
        });
    });
});