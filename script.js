/* ==========================================
        TRENDY DIVA WEARS
        Premium JavaScript
========================================== */

"use strict";

/* ==========================================
            DOM ELEMENTS
========================================== */

// Header
const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");

// Navigation
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const navIcons = document.querySelector(".nav-icons");

// Hero
const heroSection = document.querySelector(".hero");

// Sections
const sections = document.querySelectorAll("section");
const sectionTitles = document.querySelectorAll(".section-title");

// Cards
const categoryCards = document.querySelectorAll(".category-card");
const productCards = document.querySelectorAll(".product-card");
const featureCards = document.querySelectorAll(".feature-card");
const testimonialCards = document.querySelectorAll(".testimonial-card");
const brandCards = document.querySelectorAll(".brand-card");
const instagramCards = document.querySelectorAll(".instagram-card");

// Buttons
const primaryButtons = document.querySelectorAll(".btn-primary");
const secondaryButtons = document.querySelectorAll(".btn-secondary");
const backToTopButton = document.getElementById("backToTop");

// Forms
const newsletterForm = document.querySelector(".newsletter-form");
const footerNewsletter = document.querySelector(".footer-newsletter");

// Inputs
const emailInputs = document.querySelectorAll('input[type="email"]');

// Utility
const body = document.body;
const html = document.documentElement;

/* ==========================================
          GLOBAL CONFIGURATION
========================================== */

const CONFIG = {

    scrollOffset: 80,

    animationDelay: 150,

    scrollRevealThreshold: 0.15,

    smoothScroll: true

};
/* ==========================================
           BACK TO TOP BUTTON
========================================== */

const toggleBackToTop = () => {

    const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 500) {

        backToTopButton.classList.add("show");

    } else {

        backToTopButton.classList.remove("show");

    }

};

// Smooth Scroll to Top

const scrollToTop = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Events

window.addEventListener("scroll", toggleBackToTop, {

    passive: true

});

backToTopButton.addEventListener("click", scrollToTop);

// Initialize

toggleBackToTop();
/* ==========================================
             STICKY NAVBAR
========================================== */

const handleStickyNavbar = () => {

    const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 80) {

        navbar.classList.add("sticky");

        document.body.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("sticky");

        document.body.classList.remove("navbar-scrolled");

    }

};

// Optimize Scroll Performance

let isScrolling = false;

window.addEventListener("scroll", () => {

    if (!isScrolling) {

        window.requestAnimationFrame(() => {

            handleStickyNavbar();

            isScrolling = false;

        });

        isScrolling = true;

    }

}, {

    passive: true

});

// Initialize

handleStickyNavbar();

/* ==========================================
         MOBILE NAVIGATION MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");

// Toggle Menu

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

});

// Close Menu When Link Is Clicked

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});

// Close Menu When Window Is Resized

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        navMenu.classList.remove("active");

        menuToggle.classList.remove("active");

    }

});
/* ==========================================
             SMOOTH SCROLLING
========================================== */

// Smooth Scroll Function

const smoothScroll = (target) => {

    const element = document.querySelector(target);

    if (!element) return;

    const navbarHeight = navbar.offsetHeight;

    const targetPosition =
        element.offsetTop - navbarHeight;

    window.scrollTo({

        top: targetPosition,

        behavior: "smooth"

    });

};

// Navigation Links

navLinks.forEach(link => {

    link.addEventListener("click", (event) => {

        const href = link.getAttribute("href");

        // Ignore external pages

        if (!href.startsWith("#")) return;

        event.preventDefault();

        smoothScroll(href);

    });

});

// Buttons

document.querySelectorAll('a[href^="#"]').forEach(button => {

    button.addEventListener("click", (event) => {

        const target = button.getAttribute("href");

        if (target === "#") return;

        event.preventDefault();

        smoothScroll(target);

    });

});
/* ==========================================
          ACTIVE NAVIGATION LINK
========================================== */

const updateActiveNavLink = () => {

    const scrollPosition =
        window.scrollY + navbar.offsetHeight + 120;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                const href = link.getAttribute("href");

                if (href === `#${sectionId}`) {

                    link.classList.add("active");

                }

            });

        }

    });

};

// Update on Scroll

window.addEventListener("scroll", updateActiveNavLink, {

    passive: true

});

// Initialize

updateActiveNavLink();

/* ==========================================
        SCROLL REVEAL ANIMATIONS
========================================== */

const revealElements = document.querySelectorAll(
    ".section-title, .category-card, .product-card, .feature-card, .testimonial-card, .brand-card, .instagram-card, .hero-content, .promo-content, .newsletter-content"
);

// Hide Elements Initially

revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(50px)";

});

// Reveal Observer

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

            entry.target.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            observer.unobserve(entry.target);

        });

    },

    {
        threshold: 0.15,
        rootMargin: "0px 0px -80px 0px"
    }

);

// Observe Elements

revealElements.forEach(element => {

    revealObserver.observe(element);

});
/* ==========================================
      NEWSLETTER FORM VALIDATION
========================================== */

const validateEmail = (email) => {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

};

// Handle Newsletter Forms

const newsletterForms = document.querySelectorAll(
    ".newsletter-form, .footer-newsletter"
);

newsletterForms.forEach(form => {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const emailInput = form.querySelector(
            'input[type="email"]'
        );

        const email = emailInput.value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            emailInput.focus();

            return;

        }

        if (!validateEmail(email)) {

            alert("Please enter a valid email address.");

            emailInput.focus();

            return;

        }

        // Success

        alert(
            "✨ Thank you for subscribing to Trendy Diva Wears!"
        );

        form.reset();

    });

});
/* ==========================================
            BUTTON INTERACTIONS
========================================== */

// All Interactive Buttons

const buttons = document.querySelectorAll(
    ".btn-primary, .btn-secondary, .product-btn, .newsletter-form button, .footer-newsletter button"
);

// Ripple Effect

buttons.forEach(button => {

    button.addEventListener("click", function (event) {

        const ripple = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        const radius = diameter / 2;

        ripple.style.width = ripple.style.height =
            `${diameter}px`;

        ripple.style.left =
            `${event.clientX - this.offsetLeft - radius}px`;

        ripple.style.top =
            `${event.clientY - this.offsetTop - radius}px`;

        ripple.classList.add("ripple");

        const oldRipple =
            this.querySelector(".ripple");

        if (oldRipple) {

            oldRipple.remove();

        }

        this.appendChild(ripple);

    });

});

// Hover Animation

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-4px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

// Keyboard Accessibility

buttons.forEach(button => {

    button.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {

            button.click();

        }

    });

});
/* ==========================================
        PERFORMANCE OPTIMIZATIONS
========================================== */

// Debounce Function

const debounce = (callback, delay = 200) => {

    let timeout;

    return (...args) => {

        clearTimeout(timeout);

        timeout = setTimeout(() => {

            callback(...args);

        }, delay);

    };

};

// Throttle Function

const throttle = (callback, limit = 100) => {

    let waiting = false;

    return (...args) => {

        if (!waiting) {

            callback(...args);

            waiting = true;

            setTimeout(() => {

                waiting = false;

            }, limit);

        }

    };

};

// Optimize Window Resize

window.addEventListener(

    "resize",

    debounce(() => {

        console.log("Layout updated.");

    })

);

// Optimize Scroll

window.addEventListener(

    "scroll",

    throttle(() => {

        // Reserved for future scroll features

    }),

    {

        passive: true

    }

);

// Lazy Load Images

const lazyImages = document.querySelectorAll("img[data-src]");

if ("IntersectionObserver" in window) {

    const imageObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const image = entry.target;

                image.src = image.dataset.src;

                image.removeAttribute("data-src");

                observer.unobserve(image);

            });

        },

        {

            threshold: 0.1

        }

    );

    lazyImages.forEach(image => {

        imageObserver.observe(image);

    });

}

// Page Loaded

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// Prevent Empty Links

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});

console.log(
    "%cTrendy Diva Wears",
    "color:#d4af37;font-size:20px;font-weight:bold;"
);

console.log(
    "%cPremium Women's Fashion Website Loaded Successfully.",
    "color:#555;font-size:13px;"
);
