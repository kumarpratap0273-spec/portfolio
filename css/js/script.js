// =====================================
// PRATAP KUMAR - PORTFOLIO JAVASCRIPT
// =====================================

// 1. UPDATE YOUR EMAIL HERE
const PORTFOLIO_EMAIL = "kumarpratap0273@gmail.com";

// 2. MOBILE NAVIGATION
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const opened = navigation.classList.toggle("open");

        menuButton.textContent = opened ? "✕" : "☰";
        menuButton.setAttribute("aria-expanded", String(opened));
    });

    navigation.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navigation.classList.remove("open");
            menuButton.textContent = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

// 3. ACTIVE NAVBAR LINK
const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// 4. TYPING ANIMATION
const typingTarget = document.querySelector(".typing-text");

if (typingTarget) {
    const roles = [
        "AI & ML Enthusiast",
        "Python Programmer",
        "Machine Learning Learner",
        "Data Science Enthusiast"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        typingTarget.textContent =
            currentRole.substring(0, charIndex);

        if (!deleting) {
            charIndex++;

            if (charIndex > currentRole.length) {
                deleting = true;
                setTimeout(typeEffect, 1200);
                return;
            }
        } else {
            charIndex--;

            if (charIndex < 0) {
                deleting = false;
                charIndex = 0;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, deleting ? 45 : 90);
    }

    typeEffect();
}

// 5. SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealElements.forEach(element => observer.observe(element));
} else {
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}

// 6. AUTOMATIC YEAR
document.querySelectorAll(".current-year").forEach(element => {
    element.textContent = new Date().getFullYear();
});

// 7. AUTOMATIC EMAIL UPDATE
document.querySelectorAll("[data-email-link]").forEach(link => {
    link.href = `mailto:${PORTFOLIO_EMAIL}`;
});

document.querySelectorAll(".portfolio-email").forEach(link => {
    link.textContent = PORTFOLIO_EMAIL;
    link.href = `mailto:${PORTFOLIO_EMAIL}`;
});

// 8. IMAGE FALLBACK
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
        img.style.display = "none";

        const fallback =
            img.parentElement.querySelector(".image-fallback");

        if (fallback) {
            fallback.style.display = "grid";
        }
    });
});

// 9. CONTACT FORM
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const sender = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        const status = document.querySelector("#formStatus");

        if (!name || !sender || !message) {
            status.textContent = "Please fill in all fields.";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender)) {
            status.textContent = "Please enter a valid email.";
            return;
        }

        if (PORTFOLIO_EMAIL === "your-email@gmail.com") {
            status.textContent =
                "Please update your email in js/script.js first.";
            return;
        }

        const subject = encodeURIComponent(
            `Portfolio message from ${name}`
        );

        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${sender}\n\nMessage:\n${message}`
        );

        window.location.href =
            `mailto:${PORTFOLIO_EMAIL}?subject=${subject}&body=${body}`;

        status.textContent =
            "Your email application is opening.";
    });
}