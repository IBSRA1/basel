// Global Variables
let currentTheme = 'light';
let currentLang = 'en';
let isMouseMoving = false;

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    // Update theme icon
    const icon = themeToggle.querySelector('i');
    icon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
});

// Language Toggle
const langToggle = document.getElementById('lang-toggle');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    body.setAttribute('data-lang', currentLang);
    localStorage.setItem('language', currentLang);
    
    // Update all translatable elements
    updateLanguage();
});

// Update Language Function
function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-ar]');
    elements.forEach(element => {
        element.textContent = element.getAttribute(`data-${currentLang}`);
    });
    
    // Update document direction
    document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
}

// Cursor Follower
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    if (!isMouseMoving) {
        isMouseMoving = true;
        cursorFollower.style.opacity = '1';
    }
    
    cursorFollower.style.left = e.clientX - 10 + 'px';
    cursorFollower.style.top = e.clientY - 10 + 'px';
});

document.addEventListener('mouseleave', () => {
    cursorFollower.style.opacity = '0';
    isMouseMoving = false;
});

// Dynamic scroll effects
let ticking = false;

function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-cube, .circuit-line, .profile-pic-large');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Update cursor follower based on scroll
    if (scrolled > 100) {
        cursorFollower.style.transform = 'scale(1.5)';
    } else {
        cursorFollower.style.transform = 'scale(1)';
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Project Data
const projectsData = {
    'lcd-advertisement': {
        title: {
            en: 'Bluetooth LCD Advertisement Display',
            ar: 'شاشة إعلانات LCD بلوتوث'
        },
        description: {
            en: 'A wireless display system that allows you to send custom messages to an LCD screen using your smartphone via Bluetooth. Perfect for digital signage, advertisements, or information displays in shops, restaurants, or offices.',
            ar: 'نظام عرض لاسلكي يتيح لك إرسال رسائل مخصصة إلى شاشة LCD باستخدام هاتفك الذكي عبر البلوتوث. مثالي للوحات رقمية أو إعلانات أو عروض معلومات في المحلات أو المطاعم أو المكاتب.'
        },
        features: {
            en: [
                'Wireless message transmission via Bluetooth',
                '16x2 I2C LCD display for clear text',
                'Mobile app integration for easy control',
                'Real-time message updates',
                'Customizable display settings',
                'Low power consumption'
            ],
            ar: [
                'نقل الرسائل لاسلكياً عبر البلوتوث',
                'شاشة LCD 16x2 I2C لعرض نص واضح',
                'تكامل مع التطبيق المحمول للتحكم السهل',
                'تحديثات الرسائل في الوقت الفعلي',
                'إعدادات عرض قابلة للتخصيص',
                'استهلاك طاقة منخفض'
            ]
        },
        technologies: ['Arduino Uno', 'HC-05 Bluetooth', 'I2C LCD', 'Mobile App'],
        image: 'c:\\Users\\Orange\\OneDrive\\Desktop\\basel\\advertisment lcd\\WhatsApp Image 2025-10-27 at 09.46.19.jpeg',
        code: `#include <LiquidCrystal_I2C.h>
#include <SoftwareSerial.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);
SoftwareSerial bluetooth(10, 11); // RX, TX

String message = "Welcome!";
String line1 = "";
String line2 = "";

void setup() {
  lcd.init();
  lcd.backlight();
  bluetooth.begin(9600);
  Serial.begin(9600);
  
  lcd.setCursor(0, 0);
  lcd.print("Bluetooth LCD");
  lcd.setCursor(0, 1);
  lcd.print("Ready...");
}

void loop() {
  if (bluetooth.available()) {
    message = bluetooth.readString();
    message.trim();
    
    if (message == "CLEAR") {
      lcd.clear();
    } else if (message == "BACKLIGHT ON") {
      lcd.backlight();
    } else if (message == "BACKLIGHT OFF") {
      lcd.noBacklight();
    } else {
      // Split message into two lines
      int pipeIndex = message.indexOf('|');
      if (pipeIndex != -1) {
        line1 = message.substring(0, pipeIndex);
        line2 = message.substring(pipeIndex + 1);
      } else {
        line1 = message;
        line2 = "";
      }
      
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print(line1);
      lcd.setCursor(0, 1);
      lcd.print(line2);
    }
    
    Serial.println("Received: " + message);
  }
}`
    },
    'distance-alarm': {
        title: {
            en: 'Ultrasonic Distance Alert System',
            ar: 'نظام تنبيه المسافة بالموجات فوق الصوتية'
        },
        description: {
            en: 'An intelligent proximity warning system that uses ultrasonic sensors to detect objects and provides multi-level audio alerts. Perfect for parking assistance, obstacle detection, and security applications.',
            ar: 'نظام تحذير القرب الذكي الذي يستخدم أجهزة استشعار الموجات فوق الصوتية للكشف عن الأشياء ويوفر تنبيهات صوتية متعددة المستويات. مثالي لمساعدة الركن وكشف العوائق وتطبيقات الأمان.'
        },
        features: {
            en: [
                'Multi-zone distance detection (10cm-100cm)',
                'Variable audio alert intensity',
                'Real-time distance monitoring',
                'Adjustable sensitivity settings',
                'Serial monitor feedback',
                'Low power consumption'
            ],
            ar: [
                'كشف المسافة متعدد المناطق (10سم-100سم)',
                'شدة تنبيه صوتي متغيرة',
                'مراقبة المسافة في الوقت الفعلي',
                'إعدادات حساسية قابلة للتعديل',
                'تغذية راجعة عبر المراقب التسلسلي',
                'استهلاك طاقة منخفض'
            ]
        },
        technologies: ['HC-SR04 Sensor', 'Arduino Uno', 'Buzzer', 'Multi-zone Alert'],
        image: 'c:\\Users\\Orange\\OneDrive\\Desktop\\basel\\distance alarm snesor\\WhatsApp Image 2025-10-27 at 09.15.46.jpeg',
        code: `#include <NewPing.h>

#define TRIGGER_PIN 9
#define ECHO_PIN 10
#define BUZZER_PIN 8
#define MAX_DISTANCE 100

NewPing sonar(TRIGGER_PIN, ECHO_PIN, MAX_DISTANCE);

const int VERY_CLOSE = 10;  // cm
const int CLOSE = 20;       // cm
const int MEDIUM = 50;      // cm
const int FAR = 100;        // cm

void setup() {
  Serial.begin(9600);
  pinMode(BUZZER_PIN, OUTPUT);
  Serial.println("Distance Alert System Started");
}

void loop() {
  unsigned int distance = sonar.ping_cm();
  
  if (distance == 0) {
    distance = MAX_DISTANCE;
  }
  
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  
  if (distance < VERY_CLOSE) {
    // Critical - Continuous beeping
    tone(BUZZER_PIN, 2000);
    Serial.println("CRITICAL - Very Close!");
  } else if (distance < CLOSE) {
    // Warning - Fast beeping
    tone(BUZZER_PIN, 1500);
    delay(200);
    noTone(BUZZER_PIN);
    delay(200);
    Serial.println("WARNING - Close!");
  } else if (distance < MEDIUM) {
    // Caution - Medium beeping
    tone(BUZZER_PIN, 1000);
    delay(500);
    noTone(BUZZER_PIN);
    delay(500);
    Serial.println("CAUTION - Medium distance");
  } else if (distance < FAR) {
    // Safe - Slow beeping
    tone(BUZZER_PIN, 800);
    delay(1000);
    noTone(BUZZER_PIN);
    delay(1000);
    Serial.println("SAFE - Far distance");
  } else {
    // Out of range - No sound
    noTone(BUZZER_PIN);
    Serial.println("Out of range");
  }
  
  delay(100);
}`
    }
    // Add more projects as needed
};

// Project Modal Functionality
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDesc = document.getElementById('modal-desc');
const modalFeatures = document.getElementById('modal-features');
const modalTechTags = document.getElementById('modal-tech-tags');
const modalCode = document.getElementById('modal-code');
const closeModal = document.getElementById('close-modal');

// Open modal function
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;
    
    modalTitle.textContent = project.title[currentLang];
    modalImage.src = project.image;
    modalImage.alt = project.title[currentLang];
    modalDesc.textContent = project.description[currentLang];
    
    // Update features
    modalFeatures.innerHTML = '';
    project.features[currentLang].forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });
    
    // Update technologies
    modalTechTags.innerHTML = '';
    project.technologies.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        modalTechTags.appendChild(tag);
    });
    
    // Update code
    modalCode.textContent = project.code;
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Highlight code
    if (typeof Prism !== 'undefined') {
        Prism.highlightElement(modalCode);
    }
}

// Close modal function
function closeProjectModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Event listeners for project cards
document.addEventListener('click', (e) => {
    if (e.target.closest('.view-details')) {
        const projectCard = e.target.closest('.project-card');
        const projectId = projectCard.getAttribute('data-project');
        openProjectModal(projectId);
    }
});

// Close modal events
closeModal.addEventListener('click', closeProjectModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .skill-item, .stat, .contact-method');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// 3D Tilt Effect for Project Cards
class TiltEffect {
    constructor(element) {
        this.element = element;
        this.init();
    }

    init() {
        this.element.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
        this.element.addEventListener('mousemove', this.handleMouseMove.bind(this));
        this.element.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
    }

    handleMouseEnter() {
        this.element.style.transition = 'none';
    }

    handleMouseMove(e) {
        const rect = this.element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    }

    handleMouseLeave() {
        this.element.style.transition = 'transform 0.3s ease';
        this.element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }
}

// Initialize tilt effect on project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        new TiltEffect(card);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-cube, .circuit-line');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Typing effect for hero title
class TypeWriter {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
        this.isDeleting = false;
        this.init();
    }

    init() {
        this.type();
    }

    type() {
        const currentText = this.text.substring(0, this.index);
        this.element.textContent = currentText;

        if (!this.isDeleting) {
            this.index++;
            if (this.index > this.text.length) {
                setTimeout(() => {
                    this.isDeleting = true;
                }, 2000);
            }
        } else {
            this.index--;
            if (this.index < 0) {
                this.isDeleting = false;
            }
        }

        setTimeout(() => this.type(), this.speed);
    }
}

// Initialize typing effect
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        new TypeWriter(heroTitle, originalText, 50);
    }
});

// Counter animation for stats
class CounterAnimation {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.start = 0;
        this.increment = target / (duration / 16);
        this.current = 0;
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animate();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(this.element);
    }

    animate() {
        const timer = setInterval(() => {
            this.current += this.increment;
            if (this.current >= this.target) {
                this.current = this.target;
                clearInterval(timer);
            }
            this.element.textContent = Math.floor(this.current) + '+';
        }, 16);
    }
}

// Initialize counter animations
document.addEventListener('DOMContentLoaded', () => {
    const statNumbers = document.querySelectorAll('.stat h4');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (!isNaN(target)) {
            new CounterAnimation(stat, target);
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #f44336, #da190b)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Particle system for hero background
class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.particleCount = 50;
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
        this.animate();
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
        `;
        
        particle.x = Math.random() * window.innerWidth;
        particle.y = Math.random() * window.innerHeight;
        particle.vx = (Math.random() - 0.5) * 0.5;
        particle.vy = (Math.random() - 0.5) * 0.5;
        
        particle.style.left = particle.x + 'px';
        particle.style.top = particle.y + 'px';
        
        this.container.appendChild(particle);
        this.particles.push(particle);
    }

    animate() {
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > window.innerWidth) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > window.innerHeight) {
                particle.vy *= -1;
            }
            
            particle.style.left = particle.x + 'px';
            particle.style.top = particle.y + 'px';
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        new ParticleSystem(heroSection);
    }
});

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', createScrollProgress);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
}, 16));

// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load saved preferences
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedLang = localStorage.getItem('language') || 'en';
    
    // Apply saved theme
    currentTheme = savedTheme;
    body.setAttribute('data-theme', currentTheme);
    const themeIcon = themeToggle.querySelector('i');
    themeIcon.className = currentTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    
    // Apply saved language
    currentLang = savedLang;
    body.setAttribute('data-lang', currentLang);
    updateLanguage();
    
    // Initialize cursor follower
    cursorFollower.style.opacity = '0';
    
    // Initialize particle system
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        new ParticleSystem(heroSection);
    }
    
    // Initialize counter animations
    const statNumbers = document.querySelectorAll('.stat h4');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        if (!isNaN(target)) {
            new CounterAnimation(stat, target);
        }
    });
    
    // Initialize lazy loading for images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
    
    // Initialize typing effect
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        new TypeWriter(heroTitle, originalText, 50);
    }
});

// Console welcome message
console.log(`
🚀 Welcome to Basel's Electronics Portfolio!
💡 Built with modern web technologies
🔧 Featuring Arduino projects and IoT solutions
📱 Fully responsive and interactive
🌙 Dark/Light mode support
🌍 English/Arabic translation
🎯 Interactive project modals
`);

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
