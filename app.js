// JavaScript to add interactivity to Asmita's Portfolio

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add a scroll-to-top button
document.body.insertAdjacentHTML('beforeend', `
    <button id="scrollToTop" style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        display: none;
        background: #00d4ff;
        border: none;
        color: white;
        padding: 10px 15px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    ">⬆</button>
`);

const scrollToTopButton = document.getElementById('scrollToTop');

// Show the button when the user scrolls down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to navigation items dynamically
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

// Add a typewriter effect to the introductory text
const introText = document.querySelector('.leftSection');
const text = "Hi, My Name is Asmita. I am a passionate Web Developer.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        introText.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeWriter, 100);
    } else {
        document.querySelector('.cursor').style.display = 'none';
    }
}

typeWriter();