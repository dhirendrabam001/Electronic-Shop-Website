// Login register and verify code


const container1 = document.querySelector('.container1');
const registerBtn1 = document.querySelector('.register-btn');
const loginBtn1 = document.querySelector('.login-btn');

registerBtn1.addEventListener('click', () => {
    container1.classList.add('active');
});

loginBtn1.addEventListener('click', () => {
    container1.classList.remove('active');
});




// Home Section scrolreveal
const sr = ScrollReveal({
    distance: '40px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false // We'll manually control resets
});

// Initial reveal for first slide
sr.reveal('.carousel-item.active .sr-title', { origin: 'top', delay: 200 });
sr.reveal('.carousel-item.active .sr-title-2', { origin: 'left', delay: 300 });
sr.reveal('.carousel-item.active .sr-text', { origin: 'right', delay: 400 });
sr.reveal('.carousel-item.active .home-btn', { origin: 'bottom', delay: 500 });

// On every slide transition
const carousel = document.querySelector('#carouselExampleDark');
if (carousel) {
    carousel.addEventListener('slid.bs.carousel', function (event) {
        const currentItem = event.relatedTarget;

        // Clean previous reveals (important for reanimation)
        sr.clean('.sr-title, .sr-title-2, .sr-text, .home-btn');

        // Re-apply reveals for current slide
        sr.reveal(currentItem.querySelectorAll('.sr-title'), { origin: 'top', delay: 200 });
        sr.reveal(currentItem.querySelectorAll('.sr-title-2'), { origin: 'left', delay: 300 });
        sr.reveal(currentItem.querySelectorAll('.sr-text'), { origin: 'right', delay: 400 });
        sr.reveal(currentItem.querySelectorAll('.home-btn'), { origin: 'bottom', delay: 500 });
    });
}

// About scrollreveal

ScrollReveal({ reset: false }); // set to true if you want repeat animations on scroll back

ScrollReveal().reveal('.about-left', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    opacity: 0,
});

ScrollReveal().reveal('.about-right', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    opacity: 0,
});

ScrollReveal().reveal('.animate-badge', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 400,
    easing: 'ease-in-out',
    opacity: 0,
    scale: 0.9
});

//   Service scrollreveal
ScrollReveal({ reset: false });

// Heading & paragraph
ScrollReveal().reveal('.services-main h2', {
    origin: 'top',
    distance: '40px',
    duration: 1000,
    delay: 100,
    easing: 'ease-in-out',
});

ScrollReveal().reveal('.services-main p', {
    origin: 'top',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
});

// Service cards with staggered delay
ScrollReveal().reveal('.services-main .card', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    interval: 150, // delay between each card
    easing: 'ease-out',
});

// Process scrollreveal
ScrollReveal().reveal('.process-content', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    delay: 200,
    easing: 'ease-out',
    interval: 200,
    reset: false // set to true if you want animation every time it enters viewport
});

ScrollReveal().reveal('.process-main p', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 400,
    interval: 200,
    opacity: 0,
    easing: 'ease-out',
    reset: false
});

ScrollReveal().reveal('.text-center h2, .text-center p', {
    origin: 'top',
    distance: '20px',
    duration: 800,
    delay: 100,
    opacity: 0,
    easing: 'ease-out',
    reset: false
});

//suggestion scrollreveal
ScrollReveal({
    reset: false, // animation will occur only once
    distance: '60px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.image-box', {
    origin: 'left'
});

ScrollReveal().reveal('.form-box', {
    origin: 'right'
});

// Optional for staggered form fields
ScrollReveal().reveal('.form-box form .mb-3, .form-box form .form-floating, .form-box form button', {
    interval: 200,
    origin: 'bottom',
    distance: '20px'
});

//Our plan scrollreval
ScrollReveal({
    reset: false, // Only animate once
    distance: '60px',
    duration: 1000,
    delay: 200
});

// Reveal the entire section title from the top
ScrollReveal().reveal('.repair-main .text-center', {
    origin: 'top'
});

// Reveal each pricing plan with staggered delay from bottom
ScrollReveal().reveal('.plan-info, .plan-infoo', {
    origin: 'bottom',
    interval: 200 // Stagger animation for each card
});

// team scrollreveal
ScrollReveal().reveal('.team-main h2', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 100,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.team-main p', {
    origin: 'top',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.team-info', {
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    interval: 200,
    easing: 'ease-in-out',
    reset: false
});


// counter section

// ScrollReveal animations for the section
ScrollReveal().reveal('.counter-main h2', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    delay: 100,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.counter-main p', {
    origin: 'top',
    distance: '20px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.counter-info', {
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    interval: 200,
    easing: 'ease-in-out',
    reset: false
});

// Counter Animation using IntersectionObserver
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    const duration = 2000;

    function animateCounter(counter) {
        const countSpan = counter.querySelector('.count');
        const target = +counter.getAttribute('data-target');
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);
            countSpan.innerText = value.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                countSpan.innerText = target.toLocaleString();
            }
        }

        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// Testimonials scrollreveal
ScrollReveal().reveal('.testimonial-content', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 200,
    easing: 'ease-out',
    interval: 200,
    reset: false, // Set to true if you want animation every time on scroll
});

// Global network
ScrollReveal().reveal('.reveal', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    delay: 100,
    opacity: 0,
    easing: 'ease-out',
    interval: 100,
    reset: false // set to true if you want the animation to repeat when scrolling back
});

// Brand section 
ScrollReveal().reveal('.brand-main h2', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 100,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.brand-main p', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.carousel-item .col-6', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000,
    interval: 200,  // delay between items
    easing: 'ease-in-out',
    reset: false
});

// Gallery section
ScrollReveal().reveal('.gallery-main h2', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 100,
    easing: 'ease-in-out',
    reset: false
});

ScrollReveal().reveal('.gallery-main p', {
    origin: 'bottom',
    distance: '30px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: false
});

// Reveal all image columns with staggered timing
ScrollReveal().reveal('.overlay-info', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    interval: 200,
    easing: 'ease-in-out',
    reset: false
});

// Guide section
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 200
});

// Heading and paragraph
ScrollReveal().reveal('.guide-main h2', { origin: 'top' });
ScrollReveal().reveal('.guide-main p', { origin: 'bottom' });

// Cards
ScrollReveal().reveal('.guide-main .card', {
    origin: 'bottom',
    interval: 200
});

// footer section
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1000,
    delay: 100
});

// Reveal footer columns one by one
ScrollReveal().reveal('.footer-main .col-md-3', {
    origin: 'bottom',
    interval: 200
});

// Optional: animate the footer title headings separately
ScrollReveal().reveal('.footer-main h4', {
    origin: 'left'
});

// Optional: animate logo and newsletter
ScrollReveal().reveal('.footer-main img', {
    origin: 'top'
});

ScrollReveal().reveal('.footer-main form', {
    origin: 'right'
});


// ChatBot

// document.addEventListener('DOMContentLoaded', function () {
//             const chatToggle = document.querySelector('.chatbot-toggle');
//             const chatWindow = document.querySelector('.chat-window');
//             const closeChat = document.querySelector('.close-chat');
//             const sendButton = document.getElementById('send-message');
//             const chatInput = document.getElementById('chat-input');
//             const chatMessages = document.querySelector('.chat-messages');
//             const suggestedBtns = document.querySelectorAll('.suggested-btn');
//             const notificationBadge = document.querySelector('.notification-badge');

//             // Initialize with chat closed
//             chatWindow.classList.remove('active');
//             notificationBadge.style.display = 'flex';

//             chatToggle.addEventListener('click', () => {
//                 chatWindow.classList.add('active');
//                 notificationBadge.style.display = 'none';
//             });

//             closeChat.addEventListener('click', () => {
//                 chatWindow.classList.remove('active');
//             });

//             sendButton.addEventListener('click', sendMessage);
//             chatInput.addEventListener('keypress', function (e) {
//                 if (e.key === 'Enter') sendMessage();
//             });

//             suggestedBtns.forEach(btn => {
//                 btn.addEventListener('click', () => {
//                     const question = btn.textContent;
//                     addMessage(question, 'user');
//                     simulateBotResponse(question);
//                 });
//             });

//             function sendMessage() {
//                 const message = chatInput.value.trim();
//                 if (!message) return;
//                 addMessage(message, 'user');
//                 chatInput.value = '';
//                 simulateBotResponse(message);
//             }

//             function addMessage(text, sender) {
//                 const msg = document.createElement('div');
//                 msg.className = `message ${sender}-message`;
//                 msg.textContent = text;
//                 chatMessages.appendChild(msg);
//                 chatMessages.scrollTop = chatMessages.scrollHeight;
//             }

//             function simulateBotResponse(userMessage) {
//                 setTimeout(() => {
//                     const reply = generateBotResponse(userMessage.toLowerCase());
//                     addMessage(reply, 'bot');
//                 }, 800);
//             }

//             function generateBotResponse(message) {
//                 if (message.includes('screen')) return 'Screen replacement costs ₹2,500–₹5,000 and takes 1-2 hours.';
//                 if (message.includes('battery')) return 'Battery replacement costs ₹1,500–₹2,500.';
//                 if (message.includes('appointment') || message.includes('book')) return 'You can book by calling 9848431087 or visiting Dipayal Bazzar Doti.';
//                 if (message.includes('warranty')) return 'Yes, we provide 90-day warranty on all repairs.';
//                 if (message.includes('hi') || message.includes('hello')) return 'Hello! How can I help you today?';
//                 if (message.includes('thank') || message.includes('thanks')) return 'You’re welcome! Feel free to ask anything.';
//                 return "I'm here to help with mobile repair. Please ask about pricing, services, or booking.";
//             }
//         });