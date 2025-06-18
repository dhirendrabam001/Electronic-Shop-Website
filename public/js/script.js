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


// Chatbot functionality
document.addEventListener('DOMContentLoaded', function () {
    const chatToggle = document.querySelector('.chatbot-toggle');
    const chatWindow = document.querySelector('.chat-window');
    const closeChat = document.querySelector('.close-chat');
    const sendButton = document.getElementById('send-message');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.querySelector('.chat-messages');
    const suggestedBtns = document.querySelectorAll('.suggested-btn');
    const notificationBadge = document.querySelector('.notification-badge');

    // Open chat window
    chatToggle.addEventListener('click', function () {
        chatWindow.classList.add('active');
        notificationBadge.style.display = 'none';
    });

    // Close chat window
    closeChat.addEventListener('click', function () {
        chatWindow.classList.remove('active');
    });

    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            addMessage(message, 'user');

            // Clear input
            chatInput.value = '';

            // Simulate bot typing
            simulateBotResponse(message);
        }
    }

    // Send message on button click
    sendButton.addEventListener('click', sendMessage);

    // Send message on Enter key
    chatInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Suggested questions
    suggestedBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const question = this.textContent;
            addMessage(question, 'user');
            simulateBotResponse(question);
        });
    });

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Simulate bot response
    function simulateBotResponse(userMessage) {
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Remove typing indicator after delay and add bot response
        setTimeout(() => {
            typingIndicator.remove();

            // Generate bot response based on user message
            const botResponse = generateBotResponse(userMessage.toLowerCase());
            addMessage(botResponse, 'bot');

            // Add new suggested questions if needed
            if (userMessage.includes('service') || userMessage.includes('repair')) {
                addServiceSuggestions();
            }
        }, 1500);
    }

    // Generate bot response
    function generateBotResponse(userMessage) {
        if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
            return "Hello! How can I assist you with your mobile or electronic needs today?";
        } else if (userMessage.includes('service') || userMessage.includes('repair')) {
            return "We offer a wide range of repair services including screen replacement, battery replacement, water damage repair, software issues, and more. Which device do you need help with?";
        } else if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('how much')) {
            return "Repair costs vary based on the device and issue. For example:\n- Screen replacement: $40-$120\n- Battery replacement: $25-$60\n- Charging port repair: $30-$70\nCan you tell me which device you have?";
        } else if (userMessage.includes('appointment') || userMessage.includes('book') || userMessage.includes('schedule')) {
            return "Sure! You can book a repair appointment by calling us at 9848431087 or visit our shop at Dipayal Bazzar Doti. We're open Mon-Sat from 8:00 AM to 5:30 PM.";
        } else if (userMessage.includes('warranty')) {
            return "Yes, we provide a 90-day warranty on all repairs. This covers any issues related to the repair work we've done.";
        } else if (userMessage.includes('time') || userMessage.includes('long')) {
            return "Most common repairs take 1-2 hours. Complex issues might take up to 24 hours. We'll give you an estimated time when you bring in your device.";
        } else if (userMessage.includes('status') || userMessage.includes('track')) {
            return "To check your repair status, please provide your repair ticket number or contact us directly at 9848431087.";
        } else if (userMessage.includes('thank')) {
            return "You're welcome! Let me know if there's anything else I can help with.";
        } else {
            return "I'm here to help with your mobile and electronic needs! For specific questions about repairs, products, or services, feel free to ask. You can also call us at 9848431087 for immediate assistance.";
        }

    }
    function generateBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();

        const keywordMap = [
            {
                keywords: ['screen', 'display', 'cracked', 'broken screen'],
                response: "We offer screen replacement services for most devices. It usually takes 1-2 hours and costs between $40-$120 depending on your model."
            },
            {
                keywords: ['battery', 'power', 'charging issue', 'not charging'],
                response: "We replace mobile batteries and fix charging issues. Battery replacement typically costs $25–$60."
            },
            {
                keywords: ['water', 'wet', 'liquid', 'water damage'],
                response: "Yes, we repair water-damaged phones. Bring it in as soon as possible for the best chance of recovery."
            },
            {
                keywords: ['data', 'recover', 'lost files', 'photos'],
                response: "We can attempt to recover data from broken or malfunctioning phones. It depends on the device condition."
            },
            {
                keywords: ['warranty', 'guarantee'],
                response: "All our repairs come with a 90-day warranty covering the work we performed."
            },
            {
                keywords: ['appointment', 'book', 'schedule', 'visit'],
                response: "You can book a repair appointment by calling us at 9848431087 or visiting our shop at Dipayal Bazzar Doti."
            },
            {
                keywords: ['price', 'cost', 'how much', 'charge'],
                response: "Our prices vary by service:\n- Screen: $40–$120\n- Battery: $25–$60\n- Charging port: $30–$70\nLet me know your phone model for an accurate quote."
            },
            {
                keywords: ['track', 'status', 'progress'],
                response: "To track your repair status, please provide your repair ticket number or call us at 9848431087."
            },
            {
                keywords: ['time', 'duration', 'how long'],
                response: "Most repairs are completed within 1-2 hours. Complex repairs may take up to 24 hours."
            },
            {
                keywords: ['hello', 'hi', 'hey'],
                response: "Hi! I'm your mobile repair assistant. How can I help you today?"
            },
            {
                keywords: ['thank', 'thanks'],
                response: "You're very welcome! Let me know if there's anything else I can help you with."
            }
        ];

        for (let item of keywordMap) {
            if (item.keywords.some(kw => userMessage.includes(kw))) {
                return item.response;
            }
        }

        // Default fallback response
        return "I'm here to help with mobile repairs like screen, battery, software, and water damage issues. Please tell me your device model or problem, and I’ll assist you!";
    }


    // Add service suggestions
    function addServiceSuggestions() {
        const suggestionsContainer = document.createElement('div');
        suggestionsContainer.classList.add('suggested-questions');
        suggestionsContainer.innerHTML = `
                    <button class="suggested-btn">How long does screen replacement take?</button>
                    <button class="suggested-btn">Do you fix water damaged phones?</button>
                    <button class="suggested-btn">Can you recover data from broken phones?</button>
                `;
        chatMessages.appendChild(suggestionsContainer);

        // Add event listeners to new buttons
        document.querySelectorAll('.suggested-questions:last-child .suggested-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const question = this.textContent;
                addMessage(question, 'user');
                simulateBotResponse(question);
                suggestionsContainer.remove();
            });
        });

        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Counter animation
    const counters = document.querySelectorAll('.count');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target') || +counter.innerText.replace('+', '');
            const count = +counter.innerText.replace('+', '');

            // Check if target is reached
            if (count < target) {
                // Calculate increment
                const increment = target / speed;

                // Update counter
                counter.innerText = Math.ceil(count + increment) + '+';

                // Call function again
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + '+';
            }
        };

        // Start counter when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.disconnect();
            }
        });

        observer.observe(counter.parentElement.parentElement);
    });
});


