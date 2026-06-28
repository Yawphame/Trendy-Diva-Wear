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
