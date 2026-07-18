/*==========================================
        MOBILE NAVIGATION
==========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    
    menuBtn.classList.toggle("active");
    
    navLinks.classList.toggle("active");
    
});


document.querySelectorAll(".nav-links a").forEach(link => {
    
    link.addEventListener("click", () => {
        
        menuBtn.classList.remove("active");
        
        navLinks.classList.remove("active");
        
    });
    
});


/*==========================================
        TYPING EFFECT
==========================================*/

const typingText = document.getElementById("typing-text");

const words = [
    
    "Web Developer",
    
    "Digital Designer"
    
];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeWriter() {

    if (!typingText) return;
    
    
    const currentWord = words[wordIndex];
    
    if (!deleting) {
        
        typingText.textContent = currentWord.substring(0, charIndex++);
        
        if (charIndex > currentWord.length) {
            
            deleting = true;
            
            setTimeout(typeWriter, 1500);
            
            return;
            
        }
        
    } else {
        
        typingText.textContent = currentWord.substring(0, charIndex--);
        
        if (charIndex < 0) {
            
            deleting = false;
            
            wordIndex = (wordIndex + 1) % words.length;
            
        }
        
    }
    
    setTimeout(typeWriter, deleting ? 60 : 100);
    
}

if (typingText) {
    typeWriter();
}


/*==========================================
        COUNTER ANIMATION
==========================================*/

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        
        if (entry.isIntersecting) {
            
            const counter = entry.target;
            
            const target = Number(counter.dataset.target);
            
            let current = 0;
            
            const increment = target / 60;
            
            function updateCounter() {
                
                current += increment;
                
                if (current < target) {
                    
                    counter.textContent = Math.floor(current);
                    
                    requestAnimationFrame(updateCounter);
                    
                } else {
                    
                    counter.textContent = target;
                    
                }
                
            }
            
            updateCounter();
            
            observer.unobserve(counter);
            
        }
        
    });
    
});

counters.forEach(counter => observer.observe(counter));
/*==========================================
        ACTIVE NAVIGATION
==========================================*/

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `${current}.html`) {

            link.classList.add("active");

        }

    });

});


/*==========================================
        HEADER SHADOW
==========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.boxShadow = "none";

    }

});


/*==========================================
        SCROLL REVEAL
==========================================*/

const reveals = document.querySelectorAll(

    ".stat-card, .project-card, .skill-card, .media-card"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

reveals.forEach(item => {

    revealObserver.observe(item);

});